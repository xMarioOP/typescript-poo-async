export class Animal {
  constructor(protected name: string) { }

  move() {
    console.log("moving");
  }

  greeting() {
    return `Hello I'm ${this.name}`
  }
}

const animal1 = new Animal("An animal")
animal1.move()
console.log(animal1.greeting());



export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log("Woof!", this.name);  //PROTECTED. this.name can be used
    }
  }
}

const lucas = new Dog("Lucas", "Juan")
lucas.woof(5)

lucas.name //PROTECTED
