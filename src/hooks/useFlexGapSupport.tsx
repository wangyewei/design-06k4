import React, { useEffect, useState } from "react";
import { detectFlexGapSupported } from '../packages/_utils/index'
export default () => {
  const [flexable, setFlexabel] = useState(false)
  useEffect(() => {
    setFlexabel(detectFlexGapSupported())
  }, [])

  return flexable
}