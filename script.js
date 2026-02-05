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

  // Dynamically add polaroid-style photos around the central container.
  const photoContainer = document.getElementById('photo-container');
  // Add your photo file names here once you've uploaded them to the images folder.
  // These images will be displayed around the central card with random sizes, rotations and opacity.
  const photoSources = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.jpg',
    'images/photo9.jpg',
    'images/photo10.jpg'
  ];
  // Utility function to generate a random number within a range
  const randomRange = (min, max) => Math.random() * (max - min) + min;

  /*
   * To better distribute the polaroid photos around the page and avoid bunching
   * in the corners, define a set of base positions around the edges of the
   * viewport. Each entry defines a top and left percentage. When creating
   * photos, we'll pick the corresponding base position based on its index
   * and then add a small random offset (±5%) so the layout still feels
   * organic. This prevents the images from overlapping the central card
   * while spacing them more evenly around the perimeter.
   */
  const basePositions = [
    { top: 5, left: 5 },    // upper left corner
    { top: 5, left: 50 },   // top centre
    { top: 5, left: 85 },   // upper right corner
    { top: 50, left: 5 },   // centre left
    { top: 50, left: 85 },  // centre right
    { top: 85, left: 5 },   // lower left
    { top: 85, left: 50 },  // bottom centre
    { top: 85, left: 85 },  // lower right
    { top: 25, left: 25 },  // upper-left mid
    { top: 75, left: 75 }   // lower-right mid
  ];

  photoSources.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    // Pick a base position for this photo based on its index
    const base = basePositions[index % basePositions.length];
    // Apply a small random offset to make the position feel natural
    let top = base.top + randomRange(-5, 5);
    let left = base.left + randomRange(-5, 5);
    // Clamp values so images stay within the viewport (0–100%)
    top = Math.max(0, Math.min(100, top));
    left = Math.max(0, Math.min(100, left));
    // Random size with a larger range; increase min and max so pictures aren't too tiny
    const size = randomRange(80, 300); // width/height between 80px and 300px
    const opacity = randomRange(0.5, 1); // opacity between 0.5 and 1
    const rotation = randomRange(-15, 15); // rotation between -15 and 15 degrees
    img.style.top = `${top}%`;
    img.style.left = `${left}%`;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.opacity = opacity;
    img.style.transform = `rotate(${rotation}deg)`;
    photoContainer.appendChild(img);
  });
});