var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * 页面中最常用的的字体图标元素
 * ### 引用方法
 *
 * ~~~js
 * import { KIcon } from '06k4-design'
 * ~~~
 */
export var KIcon = function (props) {
    var _a;
    var className = props.className, 
    /** 设置 KIcon 的主题*/
    theme = props.theme, restPros = __rest(props, ["className", "theme"]);
    var classes = classNames('yewei-icon', className, (_a = {},
        _a["yewei-icon-" + theme] = theme,
        _a));
    return (React.createElement(FontAwesomeIcon, __assign({ className: classes }, restPros)));
};
export default KIcon;
