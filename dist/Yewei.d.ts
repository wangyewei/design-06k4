export default class Yewei {
    /** base */
    static showAllInfo(): Object;
    static showVersion(): string;
    /** cookie */
    static getCookie(name: string): any;
    static clearCookies(): void;
    /** color*/
    static rgbaToHex(r: number, g: number, b: number): string;
    static randomHex(): string;
    /** clipboard */
    static copyToClipboard(text: string): void;
    static getSelectedText(): any;
    /** date */
    static isDateValid(val: string): boolean;
    static dayOfYear(date: any): number;
    static dayDif(date1: Date, date2: Date): number;
    static timeFromDate(date: Date): string;
    /**string */
    static capitalize(str: string): string;
    static reverse(str: string): string;
    /**number */
    static isEven(num: number): boolean;
    static average(...args: number[]): number;
    /**array */
    static removeDuplicates(arr: any[]): any[];
    static isNotEmpty(arr: any[]): boolean;
    static shuffleArray(arr: any[]): any[];
    /**URL */
    static getParameters(url: string): object;
    /** document tools */
    static goToTop(): void;
    static isDarkMode(): boolean;
}
