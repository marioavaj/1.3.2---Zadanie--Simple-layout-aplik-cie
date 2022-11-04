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

export interface VendorsInApi {
    id: number;
    uuid: string;
    name: string;
    stockCount: number;
}

export interface newProductToApi {
    id: number;
    uuid: string;
    name: string;
    price: number;
    category: string;
    description: string;
    stockCount: number;
    sellCountOverall: number;
    sellCountLastMonth: number;
    vendors: VendorsInApi[];
    reviews: string[];
}
