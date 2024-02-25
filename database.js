document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    var formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value
            // Add other form fields here
    };

    // Send form data to server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(xhr.responseText); // Log server response
                alert("Registration successful!"); // Show success message


                // Optionally, reset the form after successful submission
                document.getElementById("registrationForm").reset();
            } else {
                console.error("Error:", xhr.status); // Log error status
                alert("Error occurred. Please try again."); // Show error message
            }
        }
    };
    xhr.send(JSON.stringify(formData));
});