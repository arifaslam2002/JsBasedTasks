let a =71;

if (a%3==0) {
    if(a%5==0){
        console.log("Number is divisible By Both 3 & 5")
    }else{
        console.log(("Number is divisible only By 3"))
    }
} else {
    if(a%5==0){
       console.log(("Number is divisible only By 5"))
    }
    else{
        console.log(("Number is Not divisible  By 3 and 5"))
    }
}