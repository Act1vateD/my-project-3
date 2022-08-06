const leftArrow = document.getElementById('left-arrow'),
      rightArrow = document.getElementById('right-arrow'),
      slides = document.querySelectorAll('.right_contImg'),
      dots = document.querySelectorAll('.dot'),
      names = document.querySelectorAll('.right_contName');


let index = 0;

const activeSlide = n => {
  for(right_contImg of slides){
    right_contImg.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  for(dot of dots){
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const activeName = n => {
  for(right_contName of names){
    right_contName.classList.remove('active');
  }
  names[n].classList.add('active');
}

const nextSlide = () => {
  if (index == slides.length -1){
    index = 0;
    activeSlide(index);
    activeDot(index);
    activeName(index);
  }else {
    index++;
    activeSlide(index);
    activeDot(index);
    activeName(index);
  }
}

const prevSlide = () => {
  if (index == 0){
    index = slides.length -1;
    activeSlide(index);
    activeDot(index);
    activeName(index);
  }else {
    index--;
    activeSlide(index);
    activeDot(index);
    activeName(index);
  }
}

dots.forEach((item, indexDot) => {
item.addEventListener('click', () => {
  index = indexDot;
  activeSlide(index);
  activeDot(index);
  activeName(index);
})
})

names.forEach((item, name) => {
  item.addEventListener('click', () => {
    index = name;
    activeSlide(index);
    activeDot(index);
    activeName(index);
  })
  })

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);
