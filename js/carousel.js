const prev = document.querySelector('.carousel__button_previous');
const next = document.querySelector('.carousel__button_next');
const images = document.querySelector('.carousel__list').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('carousel__button_next');
})

next.addEventListener('click', () => {
  nextImage('carousel__button_previous');
})

function nextImage(direction) {
  if(direction == 'carousel__button_next') {
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
    images[i].classList.remove('carousel__item_main');
  }
  images[index].classList.add('carousel__item_main');
}