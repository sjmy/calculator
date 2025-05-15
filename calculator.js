// Operator functions
function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function percentage(num) {
    return num / 100;
}


// Operation delegation
function operate(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
    };
};

function main() {
    const display = document.querySelector(".display");
    const buttonNums = document.querySelectorAll(".button-num");
    const buttonOperators = document.querySelectorAll(".button-operator");
    const buttonFunctions = document.querySelectorAll(".button-top");

    let currentOperator = "";
    let lastOperator = "";
    let currentResult = "";
    let numOne = "";
    let numTwo = "";

    // Number button listener
    buttonNums.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "zero":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "0";
                        display.textContent = numOne;
                    } else {
                        numTwo += "0";
                        display.textContent = numTwo;
                    };
                    break;
                case "one":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "1";
                        display.textContent = numOne;
                    } else {
                        numTwo += "1";
                        display.textContent = numTwo;
                    };
                    break;
                case "two":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "2";
                        display.textContent = numOne;
                    } else {
                        numTwo += "2";
                        display.textContent = numTwo;
                    };
                    break;
                case "three":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "3";
                        display.textContent = numOne;
                    } else {
                        numTwo += "3";
                        display.textContent = numTwo;
                    };
                    break;
                case "four":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "4";
                        display.textContent = numOne;
                    } else {
                        numTwo += "4";
                        display.textContent = numTwo;
                    };
                    break;
                case "five":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "5";
                        display.textContent = numOne;
                    } else {
                        numTwo += "5";
                        display.textContent = numTwo;
                    };
                    break;
                case "six":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "6";
                        display.textContent = numOne;
                    } else {
                        numTwo += "6";
                        display.textContent = numTwo;
                    };
                    break;
                case "seven":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "7";
                        display.textContent = numOne;
                    } else {
                        numTwo += "7";
                        display.textContent = numTwo;
                    };
                    break;
                case "eight":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "8";
                        display.textContent = numOne;
                    } else {
                        numTwo += "8";
                        display.textContent = numTwo;
                    };
                    break;
                case "nine":
                    if (numOne == "" || currentOperator == "") {
                        numOne += "9";
                        display.textContent = numOne;
                    } else {
                        numTwo += "9";
                        display.textContent = numTwo;
                    };
                    break;
                case "dot":
                    if (display.textContent.includes(".")) {
                        break;
                    } else {
                        display.textContent += ".";
                        break;
                    };
                    
            };
        });
    });

    // Operator button listener
    buttonOperators.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "plus":
                    if (lastOperator != "") {
                        numTwo = parseInt(numTwo);
                        currentResult = operate(lastOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                        lastOperator = "+";
                        break;
                    };

                    if (currentOperator == "") {
                        currentOperator = "+";
                        numOne = parseInt(numOne);
                    } else {
                        currentOperator = "+";
                        numTwo = parseInt(numTwo);
                        currentResult = operate(currentOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                    };

                    lastOperator = "+";
                    break;

                case "minus":
                    if (lastOperator != "") {
                        numTwo = parseInt(numTwo);
                        currentResult = operate(lastOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                        lastOperator = "-";
                        break;
                    };

                    if (currentOperator == "") {
                        currentOperator = "-";
                        numOne = parseInt(numOne);
                    } else {
                        currentOperator = "-";
                        numTwo = parseInt(numTwo);
                        currentResult = operate(currentOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                    };

                    lastOperator = "-";
                    break;
                    
                case "multiply":
                    if (lastOperator != "") {
                        numTwo = parseInt(numTwo);
                        currentResult = operate(lastOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                        lastOperator = "*";
                        break;
                    };

                    if (currentOperator == "") {
                        currentOperator = "*";
                        numOne = parseInt(numOne);
                    } else {
                        currentOperator = "*";
                        numTwo = parseInt(numTwo);
                        currentResult = operate(currentOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                    };

                    lastOperator = "*";
                    break;

                case "divide":
                    if (lastOperator != "") {
                        numTwo = parseInt(numTwo);
                        currentResult = operate(lastOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                        lastOperator = "/";
                        break;
                    };

                    if (currentOperator == "") {
                        currentOperator = "/";
                        numOne = parseInt(numOne);
                    } else {
                        currentOperator = "/";
                        numTwo = parseInt(numTwo);
                        currentResult = operate(currentOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                    };

                    lastOperator = "/";
                    break;

                case "equals":
                    if (numOne == "" || lastOperator == "=") {
                        break;
                    } else {
                        numTwo = parseInt(numTwo);
                        currentResult = operate(currentOperator, numOne, numTwo);
                        display.textContent = currentResult;
                        numOne = currentResult;
                        numTwo = "";
                        currentOperator = "";
                        lastOperator = "=";
                    };
                    break;
            };
        });
    });

    // Function button listener
    buttonFunctions.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "clear":
                    display.textContent = "";
                    currentOperator = "";
                    lastOperator = "";
                    numOne = "";
                    numTwo = "";
                    break;
                case "plusminus":
                    if (display.textContent[0] == "-") {
                        let removeMinus = display.textContent.slice(1);
                        display.textContent = removeMinus;
                        break;
                    } else {
                        display.textContent = "-" + display.textContent;
                        break;
                    };
                case "percent":
                    currentOperator = "%";
                    display.textContent = percentage(parseInt(display.textContent));
                    break;
            };
        });
    });
};


main();