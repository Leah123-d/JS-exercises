//Question 1: 
/*
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;
console.log(user);

//use dot notation to add values to the object 

//Question 2: 
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let obj = {name:"cat"};

function isEmpty(obj){
    for(let prop in obj){
        return false;
    }
   return true;

}

console.log(isEmpty(obj));
//looping through properties is the right approach 
//a simple way to write a for in loop where the for loop wold have the condition and then 
//anything that doesn't meet that condition wold return the statement outside of the loop 

//Question 3: 
/*
We have an object storing salaries of our team:


Write the code to sum all salaries and store in the variable sum. 
Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;

function salarySum(salaries){
    for(let key in salaries){
        sum += salaries[key];
    }
    return sum;
}

console.log(salarySum(salaries));

//issue was an early return statement 
//the for loop will loop through all the keys and when it is done it will enter enter the return statement 

//Question 4: 

/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
*/

let obj2 = {val: 4, val2:7, val3: 1, val4: 3}

function multipleNumeric(obj2){
    for (prop in obj2){
        if(typeof obj2[prop] == 'number')
        obj2[prop] = obj2[prop] * 2;
    }
}

multipleNumeric(obj2);
console.log(obj2);
//remember we need to store the value of what we're creating somewhere 
//we can assign it to the object we're modifying too .