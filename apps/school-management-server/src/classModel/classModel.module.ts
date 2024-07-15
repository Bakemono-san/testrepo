import { Module } from "@nestjs/common";
import { ClassModelModuleBase } from "./base/classModel.module.base";
import { ClassModelService } from "./classModel.service";
import { ClassModelController } from "./classModel.controller";
import { ClassModelResolver } from "./classModel.resolver";

@Module({
  imports: [ClassModelModuleBase],
  controllers: [ClassModelController],
  providers: [ClassModelService, ClassModelResolver],
  exports: [ClassModelService],
})
export class ClassModelModule {}
