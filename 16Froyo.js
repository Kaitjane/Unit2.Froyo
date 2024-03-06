//Prompted user to input froyo flavors
let userInput = prompt("Enter your froyo flavors, separated by commas");
const flavors = userInput.split(",");

//created a function to count the specific flavors
function count(flavors) {
  const flavorCount = {};

  flavors.forEach((flavor) => {
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
  });
  return flavorCount;
}
const flavorCount = count(flavors);

//will return results in a table in console
console.table(flavorCount);
