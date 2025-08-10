// Optional: Log link clicks to the console
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    console.log(`User clicked on ${e.target.textContent.trim()}`);
  });
});
// script.js

// Get the modal and the trigger element (phone link)
const modal = document.getElementById('phoneModal');
const phoneLink = document.getElementById('phoneLink');
const closeBtn = document.querySelector('.close-btn');

// When the user clicks on the phone link, show the modal
phoneLink.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default link behavior
  modal.style.display = "block"; // Show the modal
});

// When the user clicks on <span> (close button), close the modal
closeBtn.addEventListener('click', function() {
  modal.style.display = "none"; // Hide the modal
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal
  }
});
