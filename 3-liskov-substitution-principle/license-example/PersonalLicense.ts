import { ILicense } from "./ILicense";

export class PersonalLicense implements ILicense {
  calcFee(): void {
    throw new Error("Method not implemented.");
  }
}