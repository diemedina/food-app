export type Ingredient = {
  id: string,
  description: string,
  category: string,
  has: boolean,
  buy: boolean
}

export type Recipe = {
  id: string,
  title: string,
  description: string,
  ingredients: Ingredient[],
  fridge: boolean
}