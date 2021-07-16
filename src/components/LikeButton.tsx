import React, { useState, useEffect } from "react";


const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({ like: 0, on: true })
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    document.title = `点击了${like}次`
  })
  return (
    <>
      <button onClick={() => { setLike(like + 1) }}
        disabled={!on}>
        {like}👍
      </button>
      <button onClick={() => { setOn(!on) }}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton