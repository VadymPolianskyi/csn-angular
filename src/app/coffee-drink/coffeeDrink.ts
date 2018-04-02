export class CoffeeDrink {
  name: string;
  price: number;
  nativePrice: number;
  products: Product[];
  description: string;

}
export class Product {
  name: string;
  price: number;
  unitOfMeasurement: string;
  description: string;

}

export class SelectObject {
  label: string;
  value: string;
}
