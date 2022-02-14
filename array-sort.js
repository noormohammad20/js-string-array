const numbers = [2, 4, 3, 0, 9, 8, 5, 7, 4, 2]
const sortedNumbers = numbers.sort()
// console.log(sortedNumbers)
const friends = ['kabli', 'josim', 'rajjak', 'anwar', 'deepjol', 'badsha']
// const sortedFriends = friends.sort()
// console.log(sortedFriends)
// const reverseFriends = friends.reverse()
// console.log(reverseFriends)
// const sortedReverseFriend = friends.sort().reverse()
// console.log(sortedReverseFriend)

// number sorting fun

const bigNumbers = [22, 66, 36, 74, 54, 7, 84, 34, 4, 67, 4, 6, 44, 4,]
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b
})
console.log(sortedBigNumbers)
