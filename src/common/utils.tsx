export const getPrimaryKeyFromURL = (url: string) => url.match(/\d+/)?.[0] || ''

export const objectMapper = (data?: object) => {
  if (!data) return []

  return Object.entries(data).map(([key, value]) => {
    return { [key]: value }
  })
}

export const Maybe = {
  isArrayOrString: (data: string | string[]) => {
    if (Array.isArray(data)) return data.join(', ')

    return data
  },
}
