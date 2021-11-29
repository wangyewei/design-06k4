import React from "react";
import classNames from "classnames";
var Alert = function (props) {
    var _a;
    var className = props.className, success = props.success, danger = props.danger, warning = props.warning, AlertText = props.AlertText;
    var classes = classNames('alert', className, (_a = {},
        _a["alert-" + success] = success,
        _a["alert-" + danger] = danger,
        _a["alert-" + warning] = warning,
        _a));
    return (React.createElement("div", { className: classes }, AlertText));
};
export default Alert;
