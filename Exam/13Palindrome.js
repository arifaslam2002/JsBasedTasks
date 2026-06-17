function Palindrome(str){
    let palindrome=""
    str = str.toLowerCase()
    for(i=str.length-1;i>=0;i--){
        palindrome += str[i];
    }
    return(palindrome == str)?console.log("yes it is a palindrome"):console.log("yes it is Not a palindrome")
}
Palindrome(("madam"))