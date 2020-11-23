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
import { ValorisationDto } from "./ValorisationDto"

import { decodeBase64 } from "./ModelHelper"

export class FlatRateTarificationDto {
  constructor(json: JSON | any) {
    Object.assign(this as FlatRateTarificationDto, json)
  }

  code?: string
  flatRateType?: FlatRateTarificationDto.FlatRateTypeEnum
  label?: { [key: string]: string }
  valorisations?: Array<ValorisationDto>
  encryptedSelf?: string
}
export namespace FlatRateTarificationDto {
  export type FlatRateTypeEnum = "physician" | "physiotherapist" | "nurse" | "ptd"
  export const FlatRateTypeEnum = {
    Physician: "physician" as FlatRateTypeEnum,
    Physiotherapist: "physiotherapist" as FlatRateTypeEnum,
    Nurse: "nurse" as FlatRateTypeEnum,
    Ptd: "ptd" as FlatRateTypeEnum
  }
}
