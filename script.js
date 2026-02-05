// JavaScript to handle the moving 'No' button and 'Yes' redirect
// JavaScript to handle the interactive Yes/No buttons
document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const questionEl = document.querySelector('h1');

  // Messages to display when the "No" button is clicked
  const messages = [
    "Are you sure?",
    "Really sure? 🥺",
    "Please say yes! 🥺",
    "Don't break my heart 💔",
    "Okay fine, I give up... 😢"
  ];

  let noCount = 0;

  // When clicking the "No" button, cycle through messages and enlarge the "Yes" button
  noBtn.addEventListener('click', () => {
    if (noCount < messages.length) {
      questionEl.textContent = messages[noCount];
    }
    noCount++;
    // Increase the size of the "Yes" button gradually
    const scale = 1 + noCount * 0.15;
    yesBtn.style.transform = `scale(${scale})`;
    // Once all messages have been shown, hide the "No" button
    if (noCount >= messages.length) {
      noBtn.style.display = 'none';
    }
  });

  // Redirect to the yes page when clicking the "Yes" button
  yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
  });
});