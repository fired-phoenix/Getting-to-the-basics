// Types of Operators in JS

//Arithmetic Operators


// Standard maths symbols carry over for JS

/*

Review Lesson

Declaring

const a = value;
let a = value;
var a = value;

//Stick away from var

Cannot re-assign something assign as const

____________________

Data Types
    - String (Single and Double Quotations)
    - Number
    - Boolean
    - Arrays [ comma, sepperated, figures]
    - Objects { property: value, property : value}


Everthing ending in semi-colon


Dot notation, and Bracket notation
obj.Property1

obj['Property1']

Arrays indexed from 0

Snake notation for naming, lowercase first word

thisIsMyFirstVar
 not Thisismyfirstvar or thisIsMyFirstVar

 Preffered by many styleguides





Opperators Basics
_____________________________

These allow comparisons between two or more values
Allow you to test the varying values of Opperators


Arithmatic Opperators

+ - * /
%  - Modulus ** - exponent ++ - Increment  -- - Decrement


Assignment Opperators

= - Equals

Not nessesary

+= Adds to var on the left
*= multiplies to var
/= divide to var
-= minus to var

A bit more clear to go x = x + 5


Comparison Operators - Cardinality

> - Greater to

< - Less than

<= Less than or equal to

>= Greater tha or equal to

=== - Equal Val & Types

== - Equal

!= - Not Equal


_____________________________


Cannot directly compare arrays and objects values with the operators above


ternary operator -
 in the assign can be used in place of an if statement

 const result = 20 === 20 ? 'values match' : 'values dont match';

 is the same as saying

 let result;

    if (20 === 20){
        result = 'Values Match';
    } else{
        result = 'Values do not match';
    }


Logical Operators

Three  Operators - && || !

&& - and

|| - or

! - Not [ needed at the beginning]


JavaScript Functions, conditionals & loops


Condtitionals

    Basic If statements

Format:

If (){

}
Else{

}

Switch statements (Case)


Worked Example

const colors = ['orange', 'green','yellow','purple','blue'];

const randomIndex = Math.floor(Math.random() * colors.length);
                                //Math.random returns 0 and 1


const randomColor = colors[randomIndex];

//conditionals

if (randomColor === 'orange'){
    console.log('the color is Orange');
} else if (randomColor === 'green'){
    console.log('the color is green');
} else if (randomColor === 'yellow'){
    console.log('the colour is yellow')
} else if (randomColor === 'purple'){
    console.log('the color is purple');
} else if (randomColor === 'blue'){
    console.log('the color is blue');
} else {
    console.log('no color found');
}

let colors = ['orange', 'green','yellow','purple','blue'];

let randomIndex = Math.floor(Math.random() * colors.length);
                                //Math.random returns 0 and 1


let randomColor = colors[randomIndex];

//conditionals

if (randomColor === 'orange'){
    console.log('the color is Orange');
} else if (randomColor === 'green'){
    console.log('the color is green');
} else if (randomColor === 'yellow'){
    console.log('the colour is yellow')
} else if (randomColor === 'purple'){
    console.log('the color is purple');
} else if (randomColor === 'blue'){
    console.log('the color is blue');
} else {
    console.log('no color found');
}


Repeatable

randomIndex = Math.floor(Math.random() * colors.length);
                                //Math.random returns 0 and 1


let randomColor = colors[randomIndex];

//conditionals

if (randomColor === 'orange'){
    console.log('the color is Orange');
} else if (randomColor === 'green'){
    console.log('the color is green');
} else if (randomColor === 'yellow'){
    console.log('the colour is yellow')
} else if (randomColor === 'purple'){
    console.log('the color is purple');
} else if (randomColor === 'blue'){
    console.log('the color is blue');
} else {
    console.log('no color found');
}


//Alternatively
switch (randomColor){
    case 'orange':
        console.log('the color is orange');
    break;

    case 'green':
        console.log('the color is green');
    break;

    case 'yellow':
        console.log('the color is yellow');
    break;

    case 'orange':
        console.log('the color is orange');
    break;

    case 'orange':
        console.log('the color is orange');
    break;

    defult:
        console.log('no color found');
}

 */