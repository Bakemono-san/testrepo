import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClassModelServiceBase } from "./base/classModel.service.base";

@Injectable()
export class ClassModelService extends ClassModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
