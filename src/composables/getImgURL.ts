export default (url: string) => new URL(url, import.meta.url).href
