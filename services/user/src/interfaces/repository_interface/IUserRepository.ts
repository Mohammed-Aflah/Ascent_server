import { User } from "../../entities/user.entity";

export interface IUserRepository {
  addUserData(data:User):Promise<User>  
  getUserData(id: string): Promise<User>;
  updatePassword(newPass: string,email:string): Promise<User>;
}
