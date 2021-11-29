var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import React, { useState, createContext } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: '0' });
/**
 * 开发中最常用的导航菜单栏
 *
 * ### 引用方法
 *
 * ~~~js
 * import { KMenu, KMenuItem, KSubMenu } from '06k4-design'
 * ~~~
 */
export var KMenu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = __read(useState(defaultIndex), 2), currentActive = _a[0], setActive = _a[1];
    var classes = classNames('yewei-menu', className, {
        'yewei-menu-vertical': mode === 'vertical',
        'yewei-menu-horizontal': mode !== 'vertical'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    var renderChildern = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'KMenuItem' || displayName === 'KSubMenu') {
                return React.cloneElement(childElement, { index: index.toString() });
            }
            else {
                throw Error('yewei-design-Waring: KMenu has a child witch is not a KMenuItem component');
            }
        });
    };
    return (React.createElement(MenuContext.Provider, { value: passedContext },
        React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" }, renderChildern())));
};
KMenu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
};
export default KMenu;
