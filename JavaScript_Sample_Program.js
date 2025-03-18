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
//shallow copy
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
  -------------------------------------------
  scnerio 40 spread operator example
  let student={
    name:"arjun",
    age:27,
    address: ""
  }
  let studentNameUpdate = {...student,name:"rrr"}
  console.log(studentNameUpdate)
//   or
  let {name,...rest} = student
    console.log(name,rest)

output:
{ name: 'rrr', age: 27, address: '' }
arjun { age: 27, address: '' }
-------------------------------------
scnerio 41 : curried functionconsole.log(sum(4)(5)(6));

function sum(x){
    return y =>{
        return z =>{
            return x+y+z
        }
    }
}

output:
15
-------------------------
scnerio 42: 
const a={x:1,y:2};
const b = a;
b.x=3
console.log(a)
console.log(b)

output:
{ x: 3, y: 2 }
{ x: 3, y: 2 }
-----------------------------
scnerio 43 :
let a =20
var a =10
console.log(a)

output:
Identifier 'a' has already been declared
-----------------------
scnerio:44
var length =10
function fn(){
    console.log(this.length)
}
var obj={
    length:5,
    method:function(fn){
        fn() //first it will execute
        arguments[0]() //second it will the arguments
    }
}
obj.method(fn,1)

output:
10
2
-------------------------
scnerio:45
function add (params={}){
    let obj={
        name:"arjun",
        age:29
    }
    let adding =Object.assign({},obj,params)
    console.log(typeof adding)
}
add()

solution
copy of the two objects and assing to the adding variable
---------------
scnerio:46
let arr =[1,2,3,4]
let res = arr.reverse()
output:
[4,3,2,1]

or 

let reversed = arr.reduceRight((acc,ele)=>{acc.push(ele) return acc},[])
console.log(reversed)
----------------------
scnerio:47
let arr =[1,2, [3,4,[5,6],[7,8]]]
console.log(arr.flat(3))
output:
[
    1, 2, 3, 4,
    5, 6, 7, 8
  ]
  ---------------------
  scnerio:48
  let memoziedValue = {}

function adding (num){
    if(num in memoziedValue){
        console.log('memozied value')
        return memoziedValue[num]
    }
    else{
        console.log("Adding...")
        memoziedValue[num]= num+2
        return memoziedValue[num]
    }
}

console.log(adding(2))
console.log(adding(2))
console.log(adding(2))
console.log(adding(2))

output:
Adding...
4
memozied value
4
memozied value
4
memozied value
4
------------------
scnerio:49
// polyfill of foreach in array
let array = [1,3,4,4,5]

Array.prototype.myForEach = function(callback){
    for(i =0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

array.myForEach((item,value,arr)=>{
    console.log(item,value,arr)
})

console.log(Object.getOwnPropertyNames(Array.prototype))

output:
1 0 [ 1, 3, 4, 4, 5 ]
3 1 [ 1, 3, 4, 4, 5 ]
4 2 [ 1, 3, 4, 4, 5 ]
4 3 [ 1, 3, 4, 4, 5 ]
5 4 [ 1, 3, 4, 4, 5 ]
[
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'at',          'findLast',       'findLastIndex',
  'myForEach'
]
--------------------------
scnerio:50
//Eval in js - inside the eval it takes the argument so it will print 10 value
let a = 10
console.log(eval("a"))

ouput:
10
----------------------------
scnerio:51
//For each does not have break and stop in between the loops
let num =[1,2,3,4,5]
console.log("FOR Each:")
num.forEach(item=>{
    console.log(item)
    if(item == 2){
        return
    }
})

//if you want to aicheve to stop the loop means you have multiple option 
//for..of,for..in,foretc..
console.log("For Of")
for(const item of num){
    console.log(item)
    if(item == 2){
        return
    }
}0


output:
FOR Each:
1
2
3
4
5
For Of
1
2
------------------------
scnerio:52 generator function
function NotAgenerator(){
    return 10;
    return 20;
}
var result = NotAgenerator()
console.log(result)

//Now it will print only first value 
ouput:
10

//Now we want both the values means we need  use genetor

function* generator(){
    yield 10;
    yield 20;
}
var result = generator()
console.log(result.next())
console.log(result.next())

output:
{value:10,done:false}
{value:20,done:false}
-----------------------
scnerio:53 
let arr =["hello","hi","hello","javascript","hi"]

let countWord ={}
arr.forEach((word)=>{
    if(word in countWord){
        countWord[word]++
    }else{
         countWord[word] =1
    }
})
console.log(countWord)

Output:
{ hello: 2, hi: 2, javascript: 1 }
-----------------------
scnerio :54
let person ={
    name:"arjun",
    age:50
}
let res =Object.entries(person)
console.log(res)

// or

let ObjKeys =Object.keys(person)
console.log(ObjKeys)

let final = ObjKeys.map(key=>{
    let val = person[key]
    return [ key,val]
})
console.log(final)

Output:
[ [ 'name', 'arjun' ], [ 'age', 50 ] ]
[ 'name', 'age' ]
[ [ 'name', 'arjun' ], [ 'age', 50 ] ]
-----------------------------
scnerio:55 : dangerouslySetInnerHTML elemnent use
let data ="<h1>Hello</h1>"
export default function HelloFunction(){
    return <div dangerouslySetInnerHTML={{__html:data}}/>
}
Output:
UI : Hello
---------------------------
scnerio:56 to check the string character how many times present
const maxWord = (str)=>{
    let obj ={}
    for(let char of str){
        !obj[char]? obj[char] =1 :obj[char]++
    }
    console.log(obj)
    let maxNum = 0, maxChar =''
    for(let char in obj){
        if(obj[char] >= maxNum){
            maxNum = obj[char];
            maxChar =char
        }
    }
    console.log(maxNum,maxChar)
}
maxWord("hellowwwsh")

output:
{ h: 2, e: 1, l: 2, o: 1, w: 3, s: 1 }
3 w
----------------------------------------------------
scnerio:57
console.log([]== '') //true
console.log([]== {}) //false
console.log([]== []) //false
console.log([].length== 1) //false
console.log([1,2]== [1,2]) //false
console.log([].length == 0) //true
--------------------------
scnerio 58
const user1={
    name:'arjun',
    age:25
}
const user2 = user1

user2.name ="mano"
user2.age=33

console.log(user1)
console.log(user2)

output:
{ name: 'mano', age: 33 }
{ name: 'mano', age: 33 }
-------------------------------
Scnerio:59 first letter only caps
function capsLetter (str){
    let strVal = str.split(" ")
   let final =  strVal.map((char,index)=>{
        return char.slice(0,1).toUpperCase() + char.slice(1)
        // console.log(char.slice(0,1).toUpperCase() + char.slice(1))
    })
    let str1 = final.toString()
    console.log(str1.replaceAll(','," " ))
}
capsLetter('hi i am arjun')

output:
Hi I Am Arjun
-------------------------------------------------
scnerio:60 cllback function examples
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

output:
Hi Peter
I am callback function
--------------------------------------
scnerio:61 
var y = [1, 2, 3, 4];

for (var i = 0; i < y.length; i++) {
    if (y[i] == 2) {
        continue;
    }

    console.log(y[i]);
}

output:
1
3
4
-----------------------------------
scnerio :62 
// const array = [10, 40, 'a', 10, 87, 'a' ]
// let duplicateArrRemove = [...new Set(array)]
// console.log(duplicateArrRemove)

function objChangeValue(str,inx,val){
    let checkingInx =[]
  let OnlyInx =  Object.values(str).map((item,index)=>{
    if(item == inx){
        checkingInx.push(index)
    }
    })
    
     Object.keys(str).map((obj,i)=>{
          if(i == checkingInx[0]){
              str[obj] = val
          }
      })
    console.log(str)
}
objChangeValue({
a: 1,
b: 2,
c: 3 },2,5)

output:
{ a: 1, b: 5, c: 3 }
-------------------------
scnerio:63
[22:27] Damanpreet Kaur
greet1();
greet2();
greet3();
greet4();
function greet1() {
console.log("HELLO");


var greet2 = function () {
console.log("HELLO"); }
    
    
    
}



let greet3 = function () {
console.log("HELLO");


const greet4 = function () {
console.log("HELLO"); }
    
}

output:
greet1 is excute and greet2 is not there so you will get error.

------------------------------------------
scnerio:64 find only duplicate value
let arrNUm =[1,2,3,4,5,2,3]
let duplicateNum = arrNUm.filter((ele,index,arr)=>arr.indexOf(ele) !== index)
console.log(duplicateNum)

output:
[ 2, 3 ]
----------------------------------
scnerio:65 remove duplicate arrayOfNumbers
let arrNUm =[1,2,3,4,5,2,3]
let duplicateNum = arrNUm.filter((ele,index,arr)=>arr.indexOf(ele) == index)
console.log(duplicateNum)

output:
[1,2,3,4,5]
----------------------
scnerio:66 find the second largest Number
const arr = [12, 35, 10, 35, 10, 34, 1,55,44,95,33,2]; 

function secondLargestNUmber(arr,num){
    arr.sort()
    console.log(arr)
    let arrLength = arr.length
    for(let i = arrLength - num;i>=0;i--){
        if(arr[i] !== arr[arrLength-num]){
           return arr[i] 
        }
    }
}
console.log("SecondLargest NUmber is : ",secondLargestNUmber(arr,1))

output:
[
    1, 10, 10, 12,  2,
   33, 34, 35, 35, 44,
   55, 95
 ]
 SecondLargest NUmber is :  55
or
const arr = [12, 35, 10, 35, 10, 34, 1,55,44,95,33,2]; 

function secondLargestNUmber(arr,num){
  arr.sort()
  const arrLength =  arr.length
 const update =  arr.filter((item,index)=>{
      if(index === arrLength - num){
          console.log(item)
          return item
      }
  })
  return update
}
console.log("SecondLargest NUmber is : ",secondLargestNUmber(arr,2))

55
SecondLargest NUmber is :  [ 55 ]

// or
// second smallest number
const arr = [12, 35, 10, 35, 10, 34, 1,55,44,95,33,2]; 

function secondSmallestNUmber(arr,num){
  arr.sort().reverse()
  const arrLength =  arr.length
 const update =  arr.filter((item,index)=>{
      if(index === arrLength - num){
          console.log(item)
          return item
      }
  })
  return update
}
console.log("SecondSmallest NUmber is : ",secondSmallestNUmber(arr,2))
o/p:
2


or
const array = [2, 6, 0, 5, 1, 9, 4];

function secondLowestNumber(arr,num){
    
    
    arr.sort().reverse()
    
    
    arr.filter((item,index)=>{
        if(index == arr.length - num){
            console.log(item)
        }
    })
    
    
    
    let arrpush =[]
    for(let i =0 ; i<arr.length;i++){
        for(let j=0;j<num;j++){
            if(arr.indexOf(i)>arr.lastIndexOf(j)){
                if(arrpush.indexOf(j) ==-1){
                arrpush.push(j)
                }
                
            }
        }
    }

    console.log(arrpush[1])
    
}

secondLowestNumber(array,3)







 -------------------------------------------------------
 scnerio:67 find the missing element in array
 let arr= [1,2,4,5,6,8,10]

let minVal = Math.min(...arr)
let maxVal = Math.max(...arr),fin =[]

for(let i = minVal; i<maxVal;i++){
    if(arr.indexOf(i)<0){
      fin.push(i)
    }
}
console.log(fin)


output:
[ 3, 7, 9 ]
------------------------------------
scnerio:68 factorail number 
// eg: input is 5 Means -> 1*2*3*4*5 =120
//factorial number
let inputNUmber =5
let fact = 1

for(let i=1;i<= inputNUmber;i++){
    console.log(fact,i)
    fact *= i
}

console.log(`Factorial Number of ${inputNUmber} is ${fact}`)

output:
1 1
1 2
2 3
6 4
24 5
Factorial Number of 5 is 120
---------------------------------------
scnerio:69 -vowels checking
let str ="rjin"
function vowelString(vowles){
 if(vowles.includes("a")||vowles.includes("e") || vowles.includes("i") ||vowles.includes("o") || vowles.includes("u")){
        return true
    }else{
        return false
    }
}
vowelString(str) ?
console.log(`${str} is a vowel`): console.log(`${str} is not a vowel`)

output:
rjin is a vowel
--------------------------------------------------------------
scnerio:70 reverse the string using for loop
let str ="HelloWorld"
let rev =''
for(let i=str.length-1;i>=0;i--){
    rev += str[i]
}
console.log(rev)

output:
dlroWolleH
-----------------------------------------------
scnerio:71:
function isEqual() {
    let a = [1, 2, 3, 5];
    let b = [1, 2, 3, 5];
 
    // If length is not equal
    if (a.length != b.length)
        return "False";
    else {
 
        // Comparing each element of array
        for (let i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return "False";
        return "True";
    }
}
let v = isEqual();
 
console.log(v);

output:
True

------------------------------
scnerio:72:
//intersection of two arrays

let arr1=[1,2,3,4,5]
let arr2=[2,4,5,95,8]
let interaction  =arr1.filter((item)=>{
    return arr2.includes(item)
})
console.log(interaction)

output:
[ 2, 4, 5 ]
---------------------------------
scnerio:73
//union of two arrays
let arr1=[1,2,3,4,5]
let arr2=[2,4,5,95,8]

let unionArr = [...arr1,...arr2]
console.log(unionArr)

output:
[
    1, 2, 3,  4, 5,
    2, 4, 5, 95, 8
  ]
  ---------------------------------------
  scnerio:74
  //fibnocc's sequence eg:
// 1,1,2,3,5,8,13,21 ->previous and current will and generator next as a new number

let a =0;b=1;
for(let i=0;i<10;i++){
    let temp = a+b
    a=b
    b=temp
    console.log(temp)
}

output:
1
2
3
5
8
13
21
34
55
89
----------------------------------------------------------
scnerio:75
//Tables 

function tables(num){
    for(let i =1;i<=10;i++){
        let res = i* num
        console.log(`${num} * ${i} = ${res}`)
    }
}
tables(5)
output:
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
-------------------------------------
scnerio:76
//Armstrong number
// 153 = 1*1*1+5*5*5 +3*3*3 ouput is 153
let number =92727
let temp = number,sum =0
let numberLenth = number.toString().length
while(temp>0){
    let remainder = temp%10
    sum += remainder ** numberLenth
    temp = parseInt(temp/10)
}
console.log(sum)

output:
92727
----------------------------------------------
scnerio:77
let person ={
    name:"Arjun",
    age:27,
    printInfo:function(){
        console.log(`My name is ${this.name} and my age is ${this.age}`)
    }
}
person.printInfo()

output:
My name is Arjun and my age is 27
----------------------------------------------
scnerio:78 
console.log("3" + 2)
console.log("2" - 2)
console.log("a" - "b")

output:
32
0
NaN
-------------------------
scnerio:79
//TO identify the non repeating character in string
let str1 = "abcabe"

function nonRepeat(str){
    let arr =[]
    for(let i=0;i<str.length;i++){
        let j = str.charAt(i)
        console.log(j)
        if(str.indexOf(j) == str.lastIndexOf(j)){
            console.log(j)
            arr.push(j)
        }
    }
    console.log(arr)

    // or

    // let obj={}
    // for(let char of str){
    //     if(char in obj){
    //         obj[char]++
    //     }else{
    //         obj[char] =1
    //     }
    // }
    // let minVal =1,minChar=[];
    // for(let char in obj){
    //     if(obj[char]<= minVal){
    //         minChar.push(char)
    //     }
    // }
    // console.log(obj,minChar)
}
nonRepeat(str1)
//  or


output:
a
b
c
c
a
b
e
e
[ 'c', 'e' ]
----------------------------------------------------------------------------------------------------------
scnerio 80:
const OMITTED_WORDS = ["a", "the", "and", "or", "but"];
//input box typing 
inputboxText ="this is a test sentence"
const getProcessedText = () => {
    let words = inputText.split(" ");
       let remainingWords = words.filter(word => !OMITTED_WORDS.includes(word.toLowerCase()));
       return remainingWords.join(" ");
     }

     output:
this is test sentence
-----------------------------------------------------------------------------------------------------------------
scnerio:81
const a = [1,2,3,2,3,4,5,6,6,1,2,3]


const nonRepeatedArr =[]
 a.map((item)=>{
    const filterArr = a.filter(obj=>obj == item)
    if(filterArr.length ==1){
        nonRepeatedArr.push([...filterArr])
    }
})

const removeArr = nonRepeatedArr.flat(2)
console.log('removeArr',removeArr)

//ouptut:
"removeArr" [ 4, 5 ]
============================
// scnerio:82
function add (){
    setTimeout(()=>{
        console.log(i)
    },1000)
    var i=1 || let i=1 ||const i=1
 }
 
 add()
 output:
 1
 ==========================
//  scnerio:83


const data = [{
    name:'menu 1',
    id:0,
    subItems:[{
        name:"menu 2" 
    }]
},{
    name:"menu 3",
    subItems:[{
        name:"menu 4",
        subitems:[{
            name:"menu 5"
        },{
            name:'menu 6'
        }]
    }]
}]

const arr1=[],arr2=[],arr3=[]
const updateArr = data.map((item,index)=>{
    arr1.push(...[item.name])
    let findSubItems= data[index].subItems
      const subName = findSubItems.map(ele => ele.name)
     arr2.push(...subName)
   
    findSubItems.filter(obj=>{
        const Key = Object.keys(obj)
                 if(Key.indexOf('subitems') == 1){
                     const subItemsNames = obj.subitems.map(ele=>ele.name)
                     arr3.push(...subItemsNames)
                 }

        
        
    })
    
    // if(data[index].subItems[index] == )
    
})
console.log(arr1,arr2,arr3)

const finalArr = [...arr1,...arr2,...arr3]
console.log(finalArr.sort())

output:
[ 'menu 1', 'menu 3' ] [ 'menu 2', 'menu 4' ] [ 'menu 5', 'menu 6' ]
[ 'menu 1', 'menu 2', 'menu 3', 'menu 4', 'menu 5', 'menu 6' ]
============================================
scnerio:84
const arr =[1,2,3,5,6]
count =10
// missing numbers

const output=[]
for(let i =1;i<count;i++){
    if(arr.indexOf(i)==-1){
        output.push(i)
    }
}
console.log(output)
output:
[ 4, 7, 8, 9 ]
=================
scnerio:85
const arr =[5,5,5,2,2,2,4,4,2,1,1,]

const count={}

arr.map(item=>{
    !count[item]?count[item]=1:count[item]++
})
console.log(count)
output:
{ '1': 2, '2': 4, '4': 2, '5': 3 }
===============================================================
scnerio:86
const arr =['22-33-44','66-11-33','100-33-44']

const output = arr.map(item=>{
    let splitArr = item.split("-")
    const max= Math.max(...splitArr)
    return max
})
console.log(output)

output:
[ 44, 66, 100 ]
============================
scnerio:87
const str ="write a function in longest word in string"

const split = str.split(" ")
console.log(split)

let count =0,word=''
split.map(item=>{
    if(item.length >=count){
        count = item.length
        word = item
    }
})
console.log(count,word)
output:
[
    'write',    'a',
    'function', 'in',
    'longest',  'word',
    'in',       'string'
  ]
  8 function
  ======================
  scnerio:88
  //string longest string and shortest string in array
  const str ="write a function in longest word in string"

const split = str.split(" ")
console.log(split)


const sortLongesttArr = split.sort((a,b)=>b.length - a.length)[0]
console.log('sortArr',sortLongesttArr)

const sortShortestArr = split.sort((a,b)=>a.length - b.length)[0]
console.log('sortShortestArr',sortShortestArr)

output:
[
    'write',    'a',
    'function', 'in',
    'longest',  'word',
    'in',       'string'
  ]
  sortArr function
  sortShortestArr a
  =====================
  scnerio:89
  for (var i = 0; i < 3; i++) {
    // console.log(i); 
}

console.log(i);
output:
3
or
for (var i = 0; i <= 3; i++) {
    // console.log(i); 
}

console.log(i);
output:
4
=============================
scnerio:90
//function composition
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}


function compose(f, g) {
    console.log(f,g)
    return function(x) {
        return f(g(x))
        
  };
}
var res = compose(mul,add)(4);
console.log(res);

output:
[Function: mul] [Function: add] undefined
4
18
=============================
scnerio:91


const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

const digitize = n => [...`${n}`].map(i => parseInt(i));
const add5 = x => x + 5;
const multiply = (x, y) => x * y;

const composedFn = compose(
  digitize,
  add5,
  multiply
);
composedFn(5, 2); // [1, 5]
======================================================
scnerio:92
//forevery 3 we you need to  fizz 
//for every 5 you need to showw fizzbuzz
//For 15 you need to show the fizzbuzz


for(let i =1 ;i<=15;i++){
     
    if(i%3 ==0 && i%5==0){
        console.log('fizzbuzz')
        ++i
    }
     if(i%3===0){
       console.log('fizz')
       ++i
   }
    
   if(i%5 === 0){
        console.log('buzz')
       ++i
   }
     if(i%3===0){
       console.log('fizz')
       ++i
   }
   if(i>15){
       break;
   }
      else console.log(i)

}

output:
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
==================================================
scnerio:93
//arr input arr =[2,12,3,4,4,5,3,4]
//n=3
//output: [[1,12,3],[4,4,5],[3,4]]


const arr =[2,12,3,4,4,5,3,4],n=3
const chunked =[]
for(let ele of arr){
    let last = chunked [chunked.length -1]
    if(!last || last.length == n){
        chunked.push([ele])
    }
    else{
        last.push(ele)
    }
}
console.log(chunked)

output:
[ [ 2, 12, 3 ], [ 4, 4, 5 ], [ 3, 4 ] ]
===================================================
scnerio:94
const obj ={x:10,y:20}
Object.freeze(obj)
const update =obj
update.x=20
console.log(update,obj)

output:
{ x: 10, y: 20 } { x: 10, y: 20 }

// === Code Execution Successful ===
==============================
scnerio:95
console.log(+"1"+"1"+"1")
console.log(1+ +"1"+"1"+"1")
console.log(1-"1"+"1")
console.log("a"-"b")

o/p:
111
211
01
NaN

==========================
scnerio:96
// x will be object
let x ={
    flag:1,
    toString:function(){
        return this.flag++
    }
}


if(x==1&& x==2 && x==3){
    console.log("hello",x)
}

o/p
hello { flag: 4, toString: [Function: toString] }
=======================
scnerio:97
const obj={
    a:1,
    b:2
    a:2
}
console.log(obj)

o/p:
SyntaxError: Unexpected identifier 'a'
==========================
scnerio:98
if([]){
    console.log("init")
}
console.log([]==true)


if([]== true){
    console.log("hello")
}

o/p
init
false
==========================
scenerio:99
//object seal cannot delete and  add  add ,only we can modify the data
let obj ={name:"arjun",age:25}
Object.seal(obj)
delete obj.name
obj.phno =303333
obj.age =30
console.log(obj)


//object.freeze -you cannot delete and add and modify
let obj1 ={name:"arjun",age:25}
Object.freeze(obj1)
delete obj1.name
obj1.phno =303333
obj1.age =30
console.log(obj1)

o/p:
{ name: 'arjun', age: 30 }
{ name: 'arjun', age: 25 }
=========================================================
scnerio:100
memo in react example
import {memo}from react

const Greeting = memo(function Greeting(){
    return <h1>{name}</h1>
})

<Greeting name={"Arjun"}/>

o/p
Arjun will print in the UI
================================================================
