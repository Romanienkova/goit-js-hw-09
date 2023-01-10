function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};

refs.stop.disabled = true;
let timerId = null;
	 
refs.start.addEventListener('click', () => {
  timerId = setInterval(() => {
	  document.body.style.backgroundColor = getRandomHexColor();
	  refs.start.disabled = true;
	  refs.stop.disabled = false;
  }, 1000);
});

refs.stop.addEventListener('click', () => {
	clearInterval(timerId);
	refs.start.disabled = false;
	refs.stop.disabled = true;
});
