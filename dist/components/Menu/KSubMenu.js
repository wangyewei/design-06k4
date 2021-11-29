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
import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from './KMenu';
import KIcon from '../Icon/KIcon';
import KTransition from "../Transition/KTransition";
export var KSubMenu = function (_a) {
    var index = _a.index, title = _a.title, children = _a.children, className = _a.className;
    var conetxt = useContext(MenuContext);
    var openSubMenus = conetxt.defaultOpenSubMenus;
    var isOpend = (index && conetxt.mode === 'vertical') ? openSubMenus.includes(index) : false;
    var _b = __read(useState(isOpend), 2), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames('yewei-menu-item yewei-submenu-item', className, {
        'is-active': conetxt.index === index,
        'is-opend': menuOpen,
        'is-vertical': conetxt.mode === 'vertical'
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        window.clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = conetxt.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = conetxt.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    var renderChildern = function () {
        var SubMenuClasses = classNames('yewei-submenu', {
            'yewei-menu-opened': menuOpen
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childernElement = child;
            if (childernElement.type.displayName === 'KMenuItem') {
                return React.cloneElement(childernElement, {
                    index: index + "-" + i
                });
            }
            else {
                throw Error('yewei-design-Waring: KSubMenu has a child witch is not a KMenuItem component');
            }
        });
        return (React.createElement(KTransition, { in: menuOpen, timeout: 300, animation: "zoom-in-top" },
            React.createElement("ul", { className: SubMenuClasses }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "yewei-submenu-title" }, clickEvents),
            title,
            React.createElement(KIcon, { icon: "angle-down", className: "yewei-arrow-icon" })),
        renderChildern()));
};
KSubMenu.displayName = 'KSubMenu';
export default KSubMenu;
