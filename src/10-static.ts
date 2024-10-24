console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8));

class MyMath {
  static readonly PI = 3.14

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item? max : item, -Infinity)
  }
}
console.log("MyMath", MyMath.PI);
// MyMath.PI = 123 //NO CAN MODIFY

console.log("MyMath", MyMath.max(1,2,3));

const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log("MyMath", MyMath.max(...numbers));

console.log("MyMath", MyMath.max(-111, -9, -8 ));

console.log(MyMath.max(1, 2, 3));         // Output: 3
console.log(MyMath.max(-111, -9, -8));    // Output: -8
console.log(MyMath.max());                // Output: -Infinity
console.log(MyMath.max(0, -1, -10, 50));  // Output: 50
