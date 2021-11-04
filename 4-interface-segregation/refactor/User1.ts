import { OPS } from "../bad-example/OPS";
import { IUser1Operations } from "./IUser1Operations";

export class User1 {
  exampleFunction(): void {
    const op: IUser1Operations = new OPS();
    op.op1();
    // op.op3(); -> Error
  }
}