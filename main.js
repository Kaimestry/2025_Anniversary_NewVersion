//FADE IN AND OUT FUNCTION
function fadeInEffect(element, delayMs = 0) {
  setTimeout(() => {
    element.classList.remove('hidden', 'fade-out', 'hide'); // reset state
    element.classList.add('fade-in');

    // Trigger reflow to ensure pao_loading_animation works
    void element.offsetWidth;

    element.classList.add('show'); // will fade to opacity 1
  }, delayMs);
};

function fadeOutAndHide(element, delayMs = 0) {
  setTimeout(() => {
    element.classList.remove('fade-in', 'show');
    element.classList.add('fade-out');

    void element.offsetWidth;

    element.classList.add('hide'); // opacity goes to 0

    setTimeout(() => {
      element.classList.add('hidden');
      element.classList.remove('fade-out', 'hide');
    }, 500); // match transition
  }, delayMs);
};

function fadeInSequence(elements, delay = 1000, autoHide = false, hideDelay = 2000) {
  elements.forEach((el, index) => {
    const fadeInTime = index * delay;
    fadeInEffect(el, fadeInTime);

    if (autoHide) {
      const fadeOutTime = fadeInTime + hideDelay;
      fadeOutAndHide(el, fadeOutTime);
    }
  });
};
function fadeInOutInEffect(el1, el2, delayBefore = 1500, showEl1Duration = 2170, afterDelay = 900) {
  setTimeout(() => {
    fadeInEffect(el1); // Show the loader

    setTimeout(() => {
      fadeOutAndHide(el1); // Hide the loader

      setTimeout(() => {
        fadeInEffect(el2); // Show the next element
      }, afterDelay);

    }, showEl1Duration);

  }, delayBefore);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

document.getElementById('hint_btn').addEventListener('click', ()=>{
  fadeInEffect(document.getElementById('hint'))
})