//create prompt
const userInput = prompt("Enter Froyo flavors separated by commas:");

console.log(userInput);
//userInput --> vanilla,vanilla,vanilla,strawberry,coffee,coffee

//spilt userInput using ,
const order = userInput.split(",");

//create function
function orderQty(computer) {
  //create empty obj
  const purple = "hello world!!";
  console.log(purple, computer);
  const obj = {};
  //loop over array
  //add the flavor as a key, with a value of 1 if the key doesn't exist otherwise add 1 to the current value
  //ways to add 1 to current value obj[key] = obj[key]++ || obj[key]+=1

  // console.table(obj);
  //return obj created above
  return -1;
}

console.log(orderQty(order));
console.log(orderQty([1, 2, 3]));
