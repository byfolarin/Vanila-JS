const fruits = ["apples", "bananas", "cherries"];

const num = [1,2,3];

for (const i of fruits) {
  console.log(i);
};

for (const x of num) {
  console.log(x);
};


function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('Alice', sayGoodbye);
