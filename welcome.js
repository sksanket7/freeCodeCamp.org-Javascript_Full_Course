console.log("\nJavascript Hands-On");


//Arrays In Javascript
console.log("\nArrays In Javascript");
var myArray = ["Hi", 2 , "sanket", '!'];    
console.log(myArray[0].length);

//Multi-Dimentional Arrays
console.log("\nMulti-Dimentional Arrays");
var multiArray = [["Hi", 2 , "sanket", '!'], ['*']];
console.log(multiArray[1][0]);

//push(<element>)
console.log("\npush(<element>) --> Adds new element");
multiArray.push(["Pushed Array"]);
console.log(multiArray.length);

//pop() --> removes the last element (newly added)
console.log("\npop()  --> removes the last element (newly added)");
multiArray.pop();
console.log(multiArray.length);

//shift() --> removes the first element 
console.log("\nshift() --> removes the first element");
multiArray.shift();
console.log(multiArray.length);

//unshift(<element>) --> adds the element on the first position
console.log("\nunshift(<element>) --> adds the element on the first position");
multiArray.unshift("Unshifted element");
console.log(multiArray.length);




