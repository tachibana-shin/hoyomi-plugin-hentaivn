
/// patch fetch
if (!process.env.NODE_ENV !== 'production') {
  const { fetch: fetchOrigin } = globalThis
  globalThis.fetch = ((input: string | URL | Request, init?: RequestInit) => {
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
