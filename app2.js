// Practise 4.1
// Step 1: Create a variable with a Boolean value
var myBoolean = true;

// Step 2: Output the value of the variable to the console
console.log("The value of myBoolean is: " + myBoolean);

// Step 3: Check whether the variable is true and output a message if it is
if (myBoolean) {
  console.log("The variable is true!");
}
// Example variable
let isTrue = false; // You can change this to true to see how the result changes

// Check if the variable is true
if (isTrue) {
    console.log("The condition is true.");
}

// Check if the variable is not true using the "!" operator
if (!isTrue) {
    console.log("The condition is NOT true.");
}






// practise 4.2
// Ask the user for their age and store the input in a variable
var userAge = prompt("Please enter your age:");

// Display the user's age in the console
console.log("You entered the age: " + userAge);

// You can use the userAge variable for further processing
// Example variable
let isTrue = false; // You can change this to true to see how the result changes

// Declare a message variable
let message;

// Check if the variable is true
if (isTrue) {
    message = "The condition is true.";
}

// Check if the variable is not true using the "!" operator
if (!isTrue) {
    message = "The condition is NOT true.";
}

// Display the message in the console
console.log(message);
// Assuming you have an input age
let age = 22; // You can change this value as needed

let message;

if (age >= 21) {
    message = "Confirm entry to the venue and the ability to purchase alcohol";
} else if (age >= 19) {
    message = "Confirm entry to the venue but deny the purchase of alcohol";
} else {
    message = "Deny entry";
}

console.log(message);
// Practise 4.3
// Step 1: Create a Boolean value for an ID variable
const isIDValid = true; // You can change this to false for an invalid ID

// Step 2: Using a ternary operator, create a message variable to check the ID's validity
const message = isIDValid ? "You are allowed into the venue." : "Sorry, you are not allowed into the venue.";

// Step 3: Output the response to the console
console.log(message);
// Practise 4.4
// Step 1: Generate a random number from 0 to 5
const randomNumber = Math.floor(Math.random() * 6); // Generates a random number between 0 and 5

// Step 2: Get user input using a prompt
const userQuestion = prompt("Ask a question:");

// Step 3: Use a switch statement to create 6 different responses
let response;
switch (randomNumber) {
  case 0:
    response = "It is certain.";
    break;
  case 1:
    response = "Reply hazy, try again.";
    break;
  case 2:
    response = "Don't count on it.";
    break;
  case 3:
    response = "Outlook not so good.";
    break;
  case 4:
    response = "Signs point to yes.";
    break;
  case 5:
    response = "My sources say no.";
    break;
  default:
    response = "I cannot predict now.";
}

// Step 4: Create a variable to hold the final response
const finalResponse = `You asked: "${userQuestion}"\nMagic 8-Ball says: "${response}"`;

// Step 5: Output the user's question and the response to the console
console.log(finalResponse);
// Practise 4.5
// Step 1: Create a variable called prize and ask the user to set the value
const prize = prompt("Select a number between 0 and 10 to win a prize:");

// Step 2: Convert the prompt response to a number data type
const selectedNumber = parseInt(prize);

// Step 3: Create a variable for the output message
const outputMessage = "My Selection: ";

// Step 4: Using a switch statement to determine the prize
let prizeMessage = "";

switch (selectedNumber) {
  case 0:
    prizeMessage = "Congratulations! You've won a free trip to Hawaii!";
    break;
  case 1:
    prizeMessage = "You've won a $100 gift card!";
    break;
  case 2:
    prizeMessage = "You've won a new smartphone!";
    break;
  case 3:
    prizeMessage = "Enjoy a weekend getaway in a luxury cabin!";
    break;
  case 4:
  case 5:
  case 6:
    prizeMessage = "You've won a collection of exciting books!";
    break;
  case 7:
  case 8:
  case 9:
    prizeMessage = "You've won a mystery prize! Check your email for details.";
    break;
  case 10:
    prizeMessage = "Better luck next time! No prize this time.";
    break;
  default:
    prizeMessage = "Invalid selection. Please choose a number between 0 and 10.";
}

// Step 6: Output the message by concatenating the prize variable and the output message
const finalMessage = outputMessage + prizeMessage;
alert(finalMessage);
// Chapter Project
// Friend checker game
// Prompt the user to enter a name
var name = prompt("Please enter a name:");

// Initialize a variable to store the result message
var result;

// Use a switch statement to check the entered name
switch (name) {
  case "Alice":
  case "Bob":
  case "Charlie":
    result = "You are a friend!";
    break;
  default:
    result = "I don't know this person.";
    break;
}

// Output the result to the console
console.log(result);

// Rock Paper Scissors game

// Step 1: Create an array with the game options
const options = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random selections for the player and computer
const playerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2
const computerSelection = Math.floor(Math.random() * 3); // 0, 1, or 2

// Step 3: Create a variable for the response message
let resultMessage = "";

// Step 4: Check for a tie
if (playerSelection === computerSelection) {
    resultMessage = "It's a tie!";
} else {
    // Step 5: Apply game logic and determine the winner
    if (
        (playerSelection === 0 && computerSelection === 2) || // Rock beats Scissors
        (playerSelection === 1 && computerSelection === 0) || // Paper beats Rock
        (playerSelection === 2 && computerSelection === 1)    // Scissors beat Paper
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "Computer wins!";
    }
}

// Step 6: Display the player and computer selections and the result
console.log(`Player chose ${options[playerSelection]}`);
console.log(`Computer chose ${options[computerSelection]}`);
console.log(resultMessage);





















































