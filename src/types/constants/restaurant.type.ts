export interface restaurantType {
  restaurantId: number;
  name: string;
  address: string;
  time: Time;
  slug: string;
  price: number;
  foods: number[];
  images: string;
  category: string[];
  menu :{
    key : number,
    value : string
  }
}

export interface Time {
  opentime: string;
  closetime: string;
}
