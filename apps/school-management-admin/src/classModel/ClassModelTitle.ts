import { ClassModel as TClassModel } from "../api/classModel/ClassModel";

export const CLASSMODEL_TITLE_FIELD = "id";

export const ClassModelTitle = (record: TClassModel): string => {
  return record.id?.toString() || String(record.id);
};
