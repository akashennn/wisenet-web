export type TSidebarCategories = {
  id: number;
  name: string;
  urlPath: string;
}

export type TPrices = {
  currency: string
  value: number
}

export type TImage = {
  path: string
}

export type TArticle = {
  id: number;
  name: string
  variantName: string
  prices: TPrices
  images: TImage[]
}

export type TCategory = {
  id: number;
  name: string;
  articleCount: number;
  articles: TArticle[];
}