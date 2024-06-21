console.log("Hello Underworld from TypeScript")
let v: boolean = true;
let z: number = 3;
const w: string = "YEET";
const q: number = 33;
let e = [false, "YOOT", 46];
let r = {"zahl": 7, "wahr": true, text: "Hallo"}
console.log(w)
console.log(v)
console.log(e = [5, 6])
console.log(r)

function isDivisible(dividend, divisor) {
    return (dividend % divisor == 0)
}

function isDivisibleee(_dividend: number, _divisor: number): boolean {
    let result: boolean = (_dividend % _divisor == 0);
    return result;
}