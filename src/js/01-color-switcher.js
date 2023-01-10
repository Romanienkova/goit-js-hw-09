function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  bgBody: document.body,
};

let timerId = null;
	 
refs.start.addEventListener('click', () => {
  timerId = setInterval(() => {
	  refs.bgBody.style.backgroundColor = getRandomHexColor();
	  refs.start.disabled = true;
	  refs.stop.disabled = false;
  }, 1000);
});

refs.stop.addEventListener('click', () => {
	clearInterval(timerId);
	refs.stop.disabled = true;
	refs.start.disabled = false;
});
