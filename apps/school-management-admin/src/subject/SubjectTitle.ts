import { Subject as TSubject } from "../api/subject/Subject";

export const SUBJECT_TITLE_FIELD = "id";

export const SubjectTitle = (record: TSubject): string => {
  return record.id?.toString() || String(record.id);
};
