export const HTTP_METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
} as const

export const HTTP_CONTENT_TYPE = {
  APPLICATION_JSON: "application/json",
  MULTIPART_FORM_DATA: "multipart/formdata",
} as const

export const HTTP_STATUS_CODE = {
  SUCCESS: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const

export const BASE_URL = {
  article: `/article`,
} as const
