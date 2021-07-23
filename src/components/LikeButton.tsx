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

import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../App";
// import useMousePosition from "../hooks/useMousePosition";

const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({ like: 0, on: true })
  const [like, setLike] = useState(0)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  const style = {
    background: theme.background,
    color: theme.color
  }
  // const [on, setOn] = useState(true)
  // const positions = useMousePosition()
  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on' + likeRef.current)
    }, 3000)
  }
  useEffect(() => {
    console.log('doucument title effect is running')
    document.title = `点击了${like}次`
  }, [like])
  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  return (
    <>
      <input type="text" ref={domRef} />
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++
        }}
        style={style}
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