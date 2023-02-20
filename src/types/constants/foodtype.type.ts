export interface foodtypesType {
  name: string;
  id: number;
  list: list[];
}

interface list {
  id: string;
  image: string;
  name: string;
  time: string;
  items: string;
  weight: string;
  price: number;
  quantity: number;
  shopping: string;
  popular: boolean;
}
