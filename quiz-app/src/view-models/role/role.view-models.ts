import { MasterBaseViewModel } from "../master-base.view-model";

export interface RoleViewModel extends MasterBaseViewModel {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
}