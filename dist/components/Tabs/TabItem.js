import React from "react";
import classNames from "classnames";
var TabItem = function (props) {
    var className = props.className, children = props.children;
    var classes = classNames('yewei-tabs-item', className);
    return (React.createElement("div", { className: classes }, children));
};
export default TabItem;
