import { Role } from "../users/user.entity";

export interface UserDTO {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: Role;
  city: string;
  age: number;
}
