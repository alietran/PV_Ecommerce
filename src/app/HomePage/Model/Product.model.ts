import { Category } from "./Category.model"

export class Product {
  name: string
  price: number
  galleries : Array<any> = []
  description: string
  sku: number
  desc: string
  quantity: number
  warranty: number
  slug: string
  category: Category
    constructor(){

    }
}
