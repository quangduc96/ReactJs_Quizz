import { MasterBaseViewModel } from "../master-base.view-model";

export interface UserViewModel extends MasterBaseViewModel {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
  avatar?: string;
  isActive: boolean;
  roles: string[];
}

// export class UserViewModelImpl implements UserViewModel {
//     id: string;
//     firstName: string;
//     lastName: string;
//     userName: string;
//     email: string;
//     phoneNumber: string;
//     dateOfBirth: Date;
//     avatar?: string;
//     isActive: boolean;
//     roles: string[];

//     constructor(
//         id: string,
//         firstName: string,
//         lastName: string,
//         userName: string,
//         email: string,
//         phoneNumber: string,
//         dateOfBirth: Date,
//         avatar: string | undefined,
//         isActive: boolean,
//         roles: string[]
//     ) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.userName = userName;
//         this.email = email;
//         this.phoneNumber = phoneNumber;
//         this.dateOfBirth = dateOfBirth;
//         this.avatar = avatar;
//         this.isActive = isActive;
//         this.roles = roles;
//     }

//     get displayName(): string {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }