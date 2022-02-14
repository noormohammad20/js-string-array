function addNumbers(num1, num2,) {
    // console.log(arguments[2])
    let result = 0;
    for (const num of arguments) {
        result = result + num
    }
    // const result = num1 + num2
    return result;
}
const sum = addNumbers(23, 27, 37, 100, 430)
// console.log(sum)

function getFullName(first, last) {
    let fullName = '';
    for (part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName
}
const name = getFullName('omuk', 'songket', 'bin', 'hanif', 'songket', 'bin', 'tomuk', 'songket', 'bin', 'komuk', 'songket')
console.log(name)
