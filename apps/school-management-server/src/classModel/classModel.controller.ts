import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClassModelService } from "./classModel.service";
import { ClassModelControllerBase } from "./base/classModel.controller.base";

@swagger.ApiTags("classModels")
@common.Controller("classModels")
export class ClassModelController extends ClassModelControllerBase {
  constructor(protected readonly service: ClassModelService) {
    super(service);
  }
}
