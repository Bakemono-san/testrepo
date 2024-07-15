import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubjectServiceBase } from "./base/subject.service.base";

@Injectable()
export class SubjectService extends SubjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
