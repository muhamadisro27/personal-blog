import api from "@/lib/axios"
import { IResponseHooksUseFetch, UseRequestOptions } from "@/types/api"
import { HTTP_METHOD } from "@/utils/api"
import { useEffect, useState } from "react"

const useFetch = <T>(
  url: string,
  {
    method = HTTP_METHOD.GET,
    body,
    trigger = true,
    ...config
  }: UseRequestOptions = {}
): IResponseHooksUseFetch => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    try {
      const res = await api.request<T>({
        url,
        method,
        data: body,
        ...config,
      })
      setData(res.data)
    } catch (err: any) {
      setError(err.response?.data?.error || err.message || "Request failed")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (trigger) fetchData()
  }, [url, method, trigger])

  return { data, loading, error, refetch: fetchData }
}

export default useFetch
