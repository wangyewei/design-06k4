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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var Yewei = /** @class */ (function () {
    function Yewei() {
    }
    /** base */
    // get information
    Yewei.showAllInfo = function () {
        var info = require('../package.json');
        var name = info.name, version = info.version, description = info.description, author = info.author, repository = info.repository, license = info.license, motto = info.motto;
        return {
            name: name,
            version: version,
            description: description,
            author: author,
            repository: repository,
            license: license,
            motto: motto
        };
    };
    // get version 
    Yewei.showVersion = function () {
        var info = require('../package.json');
        var version = info.version;
        return version;
    };
    /** cookie */
    //  get browser cookie
    Yewei.getCookie = function (name) {
        var _a;
        return (_a = (";" + document.cookie).split(";" + name + "=").pop()) === null || _a === void 0 ? void 0 : _a.split(';').shift();
    };
    // clear cookies
    Yewei.clearCookies = function () {
        document.cookie.split(';').forEach(function (cookie) { return document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/"); });
    };
    /** color*/
    // rgba to hex
    Yewei.rgbaToHex = function (r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    // reandom hex
    Yewei.randomHex = function () {
        return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    };
    /** clipboard */
    //copyToClipboard
    Yewei.copyToClipboard = function (text) {
        navigator.clipboard.writeText(text);
    };
    // Get the text selected by the user
    Yewei.getSelectedText = function () {
        var _a;
        return (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString();
    };
    /** date */
    // date is valid
    Yewei.isDateValid = function (val) {
        return !Number.isNaN(new Date(val).valueOf());
    };
    // find it in which day in this year
    Yewei.dayOfYear = function (date) {
        return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    };
    // diffrent of 2 days
    Yewei.dayDif = function (date1, date2) {
        return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
    };
    // Record time in hour::minutes::seconds format
    Yewei.timeFromDate = function (date) {
        return date.toTimeString().slice(0, 8);
    };
    /**string */
    //capitalize
    Yewei.capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    // reverse string
    Yewei.reverse = function (str) {
        return str.split('').reverse().join('');
    };
    /**number */
    // Whether the check digit is odd or even
    Yewei.isEven = function (num) {
        return num % 2 === 0;
    };
    // Average of numbers
    Yewei.average = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.reduce(function (a, b) { return a + b; }) / args.length;
    };
    /**array */
    // remove duplicates of array
    Yewei.removeDuplicates = function (arr) {
        return __spread(new Set(arr));
    };
    // Check if the array is empty
    Yewei.isNotEmpty = function (arr) {
        return Array.isArray(arr) && arr.length > 0;
    };
    // Scramble the array
    Yewei.shuffleArray = function (arr) {
        return arr.sort(function () { return 0.5 - Math.random(); });
    };
    /**URL */
    // Get query parameters from URL
    Yewei.getParameters = function (url) {
        url = JSON.parse('{"' +
            decodeURI(url.split("?")[1])
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
            '"}');
        return JSON.parse(url);
    };
    /** document tools */
    //go to top
    Yewei.goToTop = function () {
        window.scrollTo(0, 0);
    };
    // Check if the user's device is in dark mode
    Yewei.isDarkMode = function () {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };
    return Yewei;
}());
export default Yewei;
