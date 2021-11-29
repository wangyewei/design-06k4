import React from "react";
import classNames from "classnames";
var Tabs = function (props) {
    var className = props.className, children = props.children;
    var classes = classNames('yewei-tabs', className);
    return (React.createElement("div", { className: classes }, children));
};
Tabs.defaultProps = {
    defaultIndex: 0
};
export default Tabs;
