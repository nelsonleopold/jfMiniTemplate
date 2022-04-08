// Step One, get the information (controller, accept requests)
function getMessage() {
    let msg = document.getElementById("message").value;

    displayMessage(msg);
}



// Final Step, display the information (view, displays stuff on screen)
function displayMessage(message) {

    let msg = `Hello nelson the dev ${message}`;

    element = document.getElementById("results");
    element.innerHTML = msg;
}