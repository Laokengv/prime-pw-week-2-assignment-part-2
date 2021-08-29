// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable is called name and is set to 'Dane'
// The if statement states that if the variable is an exact match it will console log 'Hi, Mary!'
// The else statement states that if said variable is not an exact match it will console log 'How do you do?'
// The outcome would be console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// There are two variables called 'secret' and 'code'. The variable called 'code' has been set to 123
// The first if statement states that if the variable code is an exact match to 123 the outcome will be 'super'
// and the original value of the code will multiply by 2
// The variable called 'code' has changed and is now multiplied by 2
// The second if statement states that if the code is greater than 250 the outcome will be 'duper'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// There are three variables, two number variables and a boolean variable.
// The if statement states that if the student is an exact match to true and the zip code is greater than the number 8000
// we would console.log 'You're a student on the West Coast!
// The first else if statement states that if the student is an exact match to false OR the students age is less than 30
// we would console.log 'What are you hobbies?'
// the second else if statement states that if the student is an exact match to true we would console.log 'Welcome to Prime!'
// if the student is not an exact match to true we would console.log 'How about the weather?'
// The console log we will get is console.log 'Welcome to Prime!' as none of the else if statements are true
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and colorTwo are flip flopped - switch the variables
// it should be colorOne = 'blue'; colorTwo 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// FIX - the operator in between the temp and time are wrong. It is stating if
// temp > 39 OR time >= 4 when the description states if temp and time
// The correct code should be (temp > 39 && time >=4 )
// The && operator is the correct one to use because it states that both sides must be true
if (temp > 39 || time >= 4)
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX - in the description we checked if age is greater than or equal to minAge
// while the if code has them flip-flopped
// the corrrect code should be if ( age >= minAge ) {
}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
