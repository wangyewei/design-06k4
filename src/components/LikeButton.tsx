/*
 * @Autor: YeWei Wang
 * @Date: 2021-07-17 01:09:22
 * @WeChat: wj826036
 * @Motto: 求知若渴，虚心若愚
 * @Description: 
 * @LastEditTime: 2021-07-18 21:38:25
 * @Version: 1.0
 * @FilePath: \YeweiDessign_ts_react\src\components\LikeButton.tsx
 */

import React, { useState, useEffect } from "react";
// import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({ like: 0, on: true })
  const [like, setLike] = useState(0)
  // const [on, setOn] = useState(true)
  // const positions = useMousePosition()
  function handleAlertClick() {
    setTimeout(() => {
      alert('you click on' + like)
    }, 3000)
  }
  useEffect(() => {
    console.log('doucument title effect is running')
    document.title = `点击了${like}次`
  }, [like])
  return (
    <>

      <button onClick={() => { setLike(like + 1) }}
        /*disabled={!on}*/>
        {like}👍
      </button>

      <button onClick={handleAlertClick}>
        Alert!
      </button>
    </>
  )
}

export default LikeButton