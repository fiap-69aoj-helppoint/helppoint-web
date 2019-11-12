import { Size } from './size.model';

export class Product {
  public description: string;
  public image: string;
  public price: number;
  public sizes: Size[];

  constructor(description: string, image: string, sizes: Size[]) {
    this.description = description;
    this.image = image;
    this.sizes = sizes;
  }
}
