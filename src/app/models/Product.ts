export class Product {
  id: number;
  [x: string]: any;
  name: string;
  category: string;
  price?: number;
  stockCount: number;
  description?: string;
  vendors: Vendor[];
  reviews?: string[]


}

export class Vendor{

    name: string;
     stockCount: number}


