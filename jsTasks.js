/*   JS EXERCISES
21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
22) Create an object with properties such name, surname, email
23) Delete Email from the previously created object
24) Create an array with 10 strings in it
25) Print in the console every string in the previous array
26) Create an array with 100 random numbers in it
27) Wrote a function to get the MAX and the MIN from the previously created array
28) Create an array of arrays, in which every array has 10 random numbers
29) Create a function that gets 2 arrays and returns the longest one
30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values 
*/

// EX 21:
let x = "John";
let y = "Doe";
//console.log(`${x} <> ${y}`);



// EX 22:
let obj = {
  name: "John",
  surname: "Doe",
  email: "johndoe@valve.com"
}



// EX 23:
delete obj.email;



// EX 24:
let strArr = ["a","b","c","d","e","f","g","h","i","j"];



// EX 25:
for(let character of strArr) {
  console.log(character);
}



// EX 26:
let randomNumArr = [];
for(let i=0; i<= 100; i++) {
  randomNumArr.push(Math.ceil(Math.random()*1000));
}
//console.log(randomNumArr);



// EX 27:
function minMaxValue(minOrMax,arr) {
  let arrValue;

  if(minOrMax.toLowerCase() === "min") {
    arrValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arrValue > arr[i]) {
        arrValue = arr[i];
      }
    }
  } else if(minOrMax.toLowerCase() === "max") {
    arrValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arrValue < arr[i]) {
        arrValue = arr[i];
      }
    }
  }
  return arrValue;
}

let minValueOfArr = minMaxValue("min",randomNumArr);
let maxValueofArr = minMaxValue("mAx", randomNumArr);
// console.log(minValueOfArr);
// console.log(maxValueofArr);



// EX 28:
let arrOfArrays = function(numOfArrays) {
  let result = [];

  for(let i=0; i < numOfArrays; i++) {
    let innerArray = [];

    for(let j=0; j <= 10; j++) {
      innerArray.push(Math.floor(Math.random() * 100));
    }

    result.push(innerArray);
  }

  return result;
}
let arrayOfArrays = arrOfArrays(5);
//console.log(arrayOfArrays);



// EX 29:
let retLongestArr = function(arr1, arr2) {
  let result = arr1.length > arr2.length ? arr1 : arr2;
  return result;
}
//console.log(retLongestArr([1,2,4], [2,3,4,5,6]))



// EX 30:
let retArrWLargestSum = function(arr1, arr2) {
  arr1Sum = 0;
  for(let i=0; i < arr1.length; i++) {
    arr1Sum += arr1[i];
  }
  arr2Sum = 0;
  for(let j=0; j < arr2.length; j++) {
    arr2Sum += arr2[j];
  }

  let result = arr1Sum > arr2Sum ? arr1 : arr2;
  return result;
}

let arrWLargestSum = retArrWLargestSum([1,2,3,4,5], [0,1,2,3,4]);
//console.log(arrWLargestSum);




