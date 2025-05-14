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
    //let currentNum = "";
    let currentOperator = "";

    const display = document.querySelector(".display");
    const buttonNums = document.querySelectorAll(".button-num");
    const buttonOperators = document.querySelectorAll(".button-operator");
    const buttonFunctions = document.querySelectorAll(".button-top");

    buttonNums.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "zero":
                    display.textContent += "0";
                    break;
                case "one":
                    display.textContent += "1";
                    break;
                case "two":
                    display.textContent += "2";
                    break;
                case "three":
                    display.textContent += "3";
                    break;
                case "four":
                    display.textContent += "4";
                    break;
                case "five":
                    display.textContent += "5";
                    break;
                case "six":
                    display.textContent += "6";
                    break;
                case "seven":
                    display.textContent += "7";
                    break;
                case "eight":
                    display.textContent += "8";
                    break;
                case "nine":
                    display.textContent += "9";
                    break;
                case "zero":
                    display.textContent += "0";
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

    buttonOperators.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "+":
                    currentOperator = "+";
                    break;
                case "-":
                    currentOperator = "-";
                    break;
                case "x":
                    currentOperator = "*";
                    break;
                case "/":
                    currentOperator = "/";
                    break;
            };
        });
    });

    buttonFunctions.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "clear":
                    display.textContent = "";
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
            };
        });
    });
};


main();