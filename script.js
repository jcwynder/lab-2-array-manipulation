// Task 1: Array Manipulation Basics

// Create an empty array

let shoppingList = [];

// Function called addItem that takes an item as a parameter and adds it to the shoppingList array

function addItem(item) {
  shoppingList.push(item);
  return console.log(
    `New array with added item: ` + JSON.stringify(shoppingList)
  );
}

// Function called removeLastItem that removes the last item from the shoppingList array

function removeLastItem(shoppingList) {
  if (shoppingList.length > 0) {
    shoppingList.pop();
  }
  return console.log(
    `New array with last item removed: ` + JSON.stringify(shoppingList)
  );
}

// Function called displayList that logs all items in the shoppingList array to the console

function displayList(shoppingList) {
  shoppingList.forEach((item) => {
    console.log(item);
  });
}

// Example usage:

console.log(`Empty array of shoppingList: ` + JSON.stringify(shoppingList));

shoppingList = ["apple", "banana", "orange", "grapefruit", "pineapple"];

console.log();

addItem("grape");

console.log();

removeLastItem(shoppingList);

console.log();

console.log("Log of items in shoppingList:");
displayList(shoppingList);

console.log();

// Task 2: Filter and Search an Array

// Modify the addItem function to only add the item if it is not already in the shoppingList array

function modifiedAddItem(item) {
  if (!shoppingList.includes(item)) {
    shoppingList.push(item);
    return console.log(
      `New array with added item: ` + JSON.stringify(shoppingList)
    );
  } else {
    return console.log("Item was not added; item already in array");
  }
}

// Function called filterItems that takes a search term as a parameter and returns all items in the shoppingList that contain that search term (case-insensitive)

function filterItems(searchTerm) {
  const results = shoppingList.filter((item) => item.includes(searchTerm));
  return console.log(
    `Array with searchTerm items filtered: ` + JSON.stringify(results)
  );
}

// Example usage:

modifiedAddItem("orange");

console.log();

modifiedAddItem("blueberry");

console.log();

filterItems("apple");

// Task 3: Render the List in the Browser

// Function to add an item to the list through the input field
function ADD_ITEM() {
  // Element selected from the DOM
  let input = document.getElementById("itemInput");

  // Value obtained from input field
  let itemText = input.value.trim();

  // Check if input field is empty
  if (itemText !== "") {
    // Create a new list item
    let ul = document.getElementById("itemList");
    let li = document.createElement("li");

    // Append the new list item to the dynamic list
    li.appendChild(document.createTextNode(itemText));
    ul.appendChild(li);

    // Clear the input field after adding the item
    input.value = "";
  } else {
    // Alerts user to enter an item if field is left blank upon click of button
    alert("Please enter an item");
  }
}

// Function to remove the last item from dynamic list
function REMOVE_ITEM() {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  } else {
    // Alerts user that there are no more items to remove from dynamic list
    alert("There are no more items to remove");
  }
}
