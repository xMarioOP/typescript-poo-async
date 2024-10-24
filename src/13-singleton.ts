export class MyService {

  static instance: MyService | null = null

  private constructor(private name: string) { }

  getName() {
    return this.name
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log("Created!");
      MyService.instance = new MyService(name)
    }
    return MyService.instance
  }
}

const myService1 = MyService.create("Service 1")
console.log(myService1.getName());

const myService2 = MyService.create("Service 2")        // ONLY ONE INSTANCE
console.log(myService2.getName());

const myService3 = MyService.create("Service 3")
console.log(myService3.getName());

console.log(myService1 === myService2);
