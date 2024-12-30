/**
 Let's recap some stuff about conditionals
 */

if ("some string" === "another string") {
    console.log("The strings are equal");
}else {
    console.log('The strings are not equal');
}

/*

Basics of an If Statement

if (Expression)
{
True Instructions
}
else
{
False / Else Instructions
}
 */

//Index                    0        1         2         3         4
const colours = ["orange", "green", "yellow", "Purple", "Blue"];

const randomIndex = Math.floor(Math.random() * colours.length);

const randomColour = colours[randomIndex];

if(randomColour === colours[0])
{
    console.log('the colour is orange');
} else if (randomColour === colours[1])
{
    console.log('the colour is green');
} else if (randomColour === colours[2])
{
   console.log('the colour is yellow');
} else if (randomColour === colours[3])
{
    console.log('the colour is purple');
} else if (randomColour === colours[4])
{
    console.log('the colour is blue');
}

//Switch Case Statements
//Maybe not the most efficient way to code to use this a lot


//Looping

//Iterate over a set of resources - mainly used in databases



//Here is an object we will use for this example

const blogPosts = [

    {
       title : "What is JS?",
        author : "Zack Gollwitzer",
        publishDate : 'Dec 20, 2020',
        content : 'some post content here'
    },
    {
        title : "What is a Conditional?",
        author : "Zack Dean",
        publishDate : 'Dec 20, 2052',
        content : 'some loop content here'
    },
    {
        title : "What is the meaning of life?",
        author : "Peter Gollwitzer",
        publishDate : 'Dec 20, 3055',
        content : 'something like 42...I guess'
    }
]

for (let i = 0; i < blogPosts.length; i++)
{
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    //Here we just use the variables to do something with each post

    //Printing the values will do the trick

    console.log(postTitle, postAuthor, postDate, postContent);

} // End of For Loop
 /*
 Let's recap some stuff about conditionals
 */

if ("some string" === "another string") {
    console.log("The strings are equal");
}else {
    console.log('The strings are not equal');
}

/*

Basics of an If Statement

if (Expression)
{
True Instructions
}
else
{
False / Else Instructions
}
 */

//Index                    0        1         2         3         4
const colours = ["orange", "green", "yellow", "Purple", "Blue"];

const randomIndex = Math.floor(Math.random() * colours.length);

const randomColour = colours[randomIndex];

if(randomColour === colours[0])
{
    console.log('the colour is orange');
} else if (randomColour === colours[1])
{
    console.log('the colour is green');
} else if (randomColour === colours[2])
{
   console.log('the colour is yellow');
} else if (randomColour === colours[3])
{
    console.log('the colour is purple');
} else if (randomColour === colours[4])
{
    console.log('the colour is blue');
}

//Switch Case Statements
//Maybe not the most efficient way to code to use this a lot


//Looping

//Iterate over a set of resources - mainly used in databases



//Here is an object we will use for this example

const blogPosts = [

    {
       title : "What is JS?",
        author : "Zack Gollwitzer",
        publishDate : 'Dec 20, 2020',
        content : 'some post content here'
    },
    {
        title : "What is a Conditional?",
        author : "Zack Dean",
        publishDate : 'Dec 20, 2052',
        content : 'some loop content here'
    },
    {
        title : "What is the meaning of life?",
        author : "Peter Gollwitzer",
        publishDate : 'Dec 20, 3055',
        content : 'something like 42...I guess'
    }
]

for (let i = 0; i < blogPosts.length; i++)
{
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    //Here we just use the variables to do something with each post

    //Printing the values will do the trick

    console.log(postTitle, postAuthor, postDate, postContent);

} // End of For Loop


//Next Array Example that does the same as above

/*
Declaring a const array with mixed data types

looping through the array to console log the data type of the various types of data entered


 */


//Fun Functions of JS for the things :)


//Functions

/*

how we write a function

function myFunction (){

}

 */

function myFunction(){
    console.log('hello world, this is my first function');
}

//We have declared the function


//now we invoke or call the function

myFunction();

// Call, Execute, Invoke are all used to call



//we can declare and call the function in the same step


//Immediately invoked function

(function secondFunction(){
    console.log('this is my second function');
})();


// By encasing in the brackets and providing it with the parameters (empty in this case)


//Parameters & Arguments


function myFunction2 (param1, param2){
    console.log(param1);
    console.log(param2);

}

//We havent assigned these yet

myFunction2("hello World", 685597);


//Parameters, are only accessible in the function in which they are declared

//These are called scopes - What it can access and when

// The second way to declare a function - a bit more advanced

function myFunction3 ()
{
    console.log('this is my third function');
}

const anotherFunction = function () {
    console.log("another thing");
}


/*
function () {
    console.log("another thing");
}

This element as shown above is what is reffered to as an annonomous function
 */

//ES6 - Arrow function

const arrowFunction = () => {
    console.log("arrowfunction example");
}

arrowFunction();


//Structure of an Arrow Function

/*
    (Parameters) => {

    }

 */


//It should be noted if we are declaring a function we should be mapping it to a var


//Return Values example


const returnFunction = () => {
    const a = 'this is a message for my sanity';
    return a;
}

const result = returnFunction();

console.log(result);

//result types

/*
    return a <30; - TRUE

    Can also return a function from a function
 */


const impropperReturnFunction = () =>{
    let myNumber = 20;
    return myNumber;
    myNumber = myNumber + 1;
}

// keep in mind that the retun should always be at the end of any function - only use case when it might not
// When we are ammending or changing the value of a global count


const myNumber2 = 30;

let myFunction = () =>
{
    if (myNumber < 15){
        return 'returned the function early';
    }
    return 40;
}

//multiple returns can be placed in the function but it is important to remember that it should not
    //attempt multiple returns :)



//Objects and functions


function myFunction4 ()
{
    return 20;
}

myFunction4();

const aliasVar = myFunction();

aliasVar();


const myObject = {
    prop1: 20,
    prop2 : myFunction4
}

//we can access the function by gettign a property of the object


myObject.prop2();

//calling these




//JS Built in Functions



