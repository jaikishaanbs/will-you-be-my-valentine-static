// JavaScript to handle the moving 'No' button and 'Yes' redirect
document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('no-btn');
  const yesBtn = document.getElementById('yes-btn');
  const buttonsContainer = document.querySelector('.buttons');

  // Reposition the "No" button randomly within its container
  noBtn.addEventListener('mouseover', () => {
    const containerWidth = buttonsContainer.offsetWidth;
    const containerHeight = buttonsContainer.offsetHeight;
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Generate random positions within container bounds (keeping button fully visible)
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  });

  // Redirect to the yes page when clicking the "Yes" button
  yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
  });
});
