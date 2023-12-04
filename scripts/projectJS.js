document.addEventListener("DOMContentLoaded", function () {
  // Event listener for the form submission
  document
    .getElementById("mealPlanForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the default form submission behavior
      generateMealPlan();
    });

  // Event listener for the clear button
  document
    .getElementById("clearButton")
    .addEventListener("click", clearMealPlan);

  // Event listener for the print button
  document
    .getElementById("printButton")
    .addEventListener("click", printMealPlan);

  // Event listener for the download button
  document
    .getElementById("downloadButton")
    .addEventListener("click", downloadMealPlan);
});

function generateMealPlan() {
  // Add code to collect user input, validate email, and generate meal plan
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var goal = document.getElementById("goal").value;

  // Validate email
  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Collect meal plan inputs
  var breakfast = document.getElementById("breakfast").value;
  var snack1 = document.getElementById("snack1").value;
  var lunch = document.getElementById("lunch").value;
  var snack2 = document.getElementById("snack2").value;
  var dinner = document.getElementById("dinner").value;

  // Create a new window for displaying the meal plan
  var mealPlanWindow = window.open("", "_blank");

  // Write the HTML content for the meal plan to the new window
  mealPlanWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Meal Plan</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <div class="container">
            <h1>Your Meal Plan</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <h2>Meals:</h2>
            <ul>
              <li><strong>Breakfast:</strong> ${breakfast}</li>
              <li><strong>Snack 1:</strong> ${snack1}</li>
              <li><strong>Lunch:</strong> ${lunch}</li>
              <li><strong>Snack 2:</strong> ${snack2}</li>
              <li><strong>Dinner:</strong> ${dinner}</li>
            </ul>
          </div>
        </body>
      </html>
    `);

  // Close the document for the new window
  mealPlanWindow.document.close();
}

function clearMealPlan() {
  // Add code to clear the meal plan inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("goal").value = "";
  document.getElementById("breakfast").value = "";
  document.getElementById("snack1").value = "";
  document.getElementById("lunch").value = "";
  document.getElementById("snack2").value = "";
  document.getElementById("dinner").value = "";
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
