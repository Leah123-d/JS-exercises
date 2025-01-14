// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'

function prependToString(str1,str2){
    return str2 + str1;
}

console.log(prependToString("test","cool"));
console.log(prependToString("car","red"));
console.log(prependToString("fruit","fresh"));

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false

function stringIncludes(string,char){
    let stringSplit = string.split('');
    //console.log(stringSplit);
    for(let i = 0; i < stringSplit.length; i++){
        //console.log([i]);
        //console.log(stringSplit.length)
        if(stringSplit[i] === char){ 
            return true;
        }
    }  
    return false;

}




console.log(stringIncludes("too","o"));
console.log(stringIncludes("waterbottle", 't'));
//I think I could use a .split() method on the string and check if includes char



// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1

function stringLastIndexOf(str3,char2){
    for(let i = str3.length - 1; i >= 0; i--){ //we're looping through the length of the string
        //since we're counting backwards when i is = to 0 the loop will stop
        if(str3[i] === char2){
            return i; // this is returning the last occurrence of the char2
        }
    }
    return -1; //this will return if no match if found
}

console.log(stringLastIndexOf("potato","t"));
console.log(stringLastIndexOf("totally","c"));

//I need to check the string "backwards", i.e decrementing the count
//also, I don't need to split the string because we can iterate through string with varible[i];


// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
// Examples:
// removeFromString('Elie', 2, 2) // --> 'El'
// removeFromString('Elie', 0, 1) // --> 'lie'
// removeFromString('Hello School', 0, 6) // --> 'School'
// removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// removeFromString('Hello School', 6, 400) // --> 'Hello '

function removeFromString(str4,index1,toRemove){
    let newStr4 = str4.slice(0,index1) + str4.slice(index1 + toRemove);
    return newStr4;

}

console.log(removeFromString("Timeless", 4, 3));
console.log(removeFromString("marathon",3,4));

//I think we'll have to use split and delete methods? 
//During my reaseach, using slice is a better method to set the starting and ending parameters of the characters to remove
//return the new strings without the removed characters 


// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

function indexOf(arr1,num){
    for(let i = 0; i < arr1.length; i++){
        if(num === arr1[i]){
            return i;//while writing this, this was not returning the index, but the value it matched with
            //updating the reutrn to reutrn the index versus the value correctly completes this exercise
            
        }
    }
    return -1;

}

let arr1 = [40, 3, 1, 33];
let arr2 = [0, 29, 500,99];
let arr3 = [50,300,2,8];

console.log(indexOf(arr1,1));
console.log(indexOf(arr2,30));
console.log(indexOf(arr3,300));

//Will need to loop through the array. 
//based on the previous exercises I can use a loop 
//will need to decrement backwards to check last characters 

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. 
//The function should return true if the value exists in the collection when we search starting from the starting index.
//Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, 
// the third parameter is a starting index for where to search from. 
// If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

function includes(collection,num,indexStart = 0){
    if(typeof collection === "string" || Array.isArray(collection)){ //this is the correct syntax to check if the parameter is an array
        for(let i = indexStart; i < collection.length; i++){// this is itereating through the collection and using parameter indexStart as the starting index to check
        if(collection[i] === num){
        return true;
        }
    }   
   }   else if(typeof collection === "object"){
            for(let key in collection){ //key is holding the iterations of the loop
                if(collection[key] === num){ //we compare the results from the iterations to the num and if there is a match we return true
                    return true;
                }

            }
        }
        return false;
    }


console.log(includes([1, 2, 3], 1, 0));
console.log(includes({stuff:"animals", stuff2:"house", stuff3:"car"},1));
console.log(includes([5,99,40,31,50,3604],40));


//we will be checking the parameters 
//use if statments to check conditions 
