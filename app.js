// Practise Exercise 3.1
var arr=['Milk', 'Bread' , 'Apple']
console.log(arr.length)
arr.splice(1,1, 'Banana')
document.write(arr)
console.log(arr)
// Practise Exercise 3.2
var arr=[]
var arr =['Milk', 'Bread' , 'Apples']
arr.splice(1,1, 'Banana' , 'Eggs')
arr.pop()
arr.sort()
arr.splice(1,0,'Carrot' , 'Lettuce')
document.write(arr)
var arr2=['Juice','pop']
console.log(arr2[1])
console.log(arr + arr2 + arr2)
// Practise 3.3
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [1, 2, 3];
console.log(arr1[1])
// // Practise 3.4
myCar = {
    "make": "Toyota",
    "model": "Camry",
    "year": 2023,
    "color": "Blue",
    "is_new": True,
    "mileage": 1500,
property_name = "color"
myCar[property_name] : "Blue"}
property_name = "forSale"
myCar[property_name] = True  
console.log(dog['make' , 'model'])

// // Practise Exercise 3.5
const people = {
    friends: []
}
const friend1 = {
    firstName: "John",
    lastName: "Smith",
    id: 123
}

const friend2 = {
    firstName: "Alice",
    lastName: "Johnson",
    id: 456
};

const friend3 = {
    firstName: "Michael",
    lastName: "Brown",
    id: 789
};

console.log(friend1);
console.log(friend2);
console.log(friend3);

friendarry=['Atrooba', 'Hani' , 'Haya']
console.log(friendarry)
// Chapter Project

// Manipulating an array

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

// Remove the first item and the last item
theList.shift();
theList.pop();

// Add "FIRST" to the start of the array
theList.unshift("FIRST");

// Assign "MIDDLE" to the third index value
theList[2] = "MIDDLE";

// Assign "hello World" to the fourth item value
theList[3] = "hello World";

// Add "LAST" to the last position in the array
theList.push("LAST");

// Output the transformed array to the console
console.log(theList);

["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

// Company product catalog
// Create an array to hold the inventory of store items
const inventory = [];

// Create three items with properties: name, model, cost, and quantity
const item1 = { name: 'Laptop', model: 'XYZ-123', cost: 800, quantity: 10 };
const item2 = { name: 'Smartphone', model: 'ABC-456', cost: 500, quantity: 20 };
const item3 = { name: 'Tablet', model: 'PQR-789', cost: 300, quantity: 15 };

// Add the items to the inventory array
inventory.push(item1, item2, item3);

// Log the inventory array to the console
console.log('Inventory Array:');
console.log(inventory);

// Access the quantity element of the third item and log it to the console
const thirdItemQuantity = inventory[2].quantity;
console.log('Quantity of the third item:', thirdItemQuantity);

// Add and access more elements within the data structure
const newItem = { name: 'Keyboard', model: 'KLM-456', cost: 50, quantity: 30 };
inventory.push(newItem);

console.log('Updated Inventory Array:');
console.log(inventory);

const secondItemModel = inventory[1].model;
console.log('Model of the second item:', secondItemModel);


















































