export interface Product {
    id: number;
    name: string;
    category: string;
    price?: number;
    stockCount: number;
    sold: number;
    lastMonthSold: number;
    description?: string;
    vendors?: Vendor[];
    reviews?: string[];
}
export interface Vendor {
    name: string;
    stockCount: number;
}

