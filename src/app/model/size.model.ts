import { Color } from './color.model';

export class Size {
  public description: string;
  public amount: number;
  public colors: Color[];

  constructor(description: string, amount: number, colors: Color[]) {
    this.description = description;
    this.amount = amount;
    this.colors = colors;
  }
}
