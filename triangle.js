let length1=14;
let length2=14;
let length3=14;
if(length1 == length2 && length2 == length3){
    console.log("Triangle is Equilateral")
}
else if(length1 == length2 && length2 != length3)
{console.log("Triangle is Isosceles")}
else if(length1 != length2 && length1 == length3)
{console.log("Triangle is Isosceles")}
else if(length1 != length2 && length2 == length3)
{console.log("Triangle is Isosceles")}
else{
    console.log("Triangle is Scalene")
}
