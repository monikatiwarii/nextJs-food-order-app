export interface cartDataItemType {
    created_at: string
    id: number
    quantity: number
    updated_at: string
    total: number
    fooditem : fooditem[]
  }

  export interface fooditem {
    id: number
    created_at : string
    description : string
    image: string
    name: string
    price: number
    updated_at: string
  }
  