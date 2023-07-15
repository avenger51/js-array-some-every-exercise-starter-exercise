/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns 
false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/
//const oddNumArray = [2, 4, 6];
function hasOddNumber(arr) {
    //for(let i = 0; i <= arr.length; i++){
        return arr.some(function(val){
            return val % 2 !== 0;
});
}
console.log(hasOddNumber([ 4, 6]));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//!!!!!!!!!I honestly can't figure out how to do this with a single integer using some.....!!!!!!
Write a function called hasAZero which accepts a number and returns true if that number contains at least one 
zero. Otherwise, the function 
should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
    //num.split(", ");??
    const numStr = num.toString();

    return numStr.includes("0");
    //return num.some(function(val) {
       // return val == 0 ;
    //});
}
console.log(hasAZero([1980]));
/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the 
values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
        return val % 2 !== 0; 
    });
}
console.log(hasOnlyOddNumbers([9, 13, 10]));
//ugh..used the wrong function name here and spent 30 minutes wondering why it kept returning true...

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the 
    array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/
//would never in a million years figured out to use indexOf here...
function hasNoDuplicates(arr) {
    return arr.every(function(element, index) {
      return arr.indexOf(element) === index;
    });
  }
  console.log(hasNoDuplicates([23, 22, 1]));
  

/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in 
the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/
//I can't get this to work...
const arr = [
  {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
  {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
  {title: "Instructor", first: 'Matt', last:"Lane"}, 
  {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

function hasCertainKey(arr, key) {
    return arr.every(function(object) {
      return object[key] !== false;
    });
  }
console.log(hasCertainKey(arr, 'isCatOwner'));

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every 
single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
//no time left
function hasCertainValue(arr, key, value) {
    return arr.every(function(object) {
      return object[key] === value;
    });
  }
//console.log(hasCertainValue())




