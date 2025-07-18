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
  type RateValue
} from "@hoyomi/bridge_ts"
import { version, description } from "./package.json"
import { load, type CheerioAPI } from "cheerio"

export class HentaiVN extends ABComicService {
  override writeWith: string = "typescript"
  override init: ServiceInit = {
    name: "HentaiVN",
    faviconUrl: createOImage(
      "/wp-content/uploads/2024/02/cropped-hentaivn-512x512-1-32x32.png"
    ),
    rootUrl: "https://hentaivn.cx/",
    version,
    description,
    language: "vi-VN"
  }

  async getURL(comicId: string, chapterId?: string): Promise<string> {
    return (
      `${this.baseUrl}/truyen-hentai/${comicId}` +
      (chapterId ? `/${chapterId}` : "")
    )
  }

  private parseMangas($: CheerioAPI) {
    return $(".site-content .manga")
      .toArray()
      .map((item) => {
        const $item = $(item)

        return defineType<Comic>({
          name: $item.find("h3").text().trim(),
          // biome-ignore lint/style/noNonNullAssertion: <false>
          comicId: $item
            .find("a")
            .attr("href")
            ?.split("/")
            .filter(Boolean)
            .at(-1)!,
          image: createOImage($item.find("img").data("src") as string),
          rate:
            Number.parseFloat(
              $item.find(".itemReviewed").next("span").text().trim()
            ) || undefined,
          lastChap: $item.find(".chapter-item").length
            ? defineType<ComicChapter>({
                name: $item
                  .find(".chapter-item")
                  .first()
                  .find("a")
                  .text()
                  .trim(),
                // biome-ignore lint/style/noNonNullAssertion: <false>
                chapterId: $item
                  .find(".chapter-item")
                  .first()
                  .find("a")
                  .attr("href")
                  ?.split("/")
                  .filter(Boolean)
                  .at(-1)!
              })
            : undefined
        })
      })
  }

  async home(): Promise<ComicHome> {
    const $ = load(
      await fetch("").then(async (res) =>
        res.ok ? res.text() : Promise.reject(await res.text())
      )
    )

    return defineType<ComicHome>({
      carousel: defineType<ComicCarousel>({
        items: $(".slider__item")
          .toArray()
          .map((item) => {
            const $item = $(item)

            return defineType<ComicCarouselItem>({
              image: createOImage($item.find("img").data("src") as string),
              // biome-ignore lint/style/noNonNullAssertion: <false>
              comicId: $item
                .find("a")
                .attr("href")
                ?.split("/")
                .filter(Boolean)
                .at(-1)!,
              name: $item.find("h4").text().trim()
            })
          }),
        aspectRatio: 350 / 476,
        maxHeightBuilder: 400
      }),
      categories: [
        {
          name: "Mới nhất",
          items: this.parseMangas($),
          gridView: true
        }
      ]
    })
  }
  async getCategory(params: {
    categoryId: string
    page: number
    filters: { [key: string]: string[] | null }
  }): Promise<ComicCategory> {
    const $ = load(
      await fetch(
        `${(params.categoryId === "latest"
          ? ""
          : `/${params.categoryId}`
        ).replace(/_/g, "/")}` +
          (params.page > 1 ? `/page/${params.page}/` : "/") +
          (params.filters.m_orderby
            ? `?m_orderby=${params.filters.m_orderby}`
            : "")
      ).then(async (res) =>
        res.ok ? res.text() : Promise.reject(await res.text())
      )
    )

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
                  value: "latest"
                },
                {
                  name: "A-Z",
                  value: "alphabet"
                },
                {
                  name: "Đánh giá",
                  value: "rating"
                },
                {
                  name: "Xu hướng",
                  value: "trending"
                },
                {
                  name: "Lượt xem",
                  value: "views"
                },
                {
                  name: "Bộ mới",
                  value: "new-manga"
                }
              ]
            })
          ]
        : undefined

        const totalPages=  Number.parseInt(
        // biome-ignore lint/style/noNonNullAssertion: <false>
        $(".wp-pagenavi > a.last")
          .attr("href")
          ?.split("/")
          .filter(Boolean)
          .at(-1)!
      ) || 1

    return defineType<ComicCategory>({
      name: $(".item-title.h4").text().trim(),
      url: "",
      items: this.parseMangas($),
      page: params.page,
      totalItems: Number.parseInt($("h1.h4").text().trim()) || totalPages * 24,
      totalPages,
      filters
    })
  }
  async getExplorer(
    page: number,
    filters?: { [key: string]: string[] | null }
  ): Promise<ComicCategory> {
    return this.getCategory({
      categoryId: "latest",
      page,
      filters: filters || {}
    })
  }

  readonly _suggestStore = new Map<string, Comic[]>()

  async getDetails(comicId: string): Promise<MetaComic> {
    const $ = load(
      await fetch(`/truyen-hentai/${comicId}`).then(async (res) =>
        res.ok ? res.text() : Promise.reject(await res.text())
      )
    )

    const suggest = $(".related-manga .related-reading-wrap")
      .toArray()
      .map((manga) => {
        const $manga = $(manga)

        return defineType<Comic>({
          name: $manga.find("h5").text().trim(),
          originalName: $manga.find("h5 > a").attr("title"),
          // biome-ignore lint/style/noNonNullAssertion: <false>
          comicId: $manga
            .find("a")
            .attr("href")
            ?.split("/")
            .filter(Boolean)
            .at(-1)!,
          image: createOImage($manga.find("img").data("src") as string)
        })
      })

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
        count: 0
      }),
      genres: $(".genres-content a")
        .toArray()
        .map((item) => {
          const $item = $(item)

          return defineType<Genre>({
            name: $item.text().trim(),
            genreId: `the-loai_${
              // biome-ignore lint/style/noNonNullAssertion: <false>
              $item.attr("href")?.split("/").filter(Boolean).at(-1)!
            }`
          })
        }),
      author: $(".author-content").text().trim() || undefined,
      views: parseAbbreviatedNumber(
        $(".summary-content:contains(' views')")
          .text()
          .match(/([\d.]+\w) views/)?.[1] ?? ""
      ),
      description: $(".description-summary .summary__content").html() ?? "",
      chapters: $(".wp-manga-chapter a")
        .toArray()
        .reverse()
        .map((item) => {
          const $item = $(item)

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
                .join("/")
            )
          })
        }),
      lastModified: new Date(
        // biome-ignore lint/style/noNonNullAssertion: <false>
        $('[property="article:modified_time"]').attr("content")!
      ),
      extra: JSON.stringify(suggest)
    })
  }
  async getSuggest(params: {
    metaComic: MetaComic
    comicId: string
    page?: number
  }): Promise<Comic[]> {
    return JSON.parse(params.metaComic.extra ?? "")
  }
  async getPages(manga: string, chap: string): Promise<OImage[]> {
    const $ = load(
      await fetch(`/truyen-hentai/${manga}/${chap}`).then(async (res) =>
        res.ok ? res.text() : Promise.reject(await res.text())
      )
    )

    return defineType<OImage[]>(
      $("img.wp-manga-chapter-img")
        .toArray()
        .map((item) => createOImage($(item).attr("src")?.trim() as string))
    )
  }
  search(params: {
    keyword: string
    page: number
    filters: { [key: string]: string[] | null }
    quick: boolean
  }): Promise<ComicCategory> {
    return this.getCategory({
      categoryId: "latest",
      page: params.page,
      filters: { ...params.filters, s: [params.keyword] }
    })
  }
}
registerPlugin(HentaiVN)

function parseAbbreviatedNumber(input: string): number {
  const match = input.trim().match(/^([\d,.]+)([KMB]?)$/i)
  if (!match?.[1]) return NaN

  const number = parseFloat(match[1].replace(/,/g, ""))
  const unit = match[2]?.toUpperCase()

  const multipliers: Record<string, number> = {
    "": 1,
    K: 1e3,
    M: 1e6,
    B: 1e9
  }

  return Math.round(number * (multipliers[unit ?? ""] || 1))
}
