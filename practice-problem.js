// ১) একটা অ্যারেতে তোমার পছন্দের খাবার গুলো রাখো এবং যে সব খাবারের নামের মধ্যে m আছে সেসব খাবারের নামগুলো console log করো। 

function mWords() {
    let m = []
    for (const food of foods) {
        if (food.includes('m')) {
            m.push(food)
        }
    }
    return m;
}
const foods = ['vat', 'mosur dal', 'murgi', 'polao', 'mutton']

const myFood = mWords(foods)
// console.log(myFood)
/* ২) একটা অ্যারেতে তোমার বন্ধু বা বান্ধুবির পুরা নাম রাখো এবং যাদের নাম md দিয়ে শুরু হয় সেই নামগুলো প্রথমে console log করবে। তারপর পুরা জিনিসটা একটা ফাংশনে রাখো। এবং তোমার কাজ হবে। যার যার নাম md দিয়ে শুরু হয়। সেই নামগুলো রিটার্ন করবে। 

এক্সট্রা: চেষ্টা করবে কারো নাম যদি MD বা Md বা md হয়। তাদের নাম যেন তোমার রিটার্ন রেজাল্টে যোগ হয়।  */

function findWords() {
    let name = []
    for (const friend of friends) {
        if (friend.toLowerCase().includes('md')) {
            name.push(friend)
        }
    }
    return name;
}
const friends = ['md abu bakar', 'md jakir', 'hasan', 'Md monir', 'eakub', 'Md sibli']

const myFriends = findWords(friends)
console.log(myFriends)

/* ৩) fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

এই উপরের অ্যারে থেকে Orange এবং Lemon প্রিন্ট করো slice() ব্যাবহার করে। */
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slice = fruits.slice(1, 3)
console.log(slice)
