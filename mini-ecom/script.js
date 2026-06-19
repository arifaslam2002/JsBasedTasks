let userInput=Number(prompt("Enter the number of items you want to purchase:"))
let totalPrice=0;
for(let i=1;i<=userInput;i++)
    {
    let price= Number(prompt(`Enter The price of Item ${i}`))
    totalPrice += price
}
function Calcdiscount(total){
    if(total>=100){
        return total*0.1
    } return 0
}
 
function Calctax(amount){
      return amount* 0.05
 }
 let discount = Calcdiscount(totalPrice)
 let PriceAfterDiscount = totalPrice-discount
 let tax = Calctax(PriceAfterDiscount) 
 let  finalAmount = PriceAfterDiscount + tax 
console.log(`=====RECEIPT======
    Total Base Price:${totalPrice}
    Discount Applied:${discount}
    Price After Discount:${PriceAfterDiscount}
    Tax:${tax}
    final Payable Amount:${finalAmount}
    `)
alert(`Billing Complete! Final Payable Amount:${finalAmount}`)