const products = [
 { name: "Mouse", price: 500 },
 { name: "Keyboard", price: 1000 },
 { name: "Monitor", price: 8000 }
];

let totalPrice = products.reduce( {total,price } =>{
 return total + products.price
},0)
console.log(totalPrice)