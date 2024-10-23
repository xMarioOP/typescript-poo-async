export class MyDate {
  year: number
  month: number                     // ITS PUBLIC BY DEFAULT
  private day: number                      // IF ITS PRIVATE

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    const day = this.addPading(this.day)
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
      this.day += amount
    }
    if (type === "months") {
      this.month += amount
    }
    if (type === "years") {
      this.year += amount
    }
  }
  getDay() {
    return this.day
  }
}

const myDate = new MyDate(1998, 7, 9)
// myDate.day = 12                               //ANYONE CAN MODIFY
console.log(myDate.printFormat());
// myDate.addPading(12)                          //ANYONE CAN MODIFY
console.log(myDate.getDay);
