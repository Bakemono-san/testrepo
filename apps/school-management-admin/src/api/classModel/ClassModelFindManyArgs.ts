import { ClassModelWhereInput } from "./ClassModelWhereInput";
import { ClassModelOrderByInput } from "./ClassModelOrderByInput";

export type ClassModelFindManyArgs = {
  where?: ClassModelWhereInput;
  orderBy?: Array<ClassModelOrderByInput>;
  skip?: number;
  take?: number;
};
