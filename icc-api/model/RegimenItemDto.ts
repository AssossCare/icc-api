/**
 * iCure Cloud API Documentation
 * Spring shop sample application
 *
 * OpenAPI spec version: v0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AdministrationQuantity } from "./AdministrationQuantity"
import { CodeStubDto } from "./CodeStubDto"
import { Weekday } from "./Weekday"

import { decodeBase64 } from "./ModelHelper"

export class RegimenItemDto {
  constructor(json: JSON | any) {
    Object.assign(this as RegimenItemDto, json)
  }

  date?: number
  dayNumber?: number
  weekday?: Weekday
  dayPeriod?: CodeStubDto
  timeOfDay?: number
  administratedQuantity?: AdministrationQuantity
}
