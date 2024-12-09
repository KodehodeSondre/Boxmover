const element = document.getElementById('box');

let position = { top: window.innerHeight / 2 - 25, left: window.innerWidth / 2 - 25 };

const step = 10;

function updateSkibidi() {
  element.style.top = `${position.top}px`;
  element.style.left = `${position.left}px`;
}

function pilTastMovement(event) {
  switch (event.key) {
    case 'ArrowUp':
      position.top = Math.max(0, position.top - step);
      break;
    case 'ArrowDown':
      position.top = Math.min(window.innerHeight - element.offsetHeight, position.top + step);
      break;
    case 'ArrowLeft':
      position.left = Math.max(0, position.left - step);
      break;
    case 'ArrowRight':
      position.left = Math.min(window.innerWidth - element.offsetWidth, position.left + step);
      break;
  }
  updateSkibidi();
}

function pekeKlikkMovement(event) {
    position.top = event.clientY - element.offsetHeight / 40;
    position.left = event.clientX - element.offsetWidth / 40;
  
    position.top = Math.max(0, Math.min(position.top, window.innerHeight - element.offsetHeight));
    position.left = Math.max(0, Math.min(position.left, window.innerWidth - element.offsetWidth));
    updateSkibidi();
  }
  
window.addEventListener('keydown', pilTastMovement);
window.addEventListener('click', pekeKlikkMovement);

updateSkibidi();
