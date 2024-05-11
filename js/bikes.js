


function searchProducts(object) {
  const inputSearchValue = document.querySelector(".search-input");

  inputSearchValue.addEventListener("input", function() {
    const bikesContainer = document.querySelector(".grid-bikes-container");
    const searchOutput = inputSearchValue.value.toLowerCase();
    bikesContainer.innerHTML = "";

    setTimeout(() => {
      object.forEach(ele => {
      
        if (ele.name) {
          const elementName = ele.name.toLowerCase();
          if (elementName.includes(searchOutput)) {
            bikesContainer.innerHTML += `
            <div class="bike-container-products bike-trigger" data=${object.indexOf(ele)}>
            <h3> ${ele.name} </h3>
            <img class="img-bike" src="${ele.bikeImg}"  alt="">
          
            </div> `;
          
          }
        }
      });
      displayModal(object)
    }, 1);
    
  });

}

searchProducts(bikeModels1)




function Slider() {
    
let slider = document.querySelector('.slider'),
sliderList = slider.querySelector('.slider-list'),
sliderTrack = slider.querySelector('.slider-track'),
slides = slider.querySelectorAll('.slide'),
arrows = slider.querySelector('.slider-arrows'),
prev = arrows.children[0],
next = arrows.children[1],
slideWidth = slides[0].offsetWidth,
slideIndex = 0,
posInit = 0,
posX1 = 0,
posX2 = 0,
posY1 = 0,
posY2 = 0,
posFinal = 0,
isSwipe = false,
isScroll = false,
allowSwipe = true,
transition = true,
nextTrf = 0,
prevTrf = 0,
lastTrf = --slides.length * slideWidth,
posThreshold = slides[0].offsetWidth * 0.35,
trfRegExp = /([-0-9.]+(?=px))/,
swipeStartTime,
swipeEndTime,
getEvent = function() {
  return (event.type.search('touch') !== -1) ? event.touches[0] : event;
},
slide = function() {
  if (transition) {
    sliderTrack.style.transition = 'transform .5s';
  }
  sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

  prev.classList.toggle('disabled', slideIndex === 0);
  next.classList.toggle('disabled', slideIndex === --slides.length);
},
swipeStart = function() {
  let evt = getEvent();

  if (allowSwipe) {

    swipeStartTime = Date.now();
    
    transition = true;

    nextTrf = (slideIndex + 1) * -slideWidth;
    prevTrf = (slideIndex - 1) * -slideWidth;

    posInit = posX1 = evt.clientX;
    posY1 = evt.clientY;

    sliderTrack.style.transition = '';

    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mouseup', swipeEnd);

    sliderList.classList.remove('grab');
    sliderList.classList.add('grabbing');
  }
},
swipeAction = function() {

  let evt = getEvent(),
    style = sliderTrack.style.transform,
    transform = +style.match(trfRegExp)[0];

  posX2 = posX1 - evt.clientX;
  posX1 = evt.clientX;

  posY2 = posY1 - evt.clientY;
  posY1 = evt.clientY;

  if (!isSwipe && !isScroll) {
    let posY = Math.abs(posY2);
    if (posY > 7 || posX2 === 0) {
      isScroll = true;
      allowSwipe = false;
    } else if (posY < 7) {
      isSwipe = true;
    }
  }

  if (isSwipe) {
    if (slideIndex === 0) {
      if (posInit < posX1) {
        setTransform(transform, 0);
        return;
      } else {
        allowSwipe = true;
      }
    }

    if (slideIndex === --slides.length) {
      if (posInit > posX1) {
        setTransform(transform, lastTrf);
        return;
      } else {
        allowSwipe = true;
      }
    }

    if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
      reachEdge();
      return;
    }

    sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
  }

},
swipeEnd = function() {
  posFinal = posInit - posX1;

  isScroll = false;
  isSwipe = false;

  document.removeEventListener('touchmove', swipeAction);
  document.removeEventListener('mousemove', swipeAction);
  document.removeEventListener('touchend', swipeEnd);
  document.removeEventListener('mouseup', swipeEnd);

  sliderList.classList.add('grab');
  sliderList.classList.remove('grabbing');

  if (allowSwipe) {
    swipeEndTime = Date.now();
    if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
      if (posInit < posX1) {
        slideIndex--;
      } else if (posInit > posX1) {
        slideIndex++;
      }
    }

    if (posInit !== posX1) {
      allowSwipe = false;
      slide();
    } else {
      allowSwipe = true;
    }

  } else {
    allowSwipe = true;
  }

},
setTransform = function(transform, comapreTransform) {
  if (transform >= comapreTransform) {
    if (transform > comapreTransform) {
      sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
    }
  }
  allowSwipe = false;
},
reachEdge = function() {
  transition = false;
  swipeEnd();
  allowSwipe = true;
};

sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
sliderList.classList.add('grab');

sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
slider.addEventListener('touchstart', swipeStart);
slider.addEventListener('mousedown', swipeStart);

arrows.addEventListener('click', function() {
let target = event.target;

if (target.classList.contains('next')) {
  slideIndex++;
} else if (target.classList.contains('prev')) {
  slideIndex--;
} else {
  return;
}

slide();
});


}


function RenderAllBikes(bikeModels){
    

   
    bikeModels.forEach(bikeCard => { 
        let containerBikes = document.querySelector(".grid-bikes-container");
        
        containerBikes ? containerBikes.innerHTML+=
        `
            <div class="bike-container-products bike-trigger" data=${bikeModels.indexOf(bikeCard)}>
            <h3> ${bikeCard.name} </h3>
            <img class="img-bike" src="${bikeCard.bikeImg}"  alt="">
          
            </div>  
         
        ` : null
    })
  
   
  const modalContainer = document.querySelector(".modal-container");

    

   
    
  
}
RenderAllBikes(bikeModels1)


   
    
 

function displayModal(bikes){


    const modalContainer = document.querySelector(".modal-container");

    

    const cards = document.querySelectorAll(".bike-trigger");
    cards.forEach(card=>card.addEventListener("click", function(){
      
        const numberOfProduct = card.getAttribute("data");


        const img1 = bikes[numberOfProduct].bikeImg;
        const img2 = bikes[numberOfProduct].bikeImg2;
        const img3 = bikes[numberOfProduct].bikeImg3;
        const img4 = bikes[numberOfProduct].bikeImg4;

        const name = bikes[numberOfProduct].name;
        const speed = bikes[numberOfProduct].speed;
        const price = bikes[numberOfProduct].price;
        const desc = bikes[numberOfProduct].description;
        const frame = bikes[numberOfProduct].frame;
      
        const type = bikes[numberOfProduct].type;
        const grupset = bikes[numberOfProduct].grupset;
        const brakingSystem = bikes[numberOfProduct].brakingSystem;
        const velg = bikes[numberOfProduct].velg;
        const wheel = bikes[numberOfProduct].wheel;
        const stang = bikes[numberOfProduct].stang;
        const transmission = bikes[numberOfProduct].transmission;
        const pedal = bikes[numberOfProduct].pedal;
        const cleat = bikes[numberOfProduct].cleat;
        

        const productModalLiteral = `
        <img class="icon-cross" src="./imgs/cross.svg" alt="" class="cross-exit-modal">
        <div class="rent-bike-modal">
     
        <h1 class="header">${name}</h1>
        <div class="slider image-bike-modal">
          <div class="slider-list modal-slide">
            <div class="slider-track">
              <div class="slide modal-slide" style="background-image: url('${img1}'); background-size: cover">   </div>
              <div class="slide modal-slide" style="background-image: url('${img2}'); background-size: cover">   </div>
              <div class="slide modal-slide" style="background-image: url('${img3}'); background-size: cover">   </div>
            </div>
          </div>
          <div class="slider-arrows">
            <button type="button" class="prev">&larr;</button>
            <button type="button" class="next">&rarr;</button>
          </div>
        </div>
  
        <div class="properties-bike col">
          <div class="row">
            <p>Frame</p>
            <p>${frame}</p>
          </div>
          <div class="row">
            <p>Grup set</p>
            <p>${grupset}</p>
          </div>
          <div class="row">
            <p>Braking system</p>
            <p>${brakingSystem}</p>
          </div>
          <div class="row">
            <p>Wheel</p>
            <p>${wheel}</p>
          </div>
          <div class="row">
            <p>Velg aluminium</p>
            <p>${velg}</p>
          </div>
          <div class="row">
            <p>Stang</p>
            <p>${stang}</p>
          </div>
          <div class="row">
            <p>Pedal</p>
            <p>${pedal}</p>
          </div>
          <div class="row">
            <p>Transmission</p>
            <p>${transmission}</p>
          </div>
          <div class="row">
            <p>Cleat</p>
            <p>${cleat}</p>
          </div>
  
  
        </div>
        <p><strong> Description: </strong>${desc} </p>
      
        <p><strong> Price: </strong>${price} £ </p>
        <p><strong> Speed: </strong>${speed} km/h </p>
        <p><strong> Type: </strong>${type} </p>
        <button class="btn-custom">Buy</button>
      </div>
        `
        modalContainer.style.display="block";
        modalContainer.innerHTML=productModalLiteral;

        const crossCloseModal = document.querySelector(".icon-cross");
        crossCloseModal.addEventListener("click", function(){
            modalContainer.style.display="none"
        })
        Slider()
    }))

}
displayModal(bikeModels1)
