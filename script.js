// Code to handle AJAX form submission
document.getElementById('student-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Create a FormData object to send form data via AJAX
  var formData = new FormData(this);

  // Send form data to the server using AJAX
  fetch('submit_form.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.text()) // Get response text
  .then(data => {
      if (data.trim() === 'success') {
          // Display the success message
          const successMessage = document.getElementById('success-message');
          successMessage.style.display = 'block';

          // Hide success message after 3 seconds
          setTimeout(() => {
              successMessage.style.display = 'none';
          }, 3000);

          // Reset the form fields
          document.getElementById('student-form').reset();
      } else {
          console.error('Error:', data);
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
});
