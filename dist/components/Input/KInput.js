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
import KIcon from '../Icon/KIcon';
/**
 *
 * 功能丰富的、安全的输入框！
 *
 * ### 使用方法
 * ~~~js
 * import { KInput } from '06k4-design'
 * ~~~
 *
 */
export var KInput = function (props) {
    var _a;
    var disabled = props.disabled, size = props.size, icon = props.icon, prepend = props.prepend, append = props.append, style = props.style, restProps = __rest(props, ["disabled", "size", "icon", "prepend", "append", "style"]);
    var classes = classNames('yewei-input-wrapper', (_a = {},
        _a["yewei-input-" + size] = size,
        _a['is-disabled'] = disabled,
        _a['input-group'] = prepend || append,
        _a['input-group-append'] = !!append,
        _a['input-group-prepend'] = !!prepend,
        _a));
    return (React.createElement("div", { className: classes, style: style },
        prepend && React.createElement("div", { className: "yewei-input-group-prepend" }, prepend),
        icon && React.createElement("div", { className: "yewei-input-icon-wrap" },
            React.createElement(KIcon, { icon: icon })),
        React.createElement("input", __assign({ className: "yewei-input-inner", type: "text", disabled: disabled }, restProps)),
        append && React.createElement("div", { className: "yewei-input-group-append" }, append)));
};
export default KInput;
