function numbersOnly(arr){
  var newArr=[];
  for(var i=0;i<arr.length;i++){
    if (typeof(arr[i])==='number'){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

arr=[3,4,5,'P','orange'];
numbersOnly(arr);
