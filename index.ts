// biome-ignore assist/source/organizeImports: <false>
import {
  ABComicService,
  type Comic,
  type ComicCarousel,
  type ComicCarouselItem,
  type ComicChapter,
  createOImage,
  defineType,
  type Filter,
  registerPlugin,
  type ComicCategory,
  type ComicHome,
  type MetaComic,
  type OImage,
  type ServiceInit,
  StatusEnum,
  type Genre,
  type RateValue,
} from "@hoyomi/bridge_ts";
import { version, description } from "./package.json";
import { load, type CheerioAPI } from "cheerio";
import { Crawler, type } from "@hoyomi/crawler";

export class HentaiVN extends ABComicService {
  override writeWith: string = "typescript";
  override init: ServiceInit = {
    name: "HentaiVN",
    faviconUrl: createOImage(
      "/wp-content/uploads/2024/02/cropped-hentaivn-512x512-1-32x32.png",
    ),
    rootUrl: "https://hentaivn.cx/",
    version,
    description,
    language: "vi-VN",
  };

  async getURL(comicId: string, chapterId?: string): Promise<string> {
    return (
      `${this.baseUrl}/truyen-hentai/${comicId}` +
      (chapterId ? `/${chapterId}` : "")
    );
  }

  private parseMangas(c: Crawler) {
    const { $ } = c;
    return $(".site-content .manga")
      .toArray()
      .map((item) => {
        const $item = $(item);

        return defineType<Comic>({
          name: c.get($item.find("h3")),
          // biome-ignore lint/style/noNonNullAssertion: <false>
          comicId: c.get($item.find("a"), type("slug")(-1)),
          image: createOImage(c.get($item.find("img"), type("str"), ".src")),
          rate: c.get($item.find(".itemReviewed").next("span"), type("float?")),
          lastChap: $item.find(".chapter-item").length
            ? defineType<ComicChapter>({
                name: c.get($item.find(".chapter-item").first().find("a")),
                // biome-ignore lint/style/noNonNullAssertion: <false>
                chapterId: c.get(
                  $item.find(".chapter-item").first().find("a"),
                  type("slug")(-1),
                ),
              })
            : undefined,
        });
      });
  }

  async home(): Promise<ComicHome> {
    const crawler = await Crawler.load("");
    const { $ } = crawler;

    return defineType<ComicHome>({
      carousel: defineType<ComicCarousel>({
        items: $(".slider__item")
          .toArray()
          .map((item) => {
            const $item = $(item);

            return defineType<ComicCarouselItem>({
              image: createOImage(
                crawler.get($item.find("img"), Crawler.types.str, ".src"),
              ),
              // biome-ignore lint/style/noNonNullAssertion: <false>
              comicId: crawler.get($item.find("a"), type("slug")(-1)),
              name: crawler.get($item.find("h4")),
            });
          }),
        aspectRatio: 350 / 476,
        maxHeightBuilder: 400,
      }),
      categories: [
        {
          name: "Mới nhất",
          items: this.parseMangas(crawler),
          gridView: true,
        },
      ],
    });
  }
  async getCategory(params: {
    categoryId: string;
    page: number;
    filters: { [key: string]: string[] | null };
  }): Promise<ComicCategory> {
    const c = await Crawler.load(
      `${(params.categoryId === "latest"
        ? ""
        : `/${params.categoryId}`
      ).replace(/_/g, "/")}` +
        (params.page > 1 ? `/page/${params.page}/` : "/"),
      {
        query: params.filters.m_orderby
          ? {
              m_orderby: params.filters.m_orderby,
            }
          : {},
      },
    );
    const { $ } = c;

    const filters =
      $(".tab-wrap").length > 0
        ? [
            defineType<Filter>({
              name: "Sắp xếp",
              key: "m_orderby",
              multiple: false,
              options: [
                {
                  name: "Mới nhất",
                  value: "latest",
                },
                {
                  name: "A-Z",
                  value: "alphabet",
                },
                {
                  name: "Đánh giá",
                  value: "rating",
                },
                {
                  name: "Xu hướng",
                  value: "trending",
                },
                {
                  name: "Lượt xem",
                  value: "views",
                },
                {
                  name: "Bộ mới",
                  value: "new-manga",
                },
              ],
            }),
          ]
        : undefined;

    const totalPages =
      c.get(
        $(".wp-pagenavi > a.last"),
        type("regexp")(/(\d+)\/?$/, type("int?")),
        ":href",
      ) || 1;

    return defineType<ComicCategory>({
      name: c.get(".item-title.h4"),
      url: "",
      items: this.parseMangas(c),
      page: params.page,
      totalItems: c.get("h1.h4", type("int?")) || totalPages * 24,
      totalPages,
      filters,
    });
  }
  async getExplorer(
    page: number,
    filters?: { [key: string]: string[] | null },
  ): Promise<ComicCategory> {
    return this.getCategory({
      categoryId: "latest",
      page,
      filters: filters || {},
    });
  }

  readonly _suggestStore = new Map<string, Comic[]>();

  async getDetails(comicId: string): Promise<MetaComic> {
    const c = await Crawler.load(`/truyen-hentai/${comicId}`);
    const { $ } = c;

    const suggest = $(".related-manga .related-reading-wrap")
      .toArray()
      .map((manga) => {
        const $manga = $(manga);

        return defineType<Comic>({
          name: c.get($manga.find("h5")),
          originalName: c.get($manga.find("h5 > a"), type("str"), ":title"),
          // biome-ignore lint/style/noNonNullAssertion: <false>
          comicId: c.get($manga.find("a"), type("slug")(-1)),
          image: createOImage(c.get($manga.find("img"), type("str"), ".src")),
        });
      });

    return defineType<MetaComic>({
      name: $(".post-title").text().trim(),
      originalName: $(".summary-heading h5:contains('Alternative')")
        .parent()
        .parent()
        .find(".summary-content")
        .text()
        .trim(),
      image: createOImage($(".summary_image img").data("src") as string),
      status:
        $(".summary-heading h5:contains('Status')")
          .parent()
          .parent()
          .find(".summary-content")
          .text()
          .trim()
          .toLowerCase() === "ongoing"
          ? StatusEnum.Ongoing
          : StatusEnum.Completed,
      rate: defineType<RateValue>({
        value:
          Number.parseFloat($(".post-total-rating .score").text().trim()) || 0,
        best: 5,
        count: 0,
      }),
      genres: $(".genres-content a")
        .toArray()
        .map((item) => {
          const $item = $(item);

          return defineType<Genre>({
            name: $item.text().trim(),
            genreId: `the-loai_${// biome-ignore lint/style/noNonNullAssertion: <false>
            $item.attr("href")?.split("/").filter(Boolean).at(-1)!}`,
          });
        }),
      author: $(".author-content").text().trim() || undefined,
      views: parseAbbreviatedNumber(
        $(".summary-content:contains(' views')")
          .text()
          .match(/([\d.]+\w) views/)?.[1] ?? "",
      ),
      description: $(".description-summary .summary__content").html() ?? "",
      chapters: $(".wp-manga-chapter a")
        .toArray()
        .reverse()
        .map((item) => {
          const $item = $(item);

          return defineType<ComicChapter>({
            name: $item.text().trim(),
            // biome-ignore lint/style/noNonNullAssertion: <false>
            chapterId: $item.attr("href")?.split("/").filter(Boolean).at(-1)!,
            time: new Date(
              $item
                .find(".chapter-release-date")
                .text()
                .trim()
                .split("/")
                .reverse()
                .join("/"),
            ),
          });
        }),
      lastModified: new Date(
        // biome-ignore lint/style/noNonNullAssertion: <false>
        $('[property="article:modified_time"]').attr("content")!,
      ),
      extra: JSON.stringify(suggest),
    });
  }
  async getSuggest(params: {
    metaComic: MetaComic;
    comicId: string;
    page?: number;
  }): Promise<Comic[]> {
    return JSON.parse(params.metaComic.extra ?? "");
  }
  async getPages(manga: string, chap: string): Promise<OImage[]> {
    const c = await Crawler.load(`/truyen-hentai/${manga}/${chap}`);
    const { $ } = c;

    return defineType<OImage[]>(
      $("img.wp-manga-chapter-img")
        .toArray()
        .map((item) => createOImage(c.get(item, type("str"), ":src"))),
    );
  }
  search(params: {
    keyword: string;
    page: number;
    filters: { [key: string]: string[] | null };
    quick: boolean;
  }): Promise<ComicCategory> {
    return this.getCategory({
      categoryId: "latest",
      page: params.page,
      filters: { ...params.filters, s: [params.keyword] },
    });
  }
}
registerPlugin(HentaiVN);

function parseAbbreviatedNumber(input: string): number {
  const match = input.trim().match(/^([\d,.]+)([KMB]?)$/i);
  if (!match?.[1]) return NaN;

  const number = parseFloat(match[1].replace(/,/g, ""));
  const unit = match[2]?.toUpperCase();

  const multipliers: Record<string, number> = {
    "": 1,
    K: 1e3,
    M: 1e6,
    B: 1e9,
  };

  return Math.round(number * (multipliers[unit ?? ""] || 1));
}
