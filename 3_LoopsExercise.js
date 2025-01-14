// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let i = 1;
while(i < 5){
    console.log(i);
    i++;

}

console.log(i);


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let count = 1;

do{
    console.log(count);
    count++;
}
while(count < 5);

console.log(count);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for(let i = 1; i <= 5; i++){
    console.log(i);
}


// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//'while' loop
let count3 = 10;

while(count3 > 1){
    console.log(count3);
    count3--;
}
console.log(count3);

//'do while' loop
let count4 = 10;

do{
    console.log(count4);
    count4--;
}
while(count4 > 1);

console.log(count4);

//'for' loop
for(let i = 10; i >= 1; i--){
    console.log(i);

}    


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//'while' loop
let count6 = 7
let count7 = 27

while(count6 <= count7){
    console.log(count6);
    count6++;
}

//'do while' loop 
do{
  console.log(count6);
  count6++
}
while(count6<=count7);

//'for' loop 
for(let i = 7; i <= 27; i++){
  console.log(i);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//'while' loop
let countByTen = 10;

while(countByTen < 100){
    console.log(countByTen);
    countByTen += 10;

}

console.log(countByTen);

//'do while' loop

do{
  console.log(countByTen);
  countByTen += 10;
}
while(countByTen <= 100);

//'for' loop
for(let i = 10; i <= 100; i+=10){
  console.log(i);
}



// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

//the variable counterFour will always be less than 2 there for the loop will infinitely decrement the count
//updating the while condition so that counterFour will be decrement until -100 fixes the infinite loop

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favInt = 500;

for(let i = 0; i <= 500; i++){
    console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

const newFavInt = 70; 

for (let i = 0; i <= 100; i++){
    if(i === 70){
        console.log("My favorite number!");
    }
    else{
        console.log("Not my favorite number");
    }
}


// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

//From my reserach it looks like it would depend on the the project requirements to choose a loop. 
//However, the loop I would use the most would be 'for' loop. Working with it, it seems the most versitile and concise. 
//Some limitations would be know the exact number of iterations in advanced, however, due to how much it can accomplish in one loop would make it the best choice for me. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);

  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This exercise was fun! It was great to reinforce the different loops and see how they are set up and function. 
//One resource I used was https://codehs.gitbooks.io/introcs/content/Basic-JavaScript-and-Graphics/for-loops-in-javascript.html

// Email your file to us or commit your file to GitHub and email us a link.