// 25 beginner coding lessons

function multiply(a, b){
    return a * b;
}


//added in return

//Alternative  multiply = (a, b) => a * b;

//Challenge 2

function getPlanetName(id){
    let name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }

    return name;
}


//We were missing our break statements


//Completing the code to reverse the string put into it

/*function solution(str){
str = str.reverse();
} // the above did not work - Reverse is used for the arrays, so we need to convert it, reverse and revert
*/

function solution(str){
    return str.split("").reverse().join("");
}



//Return  "even or odd"

function evenOrOdd(number) {
    let result = number % 2;

    if (result === 0){
        return "Even";
    } else
    {
        return "Odd";
    }

}

// Alternative

function evenOrOddAlt(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}


function countSheeps(sheep) {
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === 'true')
        {
            count++;
        }
    }
    return count;
}

/*
function getCount(str) {
    let vowlCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] IN['a','e','i','o','u'])
        {
            vowlCount++;
        }
    }
    return vowlCount;
}
*/

function getCount(str) {
    let vowlCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) { // Convert to lowercase for case-insensitivity
            vowlCount++;
        }
    }
    return vowlCount;
}

/*
function makeNegative(num) {

    switch (num) {
        case num > 0 :
            num = num * -1;
            break;

    }
    return num;
}


NOTES AND LESSONS - Switch statements compare === values so num > 0 is not a valid case
 */


function makeNegative(num) {
    if (num > 0) {
        num = num * -1; // Make the number negative if it's positive
    }
    return num;
}


/*
Alternative using the functions I thought of before :)

function makeNegative(num) {
  return -Math.abs(num);
}

 */



//finding the smallest value in an array

function findSmallestInt(arr) {
    let minvalue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minvalue) {
            minvalue = arr[i];
        }
    }
    return minvalue;
}

/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0. Your function only
 needs to return the result, what is shown between parentheses in the example
  below is how you reach that result and it's not part of it, see the sample tests.
 */

var summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

/*
It's the academic year's end, fateful moment of your school report.
The averages must be calculated. All the students come to you and entreat you
to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
 */

function getAverage(marks){
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    average = Math.floor(average);
    return average;
}




//Rock Paper Scissors

const rps = (p1, p2) => {
    if (p1 === p2) {
        return 'Draw!';
    }

    // Player 1 wins in these cases
    if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock") ||
        (p1 === "scissors" && p2 === "paper")
    ) {
        return 'Player 1 won!';
    }

    // Otherwise, Player 2 wins
    return 'Player 2 won!';
};

//smart people solution to the same problem
const rpsv2 = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    }
    else {
        return "Player 2 won!";
    }
};


/*
It's pretty straightforward. Your goal is to create a function that
removes the first and last characters of a string. You're given one parameter,
 the original string. You don't have to worry about strings with less than two characters.
 */

function removeChar(str) {
    return str.slice(1, -1);
}


/*
    Task
You get an array of numbers, return the sum of all the positives ones.

Example
[1, -4, 7, 12] =>
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.

 */

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0)
        {
          sum += arr[i];
        }
    }
    return sum;
}


/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
 */

function basicOp(operation, value1, value2){
    let result = 0;
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;

            case "-":
                result = value1 - value2;
                break;

                case "*":
                    result = value1 * value2;
                    break;

        case "/":
            result = value1 / value2;
            break;

    }
    return result;
}


/*
Nice alternative with some built in redundancy and stupid proofing

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}
 */


/*

Write a function that accepts an integer n and a string s as parameters,
and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output = output + s;
    }
    return output;
}

/*

function repeatStr (n, s) {
  return s.repeat(n);
}

Alternative using a built in JS string function
 */

/*
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/


function stringToArray(string){
    return string.split(' ');
}


/*
Write a function that removes the spaces from the string, then return the resultant string.

Examples (Input -> Output):

"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"

 */

function noSpace(x) {
    return x.replaceAll(' ', '');
}

//alternative

function noSpacesv2(x)
{
    const arr = x.split(' ');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const trimmedString = arr[i].trim();
        newArr.push(trimmedString);
    }

    const finalstring = newArr.join('');

    return finalstring;

}

/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

 */

//Some theory from the video - there is a function called arr.push which allows you to add new items
function maps(x){

    let arrOutput = [];

    for (let i = 0; i < x.length; i++) {
        arrOutput.push(x[i]*2);
    }

    return arrOutput;
}

//alternative method

function maps(x)
{
    return x.map((arrItem) = > {
        return arrItem * 2;
    })

    return;
}


/*
A hero is on his way to the castle to complete his mission.
 However, he's been told that the castle is surrounded with a
 couple of powerful dragons! each dragon takes 2 bullets to be defeated,
 our hero has no idea how many bullets he should carry.. Assuming he's gonna
 grab a specific given number of bullets and move forward to fight another specific
  given number of dragons, will he survive?

Return true if yes, false otherwise :)
 */

function hero(bullets, dragons){

    const requiredBullets = dragons * 2;

    if (bullets >= requiredBullets)
    {
        return true;
    }
    else
    {
        return false;
    }
}


/*

I'm new to coding and now I want to get the sum of two arrays...+
 Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
 */

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i];
    }

    for (let j = 0; j < arr2.length; j++) {
        sum2 += arr2[j];
    }

    return sum1 + sum2;
}


/*

The first century spans from the year 1 up to and including the year 100,
the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

 */

function century(year) {
    if (year % 100 === 0) {
        return year / 100;
    } else {
        return Math.floor(year / 100) + 1;
    }
}

/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

 */


function points(games) {
    let wins = 0;
    let draws = 0;

    for (let i = 0; i < games.length; i++) {
        let gameResult = games[i].split(":");
        let [score1, score2] = gameResult.map(Number); // Convert the scores to numbers

        if (score1 > score2) {
            wins++;
        } else if (score1 === score2) {
            draws++;
        }
    }

    return (wins * 3) + (draws * 1);
}
