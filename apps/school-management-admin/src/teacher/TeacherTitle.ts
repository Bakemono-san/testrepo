import { Teacher as TTeacher } from "../api/teacher/Teacher";

export const TEACHER_TITLE_FIELD = "id";

export const TeacherTitle = (record: TTeacher): string => {
  return record.id?.toString() || String(record.id);
};
