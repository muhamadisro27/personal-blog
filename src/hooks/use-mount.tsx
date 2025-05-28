import { useState } from "react"

const useMount = () => {
  const [loading, setLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, timer)
  // }, [])

  return {
    loading,
    setLoading,
  }
}

export default useMount
