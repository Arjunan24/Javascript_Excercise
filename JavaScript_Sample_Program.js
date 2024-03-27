Scnerio :01
var value = 1234,
    sum = 0; 
    
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);


expected:
1+2+3+4 =10

output:
10

----------------------------------------
scenerio:02:
let arr = ['a','b',2,1,'c',10,2]
expected output
a
after b thery have 2*1 =2
bb
after c they have 10*2 =20
20times C will print 

output like this
abbcccccccccccccccccccc
hint:
regex we can able to achieve.
// ----------------------------------------------------------------------------
scnerio :03
let arr =[{a:1},{b:2}]
output:
[{a:1,b:2}]

solution:
let res = Object.assign({},...arr)
 output:
[{a:1,b:2}]
// -------------------------------------------------------------------

scenerio:04
const str = "Hello World"
str.split('').reverse().join("")
output:
'dlroWolleH'
// -------------------------------------------------------------------
scernerio :05
const originalObject = { a: 1, b: { c: 2 } };
let shallowCopy ={...originalObject}
shallowCopy.b.c =22

console.log(shallowCopy)
output:
{
    "a": 1,
    "b": {
        "c": 22
    }
}

console.log(originalObject)
output:
{
    "a": 1,
    "b": {
        "c": 22
    }
}

//when you update the shallowobject it will automatically update the  originalObject

--------------------------------------------------------------------------------------------------------------

scenerio 06:
 
let deepCopy =JSON.parse(JSON.Stringify(originalObject))
deepCopy.b.c =50

console.log(deepCopy)

{
    "a": 1,
    "b": {
        "c": 50
    }
}

//it will affect only deepObject not original object
---------------------------------------------------------------------------------------------------

//Replace all the name as replace in js
//scnerio 07:
let text = "Mr Blue has a blue house and a blue car";
let result = text.replace(/blue/g, "red");
console.log(result);

Output:
Mr Blue has a red house and a red car
-----------------------------------------------------------------
scnerio 08:
let text1 = "sea";
let text2 = "food";
let result = text1.concat(" ",text2," ", "dfsf");
console.log(result)

output:
sea food dfsf
--------------------------------------------------
scnerio:09
let text = "Hello world";
let result = text.endsWith("world2");

it will  return true or false
output:
false
-------------------------------------------------
Scnerio 10:
let text = "Hello world, welcome to the universe.";
let result = text.includes("welcome");

output:
true
------------------------------------
scenerio: 13
let text1 = "ab";
let text2 = "ab";
let result = text1.localeCompare(text2);

// it will check the two string and return the 0 or 1

Output:
0
-------------------------------------
Scenerio :12
let text = "The rain in SPAIN stays mainly in rain  the rain";
let result = text.match(/rain/gi);

Output:
[ 'rain', 'rain', 'rain' ]
-----------------------------------
scnerio:13
let text = "5";
let result = text = text.padStart(6,"0");

output:
000005
-----------------------------------------------------------------
scnerio :14
let text = "5";
let result = text = text.padEnd(6,"0");

output:
5000000
---------------------------
scnerio:15
let text = "Hello world! ";
let result = text.repeat(6);
console.log(result)

output:
Hello world!Hello world!Hello world!Hello world!Hello world!Hello world!
-------------------------------------------------------
scnerio :16 : Finidng the ODD Number
const odd = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.map(itm=>{
    if(itm % 2 !==0){
         odd.push(itm);
    }
})
// for (const num of arr) {
//     if (num % 2 !== 0) {
//         odd.push(num);
//     }
// }
console.log(odd);

output:
[ 1, 3, 5, 7, 9 ]

-------------------------------------------------------------------
scnerio:17
finidng the Even Numbers
const even = [];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.map(itm=>{
    if(itm % 2 ==0){
         even.push(itm);
    }
})
// for (const num of arr) {
//     if (num % 2 == 0) {
//         even.push(num);
//     }
// }
console.log(even);

output:
[ 2, 4, 6, 8 ]
-------------------------------------------------------
scnerio:18 check the value is prime number or not
function isPrime(n) { 
        // Corner case 
        if (n <= 1) 
            return false; 
  
        // Check from 2 to n-1 
        for (let i = 2; i < n; i++) 
            if (n % i == 0) 
                return false; 
  
        return true; 
    } 
  
    // Driver Code 
  
    isPrime(13)  
        ? console.log("true")  
        : console.log("false");

output:
true
---------------------------------------------------
scnerio:19  add the  toatal values in each elemnt
 let array =  [1,2,3,4]
let sum = 0; 

/*Go through each item in the array and execute this function which adds
each item to sum 
*/
  array.forEach(item => {
    sum += item;
  });

  console.log(sum); 

or 
var arr= [1,2,3,4] 

let updateArr = arr.reduce((prev,curr)=>prev + curr)
console.log(updateArr)


output:
10
------------------------------------------------
scnerio:20 :remove the last value in the array
const arrayOfNumbers = [1, 2, 3, 4];

const previousSecondElementOfTheArray = arrayOfNumbers.pop()
console.log(arrayOfNumbers); 

outpit:
[ 1, 2, 3 ]
---------------------------------------------------------
scnerio:21 remove the first elemnent in the array

const arrayOfNumbers = [1, 2, 3, 4];

const previousSecondElementOfTheArray = arrayOfNumbers.shift()
console.log(arrayOfNumbers); 

outpit:
[ 2,3,4 ]
---------------------------------------------------------
scnerio:22: in array between remove the value


const arrayOfNumbers = [1, 2, 3, 4];

const previousSecondElementOfTheArray = arrayOfNumbers.splice(1, 1);
console.log(arrayOfNumbers); 

output:
[1, 3, 4]
---------------------------
scnerio 23
const books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

let uniqueArr = books.filter((obj,index)=>{
    return index === books.findIndex(item=> obj.title == item.title)
})
console.log(uniqueArr)

output:
[
  { title: 'C++', author: 'Bjarne' },
  { title: 'Java', author: 'James' },
  { title: 'Python', author: 'Guido' }
]
---------------------------------------------------------------------
scnerio:24
var array = [1,3,2,1,3,4,5,6,7,3,5,6,4,3]
let output =[]
for(let item of array){
    if(!output.includes(item)){
        output.push(item)
    }
}
console.log(output)

output:
 [
  1, 3, 2, 4,
  5, 6, 7
]		
------------------------------------------------------------------------
Scnerio :25 checking the two array with same index 

let a =[5,17,9,7],b=[3,8,11,2]
let aliceInit = 0 , bobInit =0
a.map((item,index)=>{
    if(a[index] > b[index]){
      aliceInit++
    }else if(a[index] < b[index]){
       bobInit++
    }
   
})
 //.log(aArr,bArr)
let concatArr = [aliceInit].concat([bobInit])
    console.log(aliceInit,bobInit,concatArr)

output:
 	[ 3, 1 ]

----------------------------------------------------
scnerio :26 large int added
let arr =[1000000001,1000000002,1000000003,1000000004,1000000005]
let combinedArr = arr.reduce((prev,curr)=> prev+curr)
console.log(combinedArr)

output:
5000000015
-------------------------------------------------
scnerio :27 : diagnoal value added

function sumOfDiagonals(matrix) {
//  console.log(matrix.length)
 let totalCount = matrix.length
 let diagonalSum =0 , counterDiagonalSum =0
 matrix.map((item,index)=>{
     item.map((obj,inx)=>{
         console.log(inx +index ,totalCount-1)
         if (inx == index){
             diagonalSum += obj
         }
          if(inx + index == totalCount - 1){
              counterDiagonalSum += obj
          }
     })
 })
 
  console.log("sum of diagonal elements --- ", diagonalSum)
  console.log("sum of counter diagonal elements ---", counterDiagonalSum)
}
sumOfDiagonals([
  [1, 8, 7],
  [2, 10, 6],
  [3, 4, 5]
]);

output:
sum of diagonal elements ---  16
sum of counter diagonal elements --- 20
---------------------------------------------------------------
Scnerio: 28  getting the how many postive value and negative value and zero value and then divide by number,which is given by 
team.
arr = [-4, 3, -9, 0, 4, 1] ,onlyPostiveValue =0, n=6,onlyNegativeValue =0,onlyZero = 0,final = []
arr.map((item,index)=>{
    if(item>0){
        onlyPostiveValue++ 
    }
      if(item<0){
        onlyNegativeValue++
    }
    
     if(item == 0){
        onlyZero++
    }
    // if(arr.length == index +1){
    // let pos = onlyPostiveValue/n,neg = onlyNegativeValue / n,zero =onlyZero /n
    // final.push(...[pos],...[neg],...[zero])
    // }
})
// console.log(final)
let pos = onlyPostiveValue/n,neg = onlyNegativeValue / n,zero =onlyZero /n
console.log(pos.toFixed(n),neg.toFixed(n),zero.toFixed(n))

output:
0.500000 0.333333 0.166667

-----------------------------------------------------------
scnerio: 29 first letter of the array should be a caps

const names = ["alice", "bob", "charlie", "danielle"]
    
    
    const capitalized = names.map((name) => {
        return name[0].toUpperCase() + name.slice(1)
    })
    
    console.log(capitalized)

output:
[ 'Alice', 'Bob', 'Charlie', 'Danielle' ]
-----------------------------------------------------------
scenrio : 30 let arr =[] , n=6

for(i=0;i<n;i++){
    let initHash = "#".repeat(n)
    // console.log(initHash)
    let slicedInit = initHash.slice(0,i+1)
    // console.log(slicedInit)
    let padStartInit = slicedInit.padStart(n)
    console.log(padStartInit)
    arr.push(padStartInit)
}
console.log(arr)

output:
     #
    ##
   ###
  ####
 #####
######
[ '     #', '    ##', '   ###', '  ####', ' #####', '######' ]

or

let arr =[] , n=6

for(i=0;i<n;i++){
    let initHash = "#".repeat(n).slice(0,i+1).padStart(n)
    console.log(initHash)
    arr.push(initHash)
}
console.log(arr)

output:
     #
    ##
   ###
  ####
 #####
######
[ '     #', '    ##', '   ###', '  ####', ' #####', '######' ]
------------------------------------------------------------------------

scnerio :31  remove each index value and add entire array
let arr =[1,2,3,4,5],final=[]

arr.map((item,index)=>{ 
    let deepCopy =JSON.parse(JSON.stringify(arr))
        deepCopy.splice(index,1)
      let updateArr = deepCopy.reduce((prev , curr)=> prev +curr)
      console.log(updateArr)
     final.push(...[updateArr])
})
 final.sort();
//final.reverse();
let lastElement = final.splice(-1)
 let firstElement = final[0]
console.log(final)

output:
14
13
12
11
10
[ 14, 13, 12, 11, 10 ]
------------------------------------------------------------------------
scnerio :32
let arr =[3,2,1,3,44,5,5,3,44,5,44,1],count =0,minCounter=0
let max = Math.max(...arr)
let min=Math.min(...arr)

console.log(max,min)

//Maximum value and minimum count
arr.map(item=>{
    if(item == max){
      count++
    }
    if(item ==  min){
        minCounter++
    }
    
})
console.log(count,minCounter)

output:
44 1
3 2
----------------------------------------------
scnerio:33
let timeString ='07:05:45PM'
let checkString = timeString.endsWith("PM")
const [hour, minute,seconds] = timeString.split(':'); 
let formattedHour = parseInt(hour); 
 let sec = seconds.replace("PM"," ")
if(checkString){
   formattedHour += 12;
}
 console.log( `${formattedHour}:${minute}:${sec}`) 

 output:
 19:05:45 

 or 

 let timeString ='07:05:45 PM'
let [time,period] = timeString.split(" ")
const [hour, minute,seconds] = time.split(':'); 
let formattedHour = parseInt(hour); 

 console.log(time,period)
 
if(period =="PM"){
   formattedHour += 12;
}
 console.log( `${formattedHour}:${minute}:${seconds}`) 

 output:
07:05:45 PM
19:05:45

or

let timeString ='12:45:54PM'

// let timeString = s
let checkString = timeString.endsWith("PM")
const [hour, minute,seconds] = timeString.split(':'); 
let formattedHour = parseInt(hour); 
let sec 
if(checkString){
     if( formattedHour == 12){
         formattedHour = "12"
     }else{
         formattedHour += 12;
     }
   sec = seconds.replace("PM"," ")
}else{
    if( formattedHour == 12){
      formattedHour = "00"
    }else{
         formattedHour = hour
    }
     sec = seconds.replace("AM"," ")
}
let timeChanged = `${formattedHour}:${minute}:${sec}`
 console.log(timeChanged)
 return timeChanged 

output:

12:45:54
  

---------------------------------------------------------
scnerio:34 get only duplicates in one array

let ar = [10, 20, 20, 10, 10, 30, 50, 10,20],count =0,range=[]

ar.map(item=>{
     let matchArr = ar.filter(it=>it == item)
    if(range.length == 0){
        range.push(matchArr)
    }else{
        let checkingArr = range.some(obj=>obj.includes(item))
        if(!checkingArr){
             range.push(matchArr)
        }
    }
})
let n=0
range.map((item,index)=>{
    console.log(item)

let cc = item.length /2
console.log(cc)
if(cc >= 1){
     count += cc
    
}



    // let splcieArr = item.slice(n,index+2)
    // console.log(splcieArr)
    // if(splcieArr.length ==2){
    // // n=index+2
    // count++
    // n=index +1
    // }
    // item.map(obj=>{
    //     if(obj<2){
    //         count++
    //     }
    // })
})


console.log(Math.floor(count))
----------------------------------------------
scnerio:35 swapping between two valueslet a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

output:
Enter the first variable: 4
Enter the second variable: 2
The value of a after swapping: 2
The value of b after swapping: 4

or
let a=10, b=20;

[a, b] = [b, a];
console.log(a,b)

output:
20 10
---------------------------------------------------

Scnerio:36 palindrome

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
  
    if (rev == str) {
        return true
    }
    return false
 
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

----------------------------------------------------
scnerio 37
var peaks = [
    {intervalId: 7, time: 1520290800000, value: 54.95125000000001},
    {intervalId: 7, time: 1520377200000, value: 49.01083333333333}
  ];
  
  const maxPeak = peaks.reduce((p, c) => p.value > c.value ? p : c);
  
  console.log(maxPeak);
  output:
  {
    "intervalId": 7,
    "time": 1520290800000,
    "value": 54.95125000000001
  }

  or 
  var peaks = [{ intervalId: 7, time: 1520290800000, value: 54.95125000000001 }, { intervalId: 7, time: 1520377200000, value: 49.01083333333333 }]
    max = Math.max(...peaks.map(({ value }) => value)),
    object = peaks.find(({ value }) => value === max);

console.log(max);
console.log(object);
54.95125000000001
{
  "intervalId": 7,
  "time": 1520290800000,
  "value": 54.95125000000001
}
-------------------------------------------------------
scnerio 38
console.log(sum(2,3))
console.log(sum(2)(3,8))
function sum(x,y,z){
   if(y == undefined){
       return (a,b) =>{
           console.log(a,b)
          return a+x
       }
   }
   return x+y
}

output
3 8
5
------------------------------------------------
scnerio 39
let arr =[7,3,5,6,3,5,9]

let final=[]
arr.map(item=>{
    let filter = arr.filter(obj => obj == item)
    let json={}
         json["value"] = item
         json["count"] = filter.length
    final.push(json)
})

let uniqueArr = final.filter((obj,index)=>{
    return index === final.findIndex(item=> item.value == obj.value)
})
console.log(uniqueArr)

output:
[
    { value: 7, count: 1 },
    { value: 3, count: 2 },
    { value: 5, count: 2 },
    { value: 6, count: 1 },
    { value: 9, count: 1 }
  ]