export interface Driver {
  database: string
  password: string
  port: number

  connect(): void
  disconnect(): void
  Isconnected(name: string): boolean
}


// const driver: Driver = {
//   database: "",
//   password: "",
//   port: 23,
//   connect() {
//     //codew
//   },
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) { }
  disconnect(): void {
    throw new Error("Method not implemented.")
  }
  Isconnected(name: string): boolean {
    return true
  }
  connect(): void {
    // code
  }
}



class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) { }
  disconnect(): void {
    throw new Error("Method not implemented.")
  }
  Isconnected(name: string): boolean {
    throw new Error("Method not implemented.")
  }
  connect(): void {
    // code
  }
}
