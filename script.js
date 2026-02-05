// JavaScript to handle the interactive Yes/No buttons on the Valentine page

document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const questionEl = document.querySelector('h1');

  // Array of messages that will be shown on the "No" button each time it's clicked.
  // These mirror the playful prompts from the original project.
  const messages = [
    'Are you sure?',
    'Really sure? 🥺',
    'What if I asked really nicely?',
    'Pretty please',
    'With a chocolate rice cake on top',
    'What about a matcha frostie',
    'PLEASE POOKIE',
    'But :*(',
    'I am going to die',
    'Yep I\'m dead',
    "ok ur talking to nathan's ghost",
    'please babe',
    ':((((',
    'PRETTY PLEASE',
    'Estoy muerto',
    'No :('
  ];

  let noCount = 0;

  // Keep the original question constant. On each "No" click, change the "No" button's text
  // and increase the "Yes" button's font size. This matches the behaviour from the original project.
  noBtn.addEventListener('click', () => {
    // Cycle through the messages array for the "No" button label
    if (noCount < messages.length) {
      noBtn.textContent = messages[noCount];
    } else {
      // If we've exhausted all messages, keep using the last one
      noBtn.textContent = messages[messages.length - 1];
    }
    // Increase count for the next click
    noCount++;
    // Enlarge the "Yes" button by increasing its font size
    const fontSize = noCount * 20 + 16; // start at 16px and add 20px per click
    yesBtn.style.fontSize = `${fontSize}px`;
  });

  // Handler for the "Yes" button: redirect to the celebration page
  yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
  });
});