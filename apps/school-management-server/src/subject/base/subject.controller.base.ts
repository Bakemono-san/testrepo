/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SubjectService } from "../subject.service";
import { SubjectCreateInput } from "./SubjectCreateInput";
import { Subject } from "./Subject";
import { SubjectFindManyArgs } from "./SubjectFindManyArgs";
import { SubjectWhereUniqueInput } from "./SubjectWhereUniqueInput";
import { SubjectUpdateInput } from "./SubjectUpdateInput";

export class SubjectControllerBase {
  constructor(protected readonly service: SubjectService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Subject })
  async createSubject(
    @common.Body() data: SubjectCreateInput
  ): Promise<Subject> {
    return await this.service.createSubject({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Subject] })
  @ApiNestedQuery(SubjectFindManyArgs)
  async subjects(@common.Req() request: Request): Promise<Subject[]> {
    const args = plainToClass(SubjectFindManyArgs, request.query);
    return this.service.subjects({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Subject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async subject(
    @common.Param() params: SubjectWhereUniqueInput
  ): Promise<Subject | null> {
    const result = await this.service.subject({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Subject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSubject(
    @common.Param() params: SubjectWhereUniqueInput,
    @common.Body() data: SubjectUpdateInput
  ): Promise<Subject | null> {
    try {
      return await this.service.updateSubject({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Subject })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSubject(
    @common.Param() params: SubjectWhereUniqueInput
  ): Promise<Subject | null> {
    try {
      return await this.service.deleteSubject({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
