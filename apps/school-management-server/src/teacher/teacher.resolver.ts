import * as graphql from "@nestjs/graphql";
import { TeacherResolverBase } from "./base/teacher.resolver.base";
import { Teacher } from "./base/Teacher";
import { TeacherService } from "./teacher.service";

@graphql.Resolver(() => Teacher)
export class TeacherResolver extends TeacherResolverBase {
  constructor(protected readonly service: TeacherService) {
    super(service);
  }
}
