import * as graphql from "@nestjs/graphql";
import { SubjectResolverBase } from "./base/subject.resolver.base";
import { Subject } from "./base/Subject";
import { SubjectService } from "./subject.service";

@graphql.Resolver(() => Subject)
export class SubjectResolver extends SubjectResolverBase {
  constructor(protected readonly service: SubjectService) {
    super(service);
  }
}
