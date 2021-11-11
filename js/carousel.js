const prev = document.querySelector('.carousel__button--previous');
const next = document.querySelector('.carousel__button--next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('carousel__button--next');
})

next.addEventListener('click', () => {
  nextImage('carousel__button--previous');
})

function nextImage(direction) {
  if(direction == 'carousel__button--next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('carousel__item--main');
  }
  images[index].classList.add('carousel__item--main');
}