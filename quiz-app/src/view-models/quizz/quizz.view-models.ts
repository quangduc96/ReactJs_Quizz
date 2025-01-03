import { MasterBaseViewModel } from "../master-base.view-model";

export interface QuizViewModel extends MasterBaseViewModel {
  id: string;
  title: string;
  description?: string;
  duration: number;
  thumbnailUrl?: string;
  isActive: boolean;
  numberOfQuestions: number;
}