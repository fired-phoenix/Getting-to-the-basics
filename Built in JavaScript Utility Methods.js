 // The built-in Java Objects & Functions


 // Javascript things that we are looking into the stuff of JS

 //How we read documentation
 /*
 Under the bracket of a library or series of available resources, we are looking for the references,
 api references etc. as these will include the information we need to get started

 Documentation:
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/

  */


 //Call Back Functions

//example of a callback function

 function myCallBack(someNumber)
 {
     return someNumber * 2;
 }

 function mainFunction(randomNumber, shouldCall, callback)
 {
     let result = randomNumber;

     if (shouldCall) {
         result = callback(result);
     }
     return result;
 }

 mainFunction(20,true,myCallBack);

 /*
 Riley Learned things,

 so a callback - in essance is the passing of a function as a parameter, through which
 the parent function will call and instantiate an instance of the function with the required parameters
 at a local level - Like we have the core idea of a language, which in our house is called something
 slightly different but is used to communicate the same thing, and is used in the same way.

 This allows us to use a parent function for a repetitive purpose within another locally created module - it
 is still dependent on that function being created and existing outside the module to function (Machine will
 always need its head)


 Using them enable reusability & Asynchronous programming

 Re-usability
  */


 const myArray = [2,4,6,8,10];

 function myCustomMapOperationCallback(itemFromArray)
 {
     return itemFromArray * 2;
 }

 const newArray = myArray.map(myCustomMapOperationCallback);

 console.log(newArray);


//callback used to make the same change - so this can be re-used for other positions (maintainability)


 const strArray = ['hello','world','This','is','it'];

strArray.map(itemFromArray => itemFromArry[0]);


 const strArray2 = ['hello', 'world', 'This', 'is', 'it'];

 const result = strArray2.map(itemFromArray => itemFromArray[0]);

 console.log(result);  // Output: ['h', 'w', 'T', 'i', 'i']


 //Asynchronous Programming
 //Code that does not run immediately


 //Javascript Primitives

 /*
  Primitives vs Objects in Java Script

  primitives - string, big int, boolean, number, undefined, symbol
    the simplest form of something - like the elements of the periodic tables

    no inheritance functions
  */

 const string1 = new String('Hello World!');
 const string2 = 'Hello World!';
 console.log(string1 ===string2);
 console.log(string1 == string2);


 //string1 is an object and string2 is a string primitive

 //String2 is not an object but has the same value


//should not be using string constructors please :) - JS does it for us


 //Keyword - new ( an operator)

 const myDate = new Date();
    //Date is the template - we are creating a new instance of the date - blank object and a blank instance of
      //  that object


 //Javascript Dates

 // not all about how dates work - more about working across time zones etc.

 const now = new Date();

 console.log(now);

 // the above is the number of millisecond that have elapsed since midnight on January 1, 1970, UTC

 //example #1
 //Inputs as arguments
 //Date (year, month, day, hour, minute, second, millisecond)
 // Note: the month is 0-indexed (We have no clue why)

 new Date(2020,11,2,7,10);

 //Example 2
 //Inputs as various strings
 //This works with pretty much anything we can think of

 new Date('Jan 20 2020');
 new Date('January 20 2020');
 new Date('Jan-20-2020');
 new Date('Jan 20 2020 01:20:10');

 //Example 3
 //Inputs as milliseconds (Number)
 new Date(102031203);

 //Example 4
 //Inputs as ISO 8601

 new Date('2020-01-20T00:00Z');

 //Example 5
 //Inputs with Timezones

 new Date ('Jan 20 2020 02:20:10 -02:00'); //Special Case
 new Date ('Jan 20 2020 02:20:10 -10:00'); //Special Case
 new Date ('Jan 20 2020 02:20:10 (PST)'); //Special Case

 //Example 6
 //The current moment - Specified in the users local timezone
 new Date(Date.now());



 //Using Built in Methods and Functions to work with JS Dates

 const myDate2 = new Date();

 myDate2.toString();

 myDate2.toISOString();



 //ISO Standard YYYY- MM-DDTHH:MM:SS.SSSZ
  // Where the Z at the end is the time zone

 //get month & Get Year



 //Regular Expressions
        //A way to pattern map within strings


 const emailValidatorRegx = new RegExp('^.+@.+\..+$');

 const userInput = 'invalidemail@gm';

 const isValid = emailValidatorRegx.test(userInput);

 console.log(isValid);

 //Identifiers , Quantifiers

 //what we are trying to pattern match


 const regex = new RegExp('g');

 const string5 = 'my favourite food is steak';
 const string6 = 'my favourite thing to cook is steak';

regx.test(string5);
regx.test(string6);


//can match full words, phrases or characters  - but is case-sensitive

 /faviourite/.test(string6)

 /A-Za-z0-9@/.test(string6);

 //Officially leaving Regular Expressions for a bit


 //Javascript String Methods

 //built in objects - String

 //replaceAll, toUpperCase, Substring,trim, match

  // Syntax

    /*
     //Replace All Syntax

      const newStr = str.replaceAll(regexp | substr, newSubstr | function);

     */
