function megaFriends(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array '
    }
    let mega = friends[0]
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'sabbir']
const myBigBuddy = megaFriends(1344)
// console.log(myBigBuddy)
// array exist with indexof 
if (friends.indexOf('lion') != -1) {
    // console.log('lion exist ')
}
//  array check with includes
if (friends.includes('fox') == true) {
    console.log('lion exist using includes')
}
else {
    // console.log("fox dose'nt exist")
}

//concat 
const first = [1, 3, 2, 3];
const second = [5, 6, 7, 9]
const combined = first.concat(second)
console.log(combined)