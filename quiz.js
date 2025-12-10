//Identify the Correct Answer
function checkAnswer() {
    const correctAnswer = "4";
//Identify the Correct Answer
function checkAnswer() {
    const correctAnswer = "4"
    //Retrieve the User’s Answer:
const userOption = document.querySelector('input[name="quiz"]:checked');    
const response = document.getElementById("feedback");

if (userOption) {
    response.textContent;
    return;
}
const userAnswer = userOption.value;
//Compare the User’s Answer with the Correct Answer:
if (userAnswer === correctAnswer) {
    response.textContent = "Correct! Well done";
} else {
    response.textContent = "That's incorrect. Try again!";
}
}
//Add an Event Listener to the Submit Button:
document.getElementById('submit-answer').addEventListener("click", checkAnswer);
}
