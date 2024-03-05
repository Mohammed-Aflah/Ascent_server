import { Company } from "../../entities/company.entitie";

export interface ICompanyRepository {
  addCompany(data: Company): Promise<Company>;
}
