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
import { AgreementAppendixDto } from "./AgreementAppendixDto"

import { decodeBase64 } from "./ModelHelper"

export class ParagraphAgreementDto {
  constructor(json: JSON | any) {
    Object.assign(this as ParagraphAgreementDto, json)
  }

  timestamp?: number
  paragraph?: string
  accepted?: boolean
  inTreatment?: boolean
  canceled?: boolean
  careProviderReference?: string
  decisionReference?: string
  start?: number
  end?: number
  cancelationDate?: number
  quantityValue?: number
  quantityUnit?: string
  ioRequestReference?: string
  responseType?: string
  refusalJustification?: { [key: string]: string }
  verses?: Array<number>
  coverageType?: string
  unitNumber?: number
  strength?: number
  strengthUnit?: string
  agreementAppendices?: Array<AgreementAppendixDto>
  documentId?: string
}
