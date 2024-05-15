let age = prompt("What is your age?");
if (!isNaN(age)) {
    age = parseInt(age);
    if (age < 18) {
        alert("You are not too young to enter this page.");
    } else if (age === 18) {
        alert("Yes, you can visit our page.");
    } else {
        alert("Congratulations, you are 18+ please visit.");
    }
} else {
    alert("This is not a digit");
}
