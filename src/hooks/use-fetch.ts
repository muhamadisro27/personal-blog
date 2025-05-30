import api from "@/lib/axios"
import { IResponseHooksUseFetch, UseRequestOptions } from "@/types/api"
import { HTTP_METHOD } from "@/utils/api"
import { useEffect, useState, useCallback, useMemo } from "react"
import { useToast } from "@/hooks/use-toast"

const useFetch = <T>(
  url: string,
  {
    method = HTTP_METHOD.GET,
    body,
    trigger = true,
    ...config
  }: UseRequestOptions = {}
): IResponseHooksUseFetch => {
  const { toast } = useToast()

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(trigger)
  const [error, setError] = useState<string | null>(null)

  const memoizedConfig = useMemo(() => config, [JSON.stringify(config)])

  const memoizedBody = useMemo(() => body, [JSON.stringify(body)])

  const fetchData = useCallback(async () => {
    if (!url) return

    setLoading(true)
    try {
      const res = await api.request({
        url,
        method,
        data: memoizedBody,
        ...memoizedConfig,
      })

      setData(res.data)
      setError(null)
    } catch (err) {
      console.error("error", err)
      setError("Request API failed")
      toast({
        title: "Uh oh! Something went wrong.",
        duration : 2000,
        description: "There was a problem with your request.",
        variant : 'destructive'
      })
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }, [memoizedBody, memoizedConfig, method, url])

  useEffect(() => {
    if (trigger) fetchData()
  }, [trigger, fetchData])

  return { data, loading, error, refetch: fetchData }
}

export default useFetch
