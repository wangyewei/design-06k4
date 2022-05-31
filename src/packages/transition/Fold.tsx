import React, { memo, ReactNode } from "react";
import { CSSTransition } from "react-transition-group";

export type FoldProps = {
  show: boolean;
  children?: ReactNode;
};


const elTransition = "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out";

export default memo((props: FoldProps) => {
  const { show } = props;

  const onEnter = (el: HTMLElement) => {
    el.style.transition = elTransition
    el.style.height = '0'

    el.style.padding = '0 4px'
  }

  const onEntering = (el: HTMLElement) => {

    el.style.height = `${el.scrollHeight + 16}px`
    el.style.overflow = 'hidden'
    el.style.padding = '8px 4px'

  }


  const onExit = (el: HTMLElement) => {
    el.style.height = `${el.scrollHeight + 16}px`
    el.style.padding = '8px 4px'

  }

  const onExiting = (el: HTMLElement) => {
    el.style.height = '0'
    el.style.padding = '0 4px'

  }
  return (
    <CSSTransition
      in={show}
      timeout={300}
      unmountOnExit
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
      onExiting={onExiting}
    >
      {props.children}
    </CSSTransition>
  );
});