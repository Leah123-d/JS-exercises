
// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []


function keys(obj1){
    let keysOnly = "";
    for(let key in obj1){
        keysOnly += key + " ";


        
    }
    return keysOnly;

}

//console.log(keys({ a: 1, b: 2, c: 3 }));
console.log(keys({color: "green", size:"small", mood:"happy"}));

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []

function values(obj2){
    let valuesOnly = "";
    for(val in obj2){
        valuesOnly += obj2[val] + " ";
    }
    return valuesOnly;

}

//console.log(values({color: "green", size:"small", mood:"happy"}));
console.log(values({cat1: "Allegra", cat2:"Cassie", cat3:"Toby",cat4:"Target"}));

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []


function entries(obj3){
    const enteriesCombined = [];
    for(let key in obj3){
        if(obj3.hasOwnProperty(key)){
            enteriesCombined.push([key,obj3[key]]);
        }
    }

    return enteriesCombined;

}

let obj4 = {name:"first",lastName:"last",time:"morning"};
let obj5 = {fruit:"berry",object:"pen",color:"pink"};

console.log(entries(obj4));
console.log(entries(obj5));
//I can seperate the object based on the : then group those elements in an array? 



// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

function pluck(obj6,nameOfKey){
    const values = [];
    for(let objects of obj6){
        values.push(objects[nameOfKey]);
    }
    return values;

}   

console.log(pluck([{cat1: "Allegra"}, {cat:"Cassie"}, {cat:"Toby"},{cat:"Target"}],'cat'));

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

function stringFromObject(obj7){
    let objToStr = [];
    for(let key in obj7){
        objToStr.push(key + " = " + obj7[key]);
    }
    return objToStr.join(", ");
}

console.log(stringFromObject({cat1: "Allegra", cat2:"Cassie", cat3:"Toby",cat4:"Target"}));
console.log(stringFromObject({travel: "Japan", transportation:"plane", duration:"10 days", sightsee:"cherry blossoms"}));

//I think I have to use a join 
//I should convert the the object to a string 
//I think I need to break down the key values to their own strings then concate them? 
//key = value;
//toString(); method won't work becuase it is just returning the datatype
//I was over thinking this, I can just use a for in loop then use the join method

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

function minMaxKeyInObject(obj8){
    let minKey = 100; //it doesn't feel right to hard code these values since the object key cans be any values
    let maxKey = -100;

    for(let key in obj8){
        let keyToNum = Number(key);
        if(keyToNum < minKey){
            minKey = keyToNum;
        }
        if(keyToNum > maxKey){
            maxKey = keyToNum;
        }


    }

    return [minKey,maxKey];

}
console.log(minMaxKeyInObject({ 50: 'f', 9: 'g', 0: 'h', 20: 'i', 80: 'i' }));



//looks like I just need to return the key and I might need a loop to iterate through the keys and compare the values 
//I'll need an if statement for the condition to check to find the min and max
//maybe I'll need min - max or find the average or which one is lower comparing each iteration to each other
//I'm not sure if hardcoded the min and max was the right move for this function 
//the key needed to be converted to a number to accuaretly compare the keys
