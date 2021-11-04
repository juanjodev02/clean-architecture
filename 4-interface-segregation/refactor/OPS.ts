import { IUser1Operations } from "./IUser1Operations";
import { IUser2Operations } from "./IUser2Operations";
import { IUser3Operations } from "./IUser3Operations";

export class OPS implements
  IUser1Operations,
  IUser2Operations,
  IUser3Operations
{
  op1(): void {
    throw new Error("Method not implemented.");
  }
  op2(): void {
    throw new Error("Method not implemented.");
  }
  op3(): void {
    throw new Error("Method not implemented.");
  }
}