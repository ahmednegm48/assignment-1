//=================================================//
//         A. Part 1: Coding Questions             //
//=================================================//

let Q1 = "123"
console.log(Number(Q1)+7);

// //=================================================//

let Q2=0

if(!Q2){
 console.log("invalid");
};


//=================================================//

let Q3 = "";
for(let i = 0 ;i<=10;i++){
    if(i%2 === 0){
        continue;
    }
    else {    
        Q3 += `${i} ,`;
    }
};
console.log(Q3);

//=================================================//

const arr = [1, 2, 3, 4, 5];

const Q4 = arr.filter(checkEven);

function checkEven(even) {
  if(even % 2 === 0 ){
    return even;
  }
}

console.log(Q4);

//=================================================//

let half1 = [1,2,3];
let half2 = [4,5,6];
let Q5 = [...half1 , ...half2];
console.log(Q5);

//=================================================//

let Q6 = 2
switch(Q6){
  case 1 :
    console.log("Sunday");
    break;
  case 2 :
    console.log("Monday");
    break;
  case 3 :
    console.log("Tuesday");
    break;
  case 4 :
    console.log("Wednesday");
    break;
  case 5 :
    console.log("Thursday");
    break;
  case 6 :
    console.log("Friday");
    break;
  case 7 :
    console.log("Saturday");
    break;

  default:
    console.log("enter number from 1 to 7");  
}

//=================================================//

const numbers = ["a", "ab", "abc"];
function privLength(x){
  return x.length;
}
const Q7 = numbers.map(privLength)
console.log(Q7);

//=================================================//

const Q8 = 15;

if(Q8 % 3 === 0 && Q8 % 5 === 0){
  console.log("Divisible by both");
}

//=================================================//

const Q9 = (k) => k * k;
console.log(Q9(5));

//=================================================//

const Q10 = {name: 'John', age: 25};
console.log(`${Q10.name} is ${Q10.age} years old`);

//=================================================//

const Q11 = (...x)=>{
  let sum = 0;
  for(let i = 0; i < x.length; i++){
    sum += x[i];
  }
  return sum;
};

console.log(Q11(1,2,3,4,5));

//=================================================//

function Q12() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success');
    }, 3000);
  });
}

Q12().then((x) => {
  console.log(x); 
});

//=================================================//

const Q13 = [1, 3, 7, 2, 4];

const maxValue = Math.max(...Q13);
console.log(maxValue);

//=================================================//

const Q14 = { name: "John", age: 30 };

const fun = (obj) => {
  return Object.keys(obj);
}

console.log(fun(Q14));

//=================================================//

let Q15 = "The quick brown fox";

function splitString(str) {
  return str.split(" ");
};

console.log(splitString(Q15));

//=================================================//
//         B. Part 2: Essay Questions              //
//=================================================//


/*


1. What is the difference between forEach and for...of? When would you use each?

foreach is mainly designed for arrays and is used to execute a provided function once for each array element It doesn't support break or continue statement 
while for...of is a loop that iterates over any iterable objects (arrays, strings, maps, sets) and allows the use of break and continue statements + You can perform asynchronous operations

2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.

Hoisting is a behavior where JavaScript moves variable and function declarations to the top before executing the code.
The Temporal Dead Zone (TDZ) is the zone between the start of a block and the point where a variable is declared for example:
{
  // This is a TDZ for 'area'
  
  console.log(area); // Cannot access 'area' before initialization
  
  let area = "safe"; // The TDZ ends here
  
  console.log(area); // "safe"
}

3. What are the main differences between == and ===?

== compares values only (not datatype), it performs type coercion if the types are different For example, 5 == "5" is true because the string "5" is coerced to the number 5 before comparison.
=== compares both value and type For example, 5 === "5" is false because they are of different types (number vs string).

4. Explain how try-catch works and why it is important in async operations.

we write in try code that might throw an error and if the error occurs then in catch we handle the error that occurs in try block
instead of white screen you can show a "Try again later" message to the user

5. What’s the difference between type conversion and coercion? Provide examples of each.

type conversionwhen we use built-in functions to convert data from one type to another for example: Number("42") or parseInt("42")
type coercion is when JavaScript automatically converts types during operations for example: "5" + 3 results in "53" because the number 3 is coerced to a string before concatenation.


*/