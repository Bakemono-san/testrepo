import { Module } from "@nestjs/common";
import { SubjectModuleBase } from "./base/subject.module.base";
import { SubjectService } from "./subject.service";
import { SubjectController } from "./subject.controller";
import { SubjectResolver } from "./subject.resolver";

@Module({
  imports: [SubjectModuleBase],
  controllers: [SubjectController],
  providers: [SubjectService, SubjectResolver],
  exports: [SubjectService],
})
export class SubjectModule {}
