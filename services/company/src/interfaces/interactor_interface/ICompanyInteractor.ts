import { Company } from "../../entities/company.entitie";

export interface ICompanyInteractor {
  addCompany(data: Company): Promise<Company>;
  getCompany(id: string): Promise<Company>;
  changeStatus(
    id: string,
    status: "Accepted" | "Rejected" | "Pending",
    description: string
  ): Promise<Company>;
  getApprovelCompanies(): Promise<Company[]>;
  updateProfile(id:string,data: Company): Promise<Company>;
}
