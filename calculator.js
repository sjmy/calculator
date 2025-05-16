// Calculator
//
// Basic calculator created using Javascript, HTML, and CSS.
// Addition, subtraction, division, multiplication, percentage. Decimal and negative number support.
//
// User entries are placed in an ongoing string variable (currentInput) and sanitized after every input.


// Operator functions. If return value has decimals, slices to max display length.
function add(x, y) {
    if (x + y === Math.floor(x + y) || (x + y).toString().length <= 11) {
        return x + y;
    } else {
        return parseFloat((x + y).toString().slice(0, 11));
    };
};

function subtract(x, y) {
    if (x - y === Math.floor(x - y) || (x - y).toString().length <= 11) {
        return x - y;
    } else {
        return parseFloat((x - y).toString().slice(0, 11));
    };
};

function multiply(x, y) {
    if (x * y === Math.floor(x * y) || (x * y).toString().length <= 11) {
        return x * y;
    } else {
        return parseFloat((x * y).toString().slice(0, 11));
    };
};

function divide(x, y) {
    if (x / y === Math.floor(x / y) || (x / y).toString().length <= 11) {
        return x / y;
    } else {
        return parseFloat((x / y).toString().slice(0, 11));
    };
};

function percentage(num) {
    if (num / 100 === Math.floor(num / 100) || (num / 100).toString().length <= 11) {
        return num / 100;
    } else {
        return parseFloat((num / 100).toString().slice(0, 11));
    };
}

// Operation delegation
function operate(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return add(parseFloat(numOne), parseFloat(numTwo));
        case "-":
            return subtract(parseFloat(numOne), parseFloat(numTwo));
        case "*":
            return multiply(parseFloat(numOne), parseFloat(numTwo));
        case "/":
            if (parseFloat(numTwo) == 0) {
                let divideByZero = "No thank you";
                return divideByZero;
            } else {
                return divide(parseFloat(numOne), parseFloat(numTwo));
            };
    };
};

// Checks the end of the display to see if an operator has been entered
function operatorEntered(input) {
    if (input[input.length - 1] == "+" ||
        input[input.length - 1] == "-" ||
        input[input.length - 1] == "*" ||
        input[input.length - 1] == "/") {
        return true;
    };
    
    return false;
};

// Checks if there is text displayed (ie did the user just try to divide by 0?)
function isText(input) {
    if (input == "No thank you") {
        return true;
    };

    return false;
};

// Contains event listeners, currentInput variable, all variables required for operations.
function main() {
    const operators = "+-*/";
    const display = document.querySelector(".display");
    const buttonNums = document.querySelectorAll(".button-num");
    const buttonOperators = document.querySelectorAll(".button-operator");
    const buttonFunctions = document.querySelectorAll(".button-top");

    let currentInput = "";
    let currentOperator = "";
    let numOne = "";
    let numTwo = "";

    // Event Functions
    //
    // Numbers. Receives event, sanitizes input, updates variables
    function buttonNumsEvent(num) {
        if (isText(currentInput)) {
            currentInput = "";
        };

        if (operatorEntered(currentInput)) {
            currentOperator = currentInput.slice(-1);
            currentInput = currentInput.substring(0, currentInput.length - 1);
            numOne = currentInput;
            currentInput = "";
        };
        
        if (currentInput.length <= 10) {
            currentInput += `${num}`;
        };
    };

    // Dot gets its own function as the logic is a bit different
    function buttonDotEvent(dot) {
        if (isText(currentInput)) {
            currentInput = "";
        };

        if (operatorEntered(currentInput)) {
            let dotCheck = currentInput.slice(-1);

            if (dotCheck != `${dot}`) {
                currentOperator = currentInput.slice(-1);
                currentInput = currentInput.substring(0, currentInput.length - 1);
                numOne = currentInput;
                currentInput = `0${dot}`;
            };
            return;
        };

        if (currentInput.toString().includes(`${dot}`)) {
            return;
        } else {
            if (currentInput == "") {
                currentInput += `0${dot}`;
            } else {
                currentInput += `${dot}`; 
            };
            
        };
    };

    // Operators
    function buttonOperatorsEvent(operator) {
        if (currentInput == "") {
            return;
        };

        if (operatorEntered(currentInput)) {
            currentInput = currentInput.substring(0, currentInput.length - 1);
        };

        if (currentOperator != "") {
            numTwo = currentInput;
            currentInput = operate(currentOperator, numOne, numTwo);
        };

        currentInput += `${operator}`;
    };

    // Equals, return, and enter
    function buttonEqualsEvent() {
        if (currentInput == "") {
            return;
        };

        if (operatorEntered(currentInput)) {
            currentInput = currentInput.substring(0, currentInput.length - 1);
        };

        if (currentOperator != "") {
            numTwo = currentInput;
            let response = operate(currentOperator, numOne, numTwo);

            if (response == "No thank you") {
                currentInput = response;
            } else {
                currentInput = parseFloat(response);
            };
        };

        numOne = currentInput;
        numTwo = "";
        currentOperator = "";
    };

    // Clear
    function buttonClearEvent() {
        currentInput = "";
        currentOperator = "";
        numOne = "";
        numTwo = "";
        display.textContent = currentInput;
    };

    // Plus/minus
    function buttonPlusMinusEvent(minus) {
        if (currentInput[0] == `${minus}`) {
            currentInput = currentInput.substring(1, currentInput.length);
        } else {
            currentInput = `${minus}` + currentInput;
        };
    };

    // Percent
    function buttonPercentEvent(percent) {
        if (currentInput == "") {
            return;
        };

        if (operatorEntered(currentInput)) {
            currentInput = currentInput.substring(0, currentInput.length - 1);
        };

        currentInput = percentage(currentInput);
    };

    // Event Listeners
    //
    // Keydown listener
    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                buttonNumsEvent(e.key);
                break;

            case ".":
                buttonDotEvent(e.key);
                break;

            case "+":
            case "-":
            case "*":
            case "/":
                buttonOperatorsEvent(e.key);
                break;

            case "=":
            case "Enter":
                buttonEqualsEvent();
                break;

            case "A":
            case "a":
            case "C":
            case "c":
                buttonClearEvent();
                break;

            case "%":
                buttonPercentEvent(e.key);
                break;
        };
        display.textContent = currentInput;
    });

    // Click listener for number and dot buttons
    buttonNums.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "zero":
                    buttonNumsEvent("0");
                    break;

                case "1":    
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    buttonNumsEvent(e.target.id);
                    break;

                case "dot":
                    buttonDotEvent(".");
                    break;
            };
            display.textContent = currentInput;
        });
    });

    // Click listener for operator buttons
    buttonOperators.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "plus":
                    buttonOperatorsEvent("+");
                    break;

                case "minus":
                    buttonOperatorsEvent("-");
                    break;
                    
                case "multiply":
                    buttonOperatorsEvent("*");
                    break;

                case "divide":
                    buttonOperatorsEvent("/");
                    break;

                case "equals":
                    buttonEqualsEvent();
                    break;
            };
            display.textContent = currentInput;
        });
    });

    // Function button listener
    buttonFunctions.forEach(button => {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "clear":
                    buttonClearEvent();
                    break;

                case "plusminus":
                    buttonPlusMinusEvent("-");
                    break;

                case "percent":
                    buttonPercentEvent("%");
                    break;
            };
            display.textContent = currentInput;
        });
    });
};


main();