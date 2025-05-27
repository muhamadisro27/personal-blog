import api from "@/lib/axios"
import { IResponseHooksUseFetch, UseRequestOptions } from "@/types/api"
import { HTTP_METHOD } from "@/utils/api"
import { useEffect, useState, useCallback } from "react"

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

  const fetchData = useCallback(async () => {
    try {
      const res = await api.request<T>({
        url,
        method,
        data: body,
        ...config,
      })
      setData(res.data)
    } catch (err) {
      console.error("error", err)
      setError("Request API failed")
    } finally {
      setLoading(false)
    }
  }, [body, config, method, url])
  useEffect(() => {
    if (trigger) fetchData()
  }, [url, method, trigger, fetchData])

  return { data, loading, error, refetch: fetchData }
}

export default useFetch
