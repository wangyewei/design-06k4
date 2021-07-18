
import React, { useState, useEffect } from "react";

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click', updateMouse)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log('before render', positions.x)
  return (
    <p>x: {positions.x} y: {positions.y}</p>
  )
}

export default MouseTracker