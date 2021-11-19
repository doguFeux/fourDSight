import { Role } from './role';

export class User {
  id:string;
  username:string;
  pass:string;
  isLogged:boolean;
  role: Role;
}
