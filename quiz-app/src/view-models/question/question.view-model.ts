import { QuestionType } from "../../enums/question-type";
import { MasterBaseViewModel } from "../master-base.view-model";

export interface QuestionViewModel extends MasterBaseViewModel {
  id: string; // Guid in C# is typically represented as a string in TypeScript
  content: string;
  questionType: QuestionType;
  isActive: boolean;
  numberOfAnswers: number;
}

