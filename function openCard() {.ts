function openCard() {
  document.getElementById('birthdayCard').classList.add('opened');
  launchConfetti();
}

// Simple confetti effect
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confetti = [];

  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      tilt: Math.random() * 10 - 10
    });
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.fillStyle = c.color;
      ctx.fillRect(c.x + c.tilt, c.y, c.r, c.r);
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += 2;
      c.tilt = Math.sin(c.y * 0.05) * 10;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  let interval = setInterval(drawConfetti, 30);
  setTimeout(() => clearInterval(interval), 5000); // Stop after 5 seconds
}
