// function echo<T>(arg: T): T {
//   return arg
// }
// //const str: string = 'str'
// // const result: String = echo(str)

// function swap<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }

// function echoWithAtt<T>(arg: T[]): T[] {
//   console.log(arg.length)
//   return arg
// }

// // const arrs = echoWithAtt([1, 2, 3])

// interface IWithLength {
//   length: number
// }

// function echowithLength<T extends IWithLength>(arg: T): T {
//   return arg
// }

// const str = echowithLength('str4')

class Queue<T> {
  private data: any[] = []

  push(item: T) {
    return this.data.push(item)
  }

  pop(): T {
    return this.data.shift()
  }
}

const queue = new Queue<Number>()

queue.push(1)
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface keyPair<T, U> {
  key: T;
  value: U;
}

let kp1: keyPair<number, string> = { key: 1, value: 'str' }
let kp2: keyPair<string, number> = { key: 'str', value: 2 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

// 描述函数

interface IPlus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string) {
  return a + b
}
const a: IPlus<number> = plus

const b: IPlus<string> = connect
