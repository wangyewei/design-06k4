declare class Yewei {
  showAllInfo(): object
  showVersion(): string
  getCookie(name: string): any
  clearCookies(): void
  rgbaToHex(r: number, g: number, a: number): string
  randomHex(): string
  copyToClipboard(text: string): void
  getSelectedText(): any
  isDateValid(val: string): boolean
  dayOfYear(date: any): number
  dayDif(date1: any, date2: any): number
  timeFromDate(date: Date): string
  capitalize(str: string): string
  reverse(str: string): string
  isEven(num: number): boolean
  average(...args: number[]): number
  removeDuplicates(arr: any[]): any[]
  isNotEmpty(arr: any[]): boolean
  shuffleArray(arr: any[]): any[]
  getParameters(url: string): string
  goToTop(): void
  isDarkMode(): boolean
}