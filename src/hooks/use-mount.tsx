import { useEffect, useState } from "react"

const useMount = (timer: number = 0) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, timer)
  }, [])

  return {
    loading,
    setLoading,
  }
}

export default useMount
