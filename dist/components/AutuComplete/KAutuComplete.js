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
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import KInput from '../Input/KInput';
import KIcon from '../Icon/KIcon';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';
import KTransition from '../Transition/KTransition';
/**
 * 自动填充的输入框
 * ### 引用方法
 *
 * ~~~js
 * import { KAutuComplete } from '06k4-design'
 * ~~~
 */
export var KAutuComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restProps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    var _a = __read(useState(value), 2), inputValue = _a[0], setInputValue = _a[1];
    var _b = __read(useState([]), 2), suggestions = _b[0], setSuggestions = _b[1];
    var _c = __read(useState(false), 2), loading = _c[0], setLoading = _c[1];
    var _d = __read(useState(-1), 2), highlightIndex = _d[0], setHighlightIndex = _d[1];
    var _e = __read(useState(false), 2), showDropdown = _e[0], setShowDropdown = _e[1];
    var triggerSeaech = useRef(false);
    var componentRef = useRef(null);
    var debouncedValue = useDebounce(inputValue, 500);
    useClickOutside(componentRef, function () {
        setSuggestions([]);
    });
    useEffect(function () {
        if (debouncedValue && triggerSeaech.current) {
            var results = fetchSuggestions(debouncedValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(function (data) {
                    setLoading(false);
                    setSuggestions(data);
                    if (data.length)
                        setShowDropdown(true);
                });
            }
            else {
                setSuggestions(results);
                setShowDropdown(true);
                if (results.length)
                    setShowDropdown(true);
            }
        }
        else {
            setShowDropdown(false);
            // setSuggestions([])
        }
        setHighlightIndex(-1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    };
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        triggerSeaech.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        // setSuggestions([])
        setShowDropdown(false);
        if (onSelect)
            onSelect(item);
        triggerSeaech.current = false;
    };
    var handleKeyDown = function (e) {
        switch (e.key) {
            case 'Enter':
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 'ArrowUp':
                highlight(highlightIndex - 1);
                break;
            case 'ArrowDown':
                highlight(highlightIndex + 1);
                break;
            case 'Escape':
                setShowDropdown(false);
                // setSuggestions([])
                break;
            default:
                break;
        }
    };
    var renderTempalete = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    var generateDropdown = function () {
        return (React.createElement(KTransition, { in: showDropdown || loading, animation: "zoom-in-top", timeout: 300, onExited: function () { setSuggestions([]); } },
            React.createElement("ul", { className: "yewei-suggestion-list" },
                loading && React.createElement("div", { className: "suggestions-loading-icon" },
                    React.createElement(KIcon, { icon: "spinner", spin: true })),
                suggestions.map(function (item, index) {
                    var cnames = classNames('yewei-suggestion-item', {
                        'yewei-item-highlighted': index === highlightIndex
                    });
                    return (React.createElement("li", { key: JSON.stringify(item), className: cnames, onClick: function () { return handleSelect(item); } }, renderTempalete(item)));
                }))));
    };
    return (React.createElement("div", { className: "yewei-auto-complete", ref: componentRef },
        React.createElement(KInput, __assign({ value: inputValue || '', onChange: handleChange, onKeyDown: handleKeyDown }, restProps)),
        generateDropdown()));
};
export default KAutuComplete;
