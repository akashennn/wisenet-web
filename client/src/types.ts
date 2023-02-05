export type TCategory = {
  name: string
  articles: TArticle[]
  articleCount: number
  childCategories: TChildCategory[]
}

export type TArticle = {
  name: string
  variantName: string
  prices: TPrices
  images: TImage[]
}

export type TChildCategory = {
  name: string
  urlPath: string
}

export type TPrices = {
  currency: string
  value: number
}

export type TImage = {
  path: string
}