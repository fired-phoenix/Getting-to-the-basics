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