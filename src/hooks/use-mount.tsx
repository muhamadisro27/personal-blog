import { useEffect, useState } from "react"

const useMount = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [loading])

  return {
    loading,
    setLoading,
  }
}

export default useMount
