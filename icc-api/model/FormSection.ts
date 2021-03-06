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
import { FormColumn } from "./FormColumn"

import { decodeBase64 } from "./ModelHelper"

export class FormSection {
  constructor(json: JSON | any) {
    Object.assign(this as FormSection, json)
  }

  icon?: string
  title?: string
  columns?: number
  formColumns?: Array<FormColumn>
}
