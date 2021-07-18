
import { useState, useEffect } from "react";
import axios from "axios";

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoding] = useState(false)

  useEffect(() => {
    setLoding(true)
    axios.get(url).then(result => {
      setData(result.data)
      setLoding(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return [data, loading]
}

export default useURLLoader