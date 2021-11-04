import { IUser3Operations } from "./IUser3Operations";
import { OPS } from "./OPS";

export class User3 extends OPS {
  exampleFunction(): void {
    const op: IUser3Operations = new OPS();
    op.op3();
  }
}