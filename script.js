// script.js
const counterElement = document.getElementById('counter');
const duration = 6000; // 6 seconds
const fps = 60; // Frames per second

const updateInterval = 1000 / fps; // Time between updates
const totalFrames = duration / updateInterval; // Total number of updates

function startCounter() {
  let currentFrame = 0;

  const counterAnimation = setInterval(() => {
    currentFrame++;
    const progress = Math.min((currentFrame / totalFrames) * 100, 100).toFixed(0); // Calculate percentage
    counterElement.textContent = `${progress}%`;

    if (currentFrame >= totalFrames) {
      clearInterval(counterAnimation); // Stop the animation at 100%
      startCounter(); // Restart the counter
    }
  }, updateInterval);
}

// Start the counter for the first time
startCounter();