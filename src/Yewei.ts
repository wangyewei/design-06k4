export default class Yewei {
  /** base */
  // get information
  static showAllInfo(): Object {
    const info = require('../package.json')
    const { name, version, description, author, repository, license, motto } = info
    return {
      name,
      version,
      description,
      author,
      repository,
      license,
      motto
    }
  }
  // get version 

  static showVersion(): string {
    const info = require('../package.json')
    const { version } = info
    return version
  }

  /** cookie */
  //  get browser cookie

  static getCookie(name: string): any {
    return `;${document.cookie}`.split(`;${name}=`).pop()?.split(';').shift()
  }

  // clear cookies

  static clearCookies(): void {
    document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
  }

  /** color*/

  // rgba to hex

  static rgbaToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  // reandom hex

  static randomHex(): string {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
  }

  /** clipboard */

  //copyToClipboard
  static copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text)
  }


  // Get the text selected by the user

  static getSelectedText(): any {
    return window.getSelection()?.toString()
  }

  /** date */

  // date is valid
  static isDateValid(val: string): boolean {
    return !Number.isNaN(new Date(val).valueOf())
  }

  // find it in which day in this year
  static dayOfYear(date: any): number {
    return Math.floor((date - (new Date(date.getFullYear(), 0, 0) as any)) / 1000 / 60 / 60 / 24)
  }

  // diffrent of 2 days

  static dayDif(date1: Date, date2: Date): number {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
  }

  // Record time in hour::minutes::seconds format

  static timeFromDate(date: Date): string {
    return date.toTimeString().slice(0, 8)
  }
  /**string */

  //capitalize
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // reverse string
  static reverse(str: string): string {
    return str.split('').reverse().join('')
  }

  /**number */
  // Whether the check digit is odd or even

  static isEven(num: number): boolean {
    return num % 2 === 0
  }

  // Average of numbers

  static average(...args: number[]) {
    return args.reduce((a, b) => a + b) / args.length
  }

  /**array */

  // remove duplicates of array
  static removeDuplicates(arr: any[]): any[] {
    return [...new Set<any[]>(arr)]
  }


  // Check if the array is empty

  static isNotEmpty(arr: any[]): boolean {
    return Array.isArray(arr) && arr.length > 0
  }

  // Scramble the array
  static shuffleArray(arr: any[]): any[] {
    return arr.sort(() => 0.5 - Math.random())
  }

  /**URL */
  // Get query parameters from URL
  static getParameters(url: string): object {
    url = JSON.parse(
      '{"' +
      decodeURI(url.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
    )
    return JSON.parse(url)
  }


  /** document tools */
  //go to top

  static goToTop(): void {
    window.scrollTo(0, 0)
  }

  // Check if the user's device is in dark mode

  static isDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}