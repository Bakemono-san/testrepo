import { TeacherWhereInput } from "./TeacherWhereInput";
import { TeacherOrderByInput } from "./TeacherOrderByInput";

export type TeacherFindManyArgs = {
  where?: TeacherWhereInput;
  orderBy?: Array<TeacherOrderByInput>;
  skip?: number;
  take?: number;
};
