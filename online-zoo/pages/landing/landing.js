(function () {
  const fSliderContainer = document.querySelector('.f-slider__row');
  const prevBtn = document.querySelector('.js-fslider-prev');
  const nextBtn = document.querySelector('.js-fslider-next');

  prevBtn.addEventListener('click', function () {
    const fSlides = document.querySelectorAll('.f-slider__col');
    const cln = fSlides[fSlides.length - 1].cloneNode(true);

    fSlides[fSlides.length - 1].remove();
    fSliderContainer.prepend(cln);

    fSlides.forEach((fSlide) => {
      fSlide.classList.remove('fade');

      setTimeout(() => {
        fSlide.classList.add('fade');
      }, 1);
    });
  });

  nextBtn.addEventListener('click', function () {
    const fSlides = document.querySelectorAll('.f-slider__col');
    const cln = fSlides[0].cloneNode(true);

    fSlides[0].remove();
    fSliderContainer.append(cln);

    fSlides.forEach((fSlide) => {
      fSlide.classList.remove('fade');

      setTimeout(() => {
        fSlide.classList.add('fade');
      }, 1);
    });
  });
})();

(function () {
  const tSliderContainer = document.querySelector('.t-slider__row');
  const tSlides = document.querySelectorAll('.t-slider__col');
  const prevBtn = document.querySelector('.js-tslider-prev');
  const nextBtn = document.querySelector('.js-tslider-next');
  let timer = 10000;

  function drawSlide(dir) {
    const tSlides = document.querySelectorAll('.t-slider__col');
    const cln =
      dir === 'right'
        ? tSlides[0].cloneNode(true)
        : tSlides[tSlides.length - 1].cloneNode(true);

    dir === 'right'
      ? tSlides[0].remove()
      : tSlides[tSlides.length - 1].remove();

    dir === 'right'
      ? tSliderContainer.append(cln)
      : tSliderContainer.prepend(cln);

    tSlides.forEach((tSlide) => {
      tSlide.classList.remove('fade');

      setTimeout(() => {
        tSlide.classList.add('fade');
      }, 500);
    });
  }

  let interval = setInterval(() => {
    drawSlide('right');
  }, timer);

  prevBtn.addEventListener('click', () => {
    drawSlide('left');

    stopAndReInitSlider();
  });

  nextBtn.addEventListener('click', () => {
    drawSlide('right');

    stopAndReInitSlider();
  });

  function stopAndReInitSlider() {
    clearInterval(interval);

    setTimeout(function () {
      setInterval(() => {
        drawSlide('right');
      }, timer);
    }, 20000);
  }

  tSlides.forEach((tSlide) => {
    tSlide.addEventListener('click', function () {
      stopAndReInitSlider();
    });
  });
})();
