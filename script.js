// JavaScript to handle the interactive Yes/No buttons on the Valentine page

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const questionEl = document.querySelector('h1');

  // Array of messages that will be shown each time the "No" button is clicked
  const messages = [
    'Are you sure?',
    'Really sure? 🥺',
    'Please say yes! 🥺',
    "Don't break my heart 💔", // Escaped apostrophe to avoid HTML issues
    'Okay fine, I give up... 😢'
  ];

  let noCount = 0;

  // Handler for the "No" button: update the question text and enlarge the Yes button
  noBtn.addEventListener('click', () => {
    if (noCount < messages.length) {
      questionEl.textContent = messages[noCount];
    }
    noCount++;
    // Increase the size of the Yes button incrementally
    const scale = 1 + noCount * 0.15;
    yesBtn.style.transform = `scale(${scale})`;
    // Once all messages have been displayed, hide the No button
    if (noCount >= messages.length) {
      noBtn.style.display = 'none';
    }
  });

  // Handler for the "Yes" button: redirect to the celebration page
  yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
  });
});