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

} // End of For Loop/**
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