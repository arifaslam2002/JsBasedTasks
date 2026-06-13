let str = "Order123Amount456";

let digits = Number(
  str
    .split("")
    .filter(char => char >= "0" && char <= "9")
    .join("")
);

console.log(digits);