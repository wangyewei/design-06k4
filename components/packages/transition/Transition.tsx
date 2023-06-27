import React, { Component, FC } from "react";
import { CSSTransition } from 'react-transition-group'
import Fold, { FoldProps } from "./Fold";
class KTransition extends Component {

  static Fold: FC<FoldProps> = Fold

  render() {
    return (
      <CSSTransition {...this.props}>
        {this.props.children}
      </CSSTransition>
    )
  }
}

export default KTransition