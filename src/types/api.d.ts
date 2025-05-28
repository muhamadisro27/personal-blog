export interface IFetchGlobal<T> {
  data?: T
  pagination?: {
    currentPage: number
    pageSize: number
  }
  success: boolean
  error?: string | null
  message?: string
}

export interface UseRequestOptions extends AxiosRequestConfig {
  method?: Method
  trigger?: boolean
  body?: Record<string, string>
}

export interface IResponseHooksUseFetch {
  data: T | null
  loading: boolean
  error: string | null
  refetch?: () => Promise<void>
}
