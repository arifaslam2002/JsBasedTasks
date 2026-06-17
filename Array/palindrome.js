function Palindrome(str){
    let palindrome ="";
    str=str.toLowerCase();
    for(i=str.length-1;i>=0;i--){
       palindrome += str[i];
    }
    return(palindrome == str)?console.log("Yes it's a palindrome"):console.log("Yes it's Not a palindrome")
}

Palindrome("Malayalam")