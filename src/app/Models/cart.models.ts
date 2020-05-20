export interface CartProduct {
  productId: number;
  name?: string;
  price?: number;
  quantity?: number;
}
export interface Product {
  productId: number;
  name?: string;
  price?: number;
  quantity?: number;
  relatedProducts?: string;
}
export interface Config {
  production: boolean;
  apiUrl: string;
}
