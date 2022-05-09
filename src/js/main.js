function firstFunction(callback) {
  console.log("This is the first function");
  setTimeout(callback, 1000)
}

function secondFunction() {
  console.log("This is the second function");
}

setTimeout(() => firstFunction(() => secondFunction()), 4000);

// end step
function firstFunction(callback, message) {
  console.log(message);
  setTimeout(callback, 1000)
}

function secondFunction(message) {
  console.log(message);
}

setTimeout(() => firstFunction(() => secondFunction("This is the second Function callback"), "I am the first Function Callback"), 4000);

