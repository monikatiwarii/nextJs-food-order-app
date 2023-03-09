export interface restaurantType {
  restaurantId: number;
  name: string;
  address: string;
  time: Time;
  slug: string;
  price: number;
  foods: number[];
  images: string;
  category: Category[]
  menu :{
    key : number,
    value : string
  }
}

export interface Time {
  opentime: string;
  closetime: string;
}

export interface Category {
  name: string;
  [key: number]: string
};
