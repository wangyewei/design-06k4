import React from 'react';
import KIcon from '../Icon/KIcon';
import Progress from '../Progress/KPogress';
export var UploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (React.createElement("ul", { className: "yewei-upload-list" }, fileList.map(function (item) {
        return (React.createElement("li", { className: "yewei-upload-list-item", key: item.uid },
            React.createElement("span", { className: "file-name file-name-" + item.status },
                React.createElement(KIcon, { icon: "file-alt", theme: "secondary" }),
                item.name),
            React.createElement("span", { className: "file-status" },
                (item.status === 'uploading' || item.status === 'ready') && React.createElement(KIcon, { icon: "spinner", spin: true, theme: "primary" }),
                item.status === 'success' && React.createElement(KIcon, { icon: "check-circle", theme: "success" }),
                item.status === 'error' && React.createElement(KIcon, { icon: "times-circle", theme: "danger" })),
            React.createElement("span", { className: "file-actions" },
                React.createElement(KIcon, { icon: "times", onClick: function () { onRemove(item); } })),
            item.status === 'uploading' &&
                React.createElement(Progress, { percent: item.percent || 0 })));
    })));
};
export default UploadList;
