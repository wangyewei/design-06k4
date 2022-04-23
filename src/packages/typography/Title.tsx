import React, { FC, ReactNode } from "react";
import { tupleNum } from "@/utils";


const Levels = tupleNum(1, 2, 3, 4, 5, 6)
type LevelProps = typeof Levels[number]

export interface TitleProps {
  level: LevelProps
}

const Title: FC<TitleProps> = (props) => {

  const { level } = props

  const Htag = `h${level}`

  const TitleNode: ReactNode = () => <Htag></Htag>

  return (
    <>{TitleNode}</>
  )
}
