const numbers = [2, 4, 5, 6, 7, 12, 17, 66, 63,];
const numberSlice = numbers.slice(1, 5)
// console.log(numberSlice)
// console.log(numbers)

// splice to remove an element form an array . 
const numberSpliced = numbers.splice(1, 2)
// console.log(numberSpliced)
// console.log(numbers)

const numberSpliced2 = numbers.splice(1, 4, 99, 111, 818, 777)
console.log(numberSpliced2)
console.log(numbers)
