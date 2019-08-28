// //5. URLify a string
// function URLify(arr){
//   let splitString=arr.split(' ');
//   let newString=splitString.join('%20');
//   return newString;
// }
// console.log(URLify('tauhida parveen'));
// console.log(URLify('www.thinkful.com /tauh ida parv een'));

// //6.Filtering an array
// function filter(arr){
//   let result=[];
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i]>=5){
//       result.push(arr[i]);
//     }
    
//   }
//   return result;
// }
// console.log(filter([6,7,2,4,8,5]));

// //7. Max sum in the array

// function maxSum(arr){
//   let max = 0;
//   for (let i = 0; i <arr.length; i++){
//     let testArr = arr.slice(i);
//     let cur = 0;
//     for (let j=0; j<testArr.length; j++){
//       cur += testArr[j];
//       if(cur >= max){
//         max = cur;
//       }
//     }
//   }
//   return max;
// }
// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// //8. Merge arrays
// function merge(arr1,arr2){
// //    let newArr1 = arr1.sort(function(a,b){return a-b});
// //    let newArr2 = arr2.sort(function(a,b){return a-b});
// //    return newArr = newArr1 + newArr2
//   let newArr = arr1.concat(arr2);
//   return  newArr.sort(function(a,b){return a-b;});
// }
// console.log(merge([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

// //9. Remove characters
// function remove(str,rm){
//   var regex = new RegExp(`[${rm}]`,'gi');
    
 
//   return str.replace(regex,'');

// }
// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


//10. Products

function product(arr){
  let result = [];
  let prod =1;
  
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      prod *= arr[j];
    }
    result.push(prod/arr[i]);
    prod = 1;

      
  }
  return result;
}
console.log(product([1, 3, 9, 4]));

//11. 2D array
function search0(arr){
  let zeros = [];
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[i].length; j++){
      if (arr[i][j]===0){
        zeros.push([i,j]);
      }
    }
  }
  for (let n=0; n<arr.length; n++){
    for (let m=0; m<arr.length; m++){  
  
      arr[zeros[m][0]][n] = 0;
      arr[n][zeros[m][1]] = 0; 
    }}
  return arr;            
}
console.log(search0([[1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));

//12. String rotation

function rotation(str1, str2){
    console.log(str2.indexOf(str1));
   return (str2 + str2).indexOf(str1) != -1;
   
}
console.log(rotation('amazon','azonma'));
console.log(rotation('amazon','azonam'));
