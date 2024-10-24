export class MyDate {


  constructor(
    public year: number = 1993,
    public month: number = 7,         // IT IS REQUIRED THE PUBLIC OR PRIVATE!
    private _day: number = 9
  ) { }

  printFormat(): string {
    const day = this.addPading(this._day)
    const month = this.addPading(this.month)
    return `${day}/${month}/${this.year}`
  }

  private addPading(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: "days" | "months" | "years") {
    if (type === "days") {
      this._day += amount
    }
    if (type === "months") {
      this.month += amount
    }
    if (type === "years") {
      this.year += amount
    }
  }
  get day() {
    return this._day
  }
                                                   //GET ALWAYS RETURN SOMETHING
  get isLeapYear(): boolean {
    if(this.year % 400 === 0 ) return true
    if(this.year % 100 === 0 ) return false

    return this.year % 4 === 0
  }
}

const myDate = new MyDate(2000, 1, 1)
console.log(myDate.printFormat());
console.log(myDate.day);
// myDate.day = 123 // NOT CAN MODIFY

console.log(myDate.isLeapYear);


