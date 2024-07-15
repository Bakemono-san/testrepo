import { SubjectWhereInput } from "./SubjectWhereInput";
import { SubjectOrderByInput } from "./SubjectOrderByInput";

export type SubjectFindManyArgs = {
  where?: SubjectWhereInput;
  orderBy?: Array<SubjectOrderByInput>;
  skip?: number;
  take?: number;
};
