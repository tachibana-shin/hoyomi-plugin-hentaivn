import { Crawler } from "@hoyomi/crawler"
import { HentaiVN } from "./index.ts"

/// patch fetch
if (!process.env.NODE_ENV !== 'production') {
  const { fetch: fetchOrigin } = globalThis
  globalThis.fetch = Crawler.fetch = ((input: string | URL | Request, init?: RequestInit) => {
    const request =
      input instanceof Request
        ? input
        : new Request(
            new URL(input, new HentaiVN().init.rootUrl).toString(),
            init
          )

    return fetchOrigin(request) as Promise<Response>
  }) as unknown as any
}

export * from "./index.ts"
const a = new HentaiVN()
console.log(await a.home())