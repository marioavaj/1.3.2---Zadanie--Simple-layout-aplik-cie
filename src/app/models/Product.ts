export interface Product {
  name: string;
  category: string;
  price?: number;
  stockCount: number;
  description?: string;
  vendors: Vendor[];
  reviews?: string[]


}

export interface Vendor{

    name: string;
     stockCount: number}


