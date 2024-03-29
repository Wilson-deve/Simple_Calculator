# Simple_Calculator


Summary of this calculator project

1. Querying Elements: The code starts by selecting the relevant elements in the HTML using document.
   querySelector and document.querySelectorAll. 
   These elements are used to interact with the calculator's buttons and display area.

2. Initialization: The code initializes a variable called input to store the user's input as they press calculator buttons.

3. Event Listeners: The code then iterates through each calculator button using a for...of loop. 
   For each button, an event listener is added that triggers when the button is clicked.
   The value of the button (defined using the data-key attribute in the HTML) is retrieved. This value corresponds to the content of the button.

Inside the event listener, there are several conditions that check the value of the clicked button and perform specific actions based on that value.

4. Clear and Backspace: If the button's value is "clear", the calculator input is reset, and the display is cleared. 
   If the value is "backspace", the last character of the input is removed.

5. Equal Sign (=) and Calculation: If the value is "=", the input is evaluated using JavaScript's eval function after processing using the prepareInput function. 
   The result of the evaluation is then displayed in the output area.

6. Brackets: If the value is "brackets", the code handles the addition of opening and closing parentheses based on the existing input. 
   This allows the user to toggle between opening and closing brackets as needed.

7. Operators and Numbers: For numeric digits and basic arithmetic operators (+, -, *, /, %), the code checks if the input is valid and then appends the value to the input variable. 
   The validateInput function ensures that consecutive operators or decimal points are not allowed.

8. Clean Input and Output: The cleanInput and cleanOutput functions are responsible for formatting the input and output strings for display. 
   They add HTML elements and commas for better visualization.

9. Validate Input: The validateInput function checks the validity of the user's input by ensuring that consecutive operators and decimal points are not allowed.

10. Prepare Input: The prepareInput function modifies the input to replace percentage signs (%) with /100, making them suitable for evaluation.
