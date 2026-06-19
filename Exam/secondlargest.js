function SecondLarge(array){
          let largest = -Infinity;
      let SecondLargest=-Infinity;
    for(i=0;i<array.length;i++){
      if(array[i]>largest){
        SecondLargest = largest
        largest = array[i]
      }else if(array[i]>SecondLargest){
        SecondLargest = array[i]
      }
    }return console.log(SecondLargest)
}
SecondLarge([10, 45, 78, 67])