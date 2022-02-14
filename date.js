const myFevDate = new Date('1971-12-16')
// console.log(myFevDate)
const anotherDate = new Date(1971, 3, 26, 11, 40, 50, 30)
// console.log(anotherDate)

if (myFevDate.getTime() < anotherDate.getTime()) {
    console.log('favorite is earlier')
}