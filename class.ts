class Animal {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is run`
  }
}

const snake = new Animal('lily')

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  run() {
    return super.run() + ' Meow'
  }
}

const maomao = new Cat('maomao')
console.log(maomao.run())