import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeacherService } from "./teacher.service";
import { TeacherControllerBase } from "./base/teacher.controller.base";

@swagger.ApiTags("teachers")
@common.Controller("teachers")
export class TeacherController extends TeacherControllerBase {
  constructor(protected readonly service: TeacherService) {
    super(service);
  }
}
