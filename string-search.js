const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera',
    'dell 1X59 lanovo commercial yoga Laptop',
    'LG supernova laptop',
    'HTC komdami laptop',
    'dell purple color Phone with laptop'
];
const searching = 'dell'
// indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        // output.push(product)
    }
}
// console.log(output)

// includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase()) != -1) {
        // output.push(product)
    }
}
// console.log(output)

// starts with 

for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        output.push(product)
    }
}
console.log(output)