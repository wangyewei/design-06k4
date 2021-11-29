import { FC } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
declare type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
export declare type TransitionProps = CSSTransitionProps & {
    /**动画方式 */
    animation?: AnimationName;
    /**是否添加一层包裹 */
    wrapper?: boolean;
};
/**
 * 动画组件，可以让您简单的操作实现有趣的动画交互
 *
 * ### 使用方式
 *
 * ~~~js
 * import { KTransition } from '06k4-design'
 * ~~~
 */
export declare const KTransition: FC<TransitionProps>;
export default KTransition;
