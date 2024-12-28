// Youtube Series


//Variables are like containersc


const yourfirstvar = "Learning to code gives you superpowers";

console.log(yourfirstvar);


//const  varName = Value;

//const yourFirstVar = "changing the name of the game";

//console.log(yourFirstVar);


const newVariable = "hello world";



//Ways to code in the names


const Variable1 = "";
//Constant Value and cannot be reassigned

let Variable2 = "";
//Can be re-assigned but not re-declared

var Variable3 = "";
//Allows the re-declaration which isn't good



//Constants - We will tend to label our constants with the convention of upper-case text
/*
* eg. const TAX_RATE
* */


const VAT_RATE = 0.15;

let itemPrice = 55;

let totalTransaction = itemPrice + (itemPrice * VAT_RATE);

console.log(totalTransaction);


//Notations

const yourFirstVariable =10; //Camel Case
const your_first_variable = 20; //Snake Case
const YOUR_FIRST_VARIABLE = 30; //Constant Case
const yourfirstvariable = 40;//Lower Case
const YourFirstVariable = 50;//Cascal Case

//variables cannot start with a number but can be at the end of in the text


//StyleGuides - Check out Google or other companies Style Guides

//Types of Variables
/*
    Number
    String
    Boolean
 */



//Functions

//Number - Converts to number


const stringValue = "hello world";

const anotherStringValue = 'hello world';


//Numbers

const myFirstNumber = 20;

const mySecondNumber = 20.5;


//Arrays
const myFirstArray = [10,20,30,40,50];

myFirstArray[1] = 25

//Arrays can contain other arrays, but we won't be working with things like this for the moment

//Objects

//Denoted by Curly Brackets


const myFirstObject = {prop1: 20, prop2: 20, prop3: 30};

//Dot notation for retrieval is preferred as it is a bit easier to read, but you can also use ['property name']

//Functions

const functionContainerVariable = function() { return 20;}

functionContainerVariable();




