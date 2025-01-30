// Updated script.js
function openGift() {
  const giftBox = document.querySelector(".gift-box");
  const song = document.getElementById("song");

  // Hide gift box and play song
  giftBox.style.display = "none";
  song.play().catch((error) => {
    console.error("Audio error:", error);
    showMessage();
  });

  // Show message after 2 seconds
  setTimeout(showMessage, 2000);
}

function showMessage() {
  const message = document.querySelector(".message");
  message.style.display = "block";
  setTimeout(() => {
    message.classList.add("visible");
  }, 10);
}

function showProposal() {
  const message = document.querySelector(".message");
  const proposal = document.querySelector(".proposal");

  // Fade out message
  message.classList.remove("visible");
  setTimeout(() => {
    message.style.display = "none";
    proposal.style.display = "block";
    setTimeout(() => {
      proposal.classList.add("visible");
    }, 10);
  }, 1000);
}

function celebrate() {
  // Hide proposal and show "I Love You" stage
  const proposal = document.querySelector(".proposal");
  const loveStage = document.querySelector(".love-stage");

  proposal.classList.remove("visible");
  setTimeout(() => {
    proposal.style.display = "none";
    loveStage.style.display = "block";
    setTimeout(() => {
      loveStage.classList.add("visible");
    }, 10);
  }, 1000);
}

function sadNo() {
  const noButton = document.querySelector(".no-button");
  const buttonsContainer = document.querySelector(".buttons");

  // Get container position
  const containerRect = buttonsContainer.getBoundingClientRect();

  // Get available movement area
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  // Generate random position within viewport
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Prepare for animation
  noButton.style.position = "fixed";
  noButton.style.left = `${containerRect.left}px`;
  noButton.style.top = `${containerRect.top}px`;

  // Animate to new position
  requestAnimationFrame(() => {
    noButton.style.transition = "all 0.5s ease";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  });
}
