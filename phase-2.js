const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let newArr = [];
  let x = increment;
  for (let i = 0; i < 10; i++) {
    newArr.push(addNums(x));
    x += increment;
  }
return newArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let newArr = [];
  let x = increment;
  for (let i = 0; i < 10; i++) {
    newArr.push(addManyNums(x));
    x += increment;
  }
return newArr;

}

module.exports = [addNums10, addManyNums10];
