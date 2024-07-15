import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubjectService } from "./subject.service";
import { SubjectControllerBase } from "./base/subject.controller.base";

@swagger.ApiTags("subjects")
@common.Controller("subjects")
export class SubjectController extends SubjectControllerBase {
  constructor(protected readonly service: SubjectService) {
    super(service);
  }
}
