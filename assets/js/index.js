// Initialize tries if not set
if (!localStorage.getItem("tries")) {
  localStorage.setItem("tries", "3");
}

// Get tries as a number
let tries = parseInt(localStorage.getItem("tries"), 10);

function CheckCorrect(e) {
  e.preventDefault();

  // Get input value
  const inputVal = document.getElementById("need").value;

  console.log("Tries left:", tries);

  if (inputVal === "25/04/2025") {
    // Correct answer - redirect
    window.location.href = "./letter.html";
  } else {
    // Wrong answer - decrement tries
    tries -= 1;

    if (tries > 0) {
      alert(`Try again! You have ${tries} tries left.`);
    } else {
      alert("Code is 25/04/2025");
      // Optionally disable the button after tries run out
      
    }
    localStorage.setItem("tries", tries.toString());
  }
}

document.getElementById("submit_1").addEventListener("click", CheckCorrect);

