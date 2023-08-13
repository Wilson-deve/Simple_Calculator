// Select all calculator buttons
const keys = document.querySelectorAll('.key');

// Select display areas for input and output
const display_input = document.querySelector('.display .input')
const display_output = document.querySelector('.display .output')

// Initialize input variable to store user input
let input = "";

// Iterate through each calculator button
for (let key of keys) {

    // Get the value of the button from the data-key attribute
    const value = key.dataset.key;

    // Add a click event listener to the button
    key.addEventListener('click', () => {

        // Clear button
        if (value == 'clear') {
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } 
        // Backspace button
        else if (value == "backspace") {
            input = input.slice(0, -1);
            display_input.innerHTML = cleanInput(input);
        } 
        // Equal button
        else if (value == "=") {
            // Evaluate the input and display the result
            let result = eval(prepareInput(input));

            display_output.innerHTML = cleanOutput(result);
        } 
        // Brackets button
        else if (value == "brackets") {
            // Toggle opening and closing brackets based on input
            if (
                input.indexOf("(") == -1 ||
                input.indexOf("(") != -1 &&
                input.indexOf(")") != -1 &&
                input.lastIndexOf("(") < input.lastIndexOf(")")
            ) {
                input += "(";
            } else if (
                input.indexOf("(") != -1 &&
                input.indexOf(")") == -1 ||
                input.indexOf("(") != -1 &&
                input.indexOf(")") != -1 &&
                input.lastIndexOf("(") > input.lastIndexOf(")")
            ) {
                input += ")";
            }
            display_input.innerHTML = cleanInput(input);
        } 
        // Numeric digits and operators
        else {

            // Validate input and append to input variable
            if (validateInput(value)) {
                input += value;
                display_input.innerHTML = cleanInput(input);
            }
            
        }
    });
    
}

// Function to clean input for better display
function cleanInput(input) {
    let input_array = input.split("");
    
    // Replace characters with HTML elements for styling
    for (let i = 0; i < input_array.length; i++) {
        if (input_array[i] == "*") {
            input_array[i] = ` <span class="operator">*</span> `;
        } else if (input_array[i] == "/") {
            input_array[i] = ` <span class="operator">/</span> `;
        } else if (input_array[i] == "+") {
            input_array[i] = ` <span class="operator">+</span> `;
        } else if (input_array[i] == "-") {
            input_array[i] = ` <span class="operator">-</span> `;
        } else if (input_array[i] == "(") {
            input_array[i] = `<span class="brackets">(</span>`;
        } else if (input_array[i] == ")") {
            input_array[i] = `<span class="brackets">)</span>`;
        } else if (input_array[i] == "%") {
            input_array[i] = `<span class="percent">%</span>`;
        }
     }
    return input_array.join("");
}

// Function to format output for better display
function cleanOutput(output) {
    let output_string = output.toString();
    let decimal = output_string.split(".")[1];
    output_string = output_string.split(".")[0];

    let output_array = output_string.split("");

    if (output_array.length > 3) {
        for (let i = output_array.length - 3; i > 0; i -= 3) {
            output_array.splice(i, 0, ",");
            
        }
    }

    if (decimal) {
        output_array.push(".")
        output_array.push(decimal);
    }

    return output_array.join("");
}

// Function to validate input
function validateInput(value) {
    let last_input = input.slice(-1);
    let operators = ["+", "-", "*", "/", "%"];

    if (value == "." && last_input == ".") {
        return false;
    }

    if (operators.includes(value)) {
        if (operators.includes(last_input)) {
            return false
        } else {
            return true;
        }
    }
    return true;
}

// Function to prepare input by replacing % with /100
function prepareInput(input) {
    let input_array = input.split("");

    for (let i = 0; i < input_array.length; i++) {
        if (input_array[i] == "%") {
            input_array[i] = "/100";
        }
        
    }
    return input_array.join("");
}