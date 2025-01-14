// Week 1 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting(){
    console.log("Hello!")
}
//logGreeting();

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

function getName(){
    return "Leah";
}
console.log(getName());

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

function logGreeting2(){
    return "Hello! My name is " + getName();

}

console.log(logGreeting2());

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

function sum(int1, int2, int3){
    return int1 + int2 + int3;
}
console.log(sum(4, 7, 10));
console.log(sum(400, 30, 1));
console.log(sum(-9, 40, 100));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

function discount(age){
    if(age < 0){
        return false;
    }
    else if(age <= 14 || age >=65){
        return true
    }

    else{
        return false;
    }
}

console.log(discount(55));
console.log(discount(30));
console.log(discount(14));
console.log(discount(100));
console.log(discount(-1));

//age 14 or under && seniors 65 or older 
//else no discount 
//return will be boolean
//call function to test 


// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

function printTest(num,str){
    for(let i = 1; i < num; i++){
        console.log(str);
    }
    return str;
}

console.log(printTest(20,"Testing"));
console.log(printTest(5,"Testing"));
console.log(printTest(7,"Testing"));


// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
    return p1 * 2;
  }
  const y = 4;
  const z = mysteryFunction1(y);
  console.log("The value of y is " + y);
  console.log("The value of z is " + z);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction1 does
  // mysteryFunction1 is multiplying the parameter p1 by 2
  // 2. What prints out for the value of y
  // the value of y will be 4
  // 3. What prints out for the value of z
  // the value of z will be 8
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //Yes, my assessment is correct. I learned that if I read the code slowly I can understand what will happen before running it. 
  
  // Exercise 8. Read the following code (don't run it yet)
  function mysteryFunction2(p1, p2) {
    const x = p1 - p2;
    return x;
  }
  const a = mysteryFunction2(10, 4);
  const b = mysteryFunction2(a, 1);
  console.log("The value of a is " + a);
  console.log("The value of b is " + b);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction2 does
  // mysteryFunction2 will subtract the parameters p1 and p2. The return is store in the variable x. 
  // 2. What prints out for the value of a
  //the value of a will be 6
  // 3. What prints out for the value of b
  //the value of b will be 5
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //I learned to pay attention to the varible and review what is assigned to determine what will be returned
  
  // Exercise 9. This exercise is to practice reading the documentation for functions.
  // String.split() is a function in the JavaScript standard library that you can use in your code.
  // Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // Try to use it to solve the following challenges:
  
  // Here's a string I made representing my grocery list.
  // Using split() and groceryList, make an array of my grocery list items
  const groceryList = "eggs,carrots,orange juice";

  let newGroceryList = groceryList.split(",");

  console.log(newGroceryList);


  
  // Here's a string I made representing my morning schedule.
  // Using split() and mySchedule, make an array of the *first 2* things I do in the morning
  // There are multiple ways to do this, but try doing it using only the split() function.
  const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";

  const scheduleStart = mySchedule.split('--->', 2);

  console.log(scheduleStart);

  
  // Congrats, you made it to the end!
  // Did you find this easy or hard? If you used references, which ones helped you?
  // Please answer in a comment below.
  //This was fun, creating these functions were pretty straight forward. The documentation for the split function was well written. 
  //I did question myself if I can set a type for the function parameters, but I have confirmed they are just placeholders. 
  //I want to further explore to ensure those parameters only accept a specific type of data type. 
  //thinking about it more, I think this can be accomplished by if statements in the funciton.
  
  // Email your file to the course staff,
  // or commit your file to GitHub and email us a link.