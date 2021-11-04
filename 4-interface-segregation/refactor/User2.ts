import { IUser2Operations } from "./IUser2Operations";
import { OPS } from "./OPS";

export class User2 {
  exampleFunction(): void {
    const op: IUser2Operations = new OPS();
    op.op2();
  }
}