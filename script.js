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
    "ok ur talking to JK's ghost",
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
    'images/photo1.jpeg',
    'images/photo2.jpeg',
    'images/photo3.jpeg',
    'images/photo4.jpeg',
    'images/photo5.jpeg',
    'images/photo6.jpeg',
    'images/photo7.jpeg',
    'images/photo8.jpeg',
    'images/photo9.jpeg',
    'images/photo10.jpeg'
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
    // Distribute photo positions more evenly around the edges and corners.
    // Each entry specifies a top and left percentage relative to the viewport.
    { top: 5, left: 5 },    // top-left corner
    { top: 15, left: 20 },  // near top-left, slightly inset
    { top: 5, left: 80 },   // top-right corner
    { top: 15, left: 70 },  // near top-right, slightly inset
    { top: 80, left: 10 },  // bottom-left corner
    { top: 70, left: 20 },  // near bottom-left
    { top: 80, left: 85 },  // bottom-right corner
    { top: 70, left: 75 },  // near bottom-right
    { top: 50, left: 10 },  // mid-left (vertical centre but horizontal edge)
    { top: 50, left: 85 }   // mid-right
  ];

  photoSources.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    // Pick a base position for this photo based on its index
    const base = basePositions[index % basePositions.length];
    // Apply a small random offset (±3%) to make the position feel natural without bunching
    let top = base.top + randomRange(-3, 3);
    let left = base.left + randomRange(-3, 3);
    // Clamp values so images stay within the viewport (0–100%)
    top = Math.max(0, Math.min(100, top));
    left = Math.max(0, Math.min(100, left));
    // Random size with a larger range; increase min and max so pictures aren't too tiny
    const size = randomRange(100, 300); // width/height between 100px and 300px (increase min size)
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
