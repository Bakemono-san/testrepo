import * as graphql from "@nestjs/graphql";
import { ClassModelResolverBase } from "./base/classModel.resolver.base";
import { ClassModel } from "./base/ClassModel";
import { ClassModelService } from "./classModel.service";

@graphql.Resolver(() => ClassModel)
export class ClassModelResolver extends ClassModelResolverBase {
  constructor(protected readonly service: ClassModelService) {
    super(service);
  }
}
