const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi'
// split
const words = anthem.split(' ')
const withoutA = anthem.split('a')
// slice 
const smallSlice = anthem.slice(5, 13)
// console.log(smallSlice)

// substr
const anotherPart = anthem.substr(5, 7)
// console.log(anotherPart)

// substring
const anotherAnotherPart = anthem.substring(11, 15)
// console.log(anotherAnotherPart)

// concat 
const first = 'amader'
const second = 'city'
// const fullString = first + second;
const fullString = first.concat(second).concat('abc')
console.log(fullString)

const words2 = ['alid', 'badhon', 'cajid']
const allJoined = words2.join(' ')