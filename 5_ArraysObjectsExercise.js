// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
//let animals = [];

// Exercise 2. Add the string "frog" to the array
//let animals = ["frog"];

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
let animals = ["frog","llama","horse","turtle","monkey"];

// Exercise 4. Update the first item in the array to be "gorilla"
animals.unshift("gorilla");
console.log(animals);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animals.length)

// Exercise 6. Print the first item in the array
console.log(animals[0]);

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
let lastItem = (animals.length-1);
console.log(animals[lastItem]);

// Exercise 8. Remove the last item from the array
console.log(animals.pop());
//console.log(animals);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
const assortedThings = [2,"picture",50,"pen","piano",100]

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

for (let i = 0; i < assortedThings.length; i++){
    console.log("Item # " + [i] + " is " + assortedThings[i]);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.

function numCheck(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0 ){
            console.log(arr[i] + " negative");
        }
        else if(arr[i] > 100){
            console.log(arr[i] + " BIG");
        }
        else if(arr[i] >= 0 || arr[i] <= 100){
            console.log(arr[i] + " small");
        }

    }

}

//console.log(numCheck([1,200,-40]));
//console.log(numCheck([300,90,-22]));
console.log(numCheck([4,53,7]));


//function 1 parameter, array of numbers 
//check the number in the array
//IF between 0 and 100 print small 
//elese IF negative pring negative   
//else IF > 100 print "BIG"


// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

//let me = {name: "Leah", favoriteAnimal:"cat", favoriteNumber:4};

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
let me = {name: "Leah", favoriteAnimal:"cat", favoriteNumber:4, hobby:"gardening", eyeColor:"brown"};

// Exercise 14. Update the favoriteAnimal value to something different
me["favoriteAnimal"] = "Penguin";
console.log(me);


// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(me.favoriteAnimal);
console.log(me["favoriteAnimal"]);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This was great and straightforward. I had to review how to access a key using bracket notation,
// and I realized I was missing the quotes needed to encapsulate the key.


// Email your file to the course staff,
// or commit your file to GitHub and email us a link.