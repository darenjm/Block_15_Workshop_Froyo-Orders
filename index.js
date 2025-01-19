//create prompt
const userInput = prompt("Enter Froyo flavors separated by commas:");

//spilt userInput using ,
const order = userInput.split(",");

console.log(order);

//create function
function orderQty(order) {
  //create empty obj
  const obj = {};
  //loop over array
  for (let i = 0; i < order.length; i++) {
    const flavor = order[i];
    if (obj[flavor]) {
      obj[flavor]++;
    } else {
      obj[flavor] = 1;
    }
  }

  //add the flavor as a key, with a value of 1 if the key doesn't exist otherwise add 1 to the current value
  return obj;
  //ways to add 1 to current value obj[key] = obj[key]++ || obj[key]+=1
  // incrementOrderQty(order);
  // console.table(obj);
  //return obj created above
  // return -1;
}

// console.log(orderQty(order));

console.table(orderQty(order));
