import { ILicense } from "./ILicense";

export class BusinessLicense implements ILicense {
  calcFee(): void {
    throw new Error("Method not implemented.");
  }
  private users: any[];
}