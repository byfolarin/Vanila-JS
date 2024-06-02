const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function ask(question) {
    return new Promise((resolve) => readline.question(question, (answer) => resolve(answer)));
  }
  
  async function main() {
    const num1 = parseFloat(await ask("Enter first number: "));
    const operator = await ask("Enter operator (+, -, *, /): ");
    const num2 = parseFloat(await ask("Enter second number: "));
  
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.error("Error: Cannot divide by zero");
        } else {
          result = num1 / num2;
        }
        break;
      default:
        console.error("Error: Invalid operator");
    }
  
    if (result !== undefined) {
      console.log("Result:", result);
    }
  
    readline.close();
  }
  
  main();
  