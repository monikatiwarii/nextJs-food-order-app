
export interface cartDataItemType {
  cartData: CartData;
  total: number;
}
export interface CartData {
  id: number;
  created_at: Date;
  updated_at: Date;
  quantity: number;
  fooditem : fooditem
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
  
 

   
   


