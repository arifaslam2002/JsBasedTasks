let input = "  apple-45.678  ";

input = input.trim();
let parts = input.split("-");
let name = parts[0].toUpperCase();
let price = Number(parts[1]).toFixed(2);

console.log(`${name} costs ${price}`);