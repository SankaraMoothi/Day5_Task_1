// anonymous function: Odd numbers;
var oddnum=function(numbers){
    var c=[];
    for(let num of numbers){
        if(num%2!==0){
            c.push(num);
        }
    }
    return (c);
}
console.log(oddnum([2,1,4,3,8]));

// IIFE function:Odd number;
(function bar(numbers)
{
    let c=[];
    for(let num of numbers){
        if(num%2!==0){
            c.push(num);
        }
    }
    console.log(c)
})
([2,1,4,3,8]);

//anonymous function string title caps
var titleize=function(str) {
    let upper = true
    let newStr = ""
    for (let i = 0, l = str.length; i < l; i++) {
        
        if (str[i] == " ") {
            upper = true
            newStr += str[i]
            continue
        }
        newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
        upper = false
    }
    return newStr
}
console.log(titleize("mass sankar"));

//IIFE function:convert string title caps 
(function titleize(str) {
    let upper = true
    let newStr = ""
    for (let i = 0, l = str.length; i < l; i++) {
        if (str[i] == " ") {
            upper = true
            newStr += str[i]
            continue
        }
        newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
        upper = false
    }
    console.log(newStr);
})
("mass sankar");



//anonymous function:sum of all numbers in arrays
var arr=function(marks){
    let sum=0;
     for(let mark of marks){
         sum=sum+mark;
     }
     return(sum);
 }
 console.log(arr([10,20,30,40]));

 //IIFE function :sum of all number in arrays
 (function bar(marks)
{
    let sum=0;
    for(let mark of marks){
        sum=sum+mark;
    }
    console.log(sum)
})
([10,20,30,40]);


// ANONYMOUS FUNCTION: Find dublicate in array


var removeDuplicates = function(arr)
{
   return arr.filter((item,
       index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(["apple", "mango", "apple","orange", "mango", "mango","pineapple"]));





      


// IIFE FUNCTION:Find the dublicate in array

(function removeDuplicates (arr)

{

arr=arr.filter((item,
       index) => arr.indexOf(item) === index);
      
console.log(arr);  
})

(["apple", "mango", "apple","orange", "mango", "mango","pineapple"]);

// IIFE methode: palindrome in array
(function bar(names)
{
    let result=[];
    for(let i=0;i<names.length;i++){
    var rev=names[i].split("").reverse().join("");
    if(rev===names[i]){
    result.push(rev);
    }
    }
    console.log(result);
    
})
(["amma","appa","malayalam","mama"]);

// anonymous function: palindrome in array
var arr=function(names){
    let result=[];
    for(let i=0;i<names.length;i++){
    var rev=names[i].split("").reverse().join("");
    if(rev===names[i]){
    result.push(rev);
    }
    }
    return (result);
    
 }
 console.log(arr(["appa","amma","malayalam","mama"]));

 

// anonymous function: rotate the array k times

 const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  console.log(rotateArray1([1,2,3,4,5],2));

//IIFE function :rotate the array k times
  (function bar(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums);
  })
  ([1,2,3,4,5],2);

 

//anonymous Function; find the prime numbers in array;
var prime=function(num){
    let result=[];
    for (let i = 0; i <num.length; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    console.log(result);
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));

//IIFE function:find the prime number in array;
(function prime(num){
    let result=[];
    for (let i = 0; i <num.length; i++) {
        let flag = 0;
    
        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            result.push(i);
        }
    }
    console.log(result);
})
([1,2,3,4,5,6,7,8,9,10]);

// //IIFE function:Return the Median of two arrays of the same size
(function GetMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
    var n1 = ar1.length;
    var n2 = ar2.length;
if(n1===n2){
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log("Median is "+(m1 + m2)/2);
}
else{
    console.log("THE Given Arrays are unequal")
}
    
})
 ([1, 12, 15, 26, 38],[2, 13, 17, 30, 45],5 ); //"Answer:16"
 

 
// Ananymous function: Return the Median of two arrays of the same size
const getMedians=function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

ar1=[1, 12, 15, 26, 38];
ar2=[2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedians(ar1, ar2, n1));  //Answer:16
else
    console.log("Doesn't work for arrays of unequal size");