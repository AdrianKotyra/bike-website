// --------------------SEARCH PRODUCTS --------------------
function searchProducts(object) {
  const inputSearchValue = document.querySelector(".search-input");

  inputSearchValue.addEventListener("input", function () {
    const bikesContainer = document.querySelector(".grid-bikes-container");
    const searchOutput = inputSearchValue.value.toLowerCase();
    bikesContainer.innerHTML = "";

    setTimeout(() => {
      object.forEach((ele) => {
        if (ele.name) {
          const elementName = ele.name.toLowerCase();
          if (elementName.includes(searchOutput)) {
            bikesContainer.innerHTML += `
            <div class="bike-card  bike-trigger " data=${object.indexOf(ele)}>
            <div class="bike-card-container">
                <img class="img-bike" src="${ele.clothesImg}" alt="">
                <div class="info-product-container"> 
                    <h3 class="">${ele.name}</h3>
                
                  
                
              
                   
                </div>
            </div>

            </div>`;
          }
        }
      });
      displayModal(object);
    }, 1);
  });
}

searchProducts(bikeClothes1);
// --------------------PREMADE SLIDER FUNCTION (NOT MINE)--------------------
function Slider() {
  let slider = document.querySelector(".slider"),
    sliderList = slider.querySelector(".slider-list"),
    sliderTrack = slider.querySelector(".slider-track"),
    slides = slider.querySelectorAll(".slide"),
    arrows = slider.querySelector(".slider-arrows"),
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
    getEvent = function () {
      return event.type.search("touch") !== -1 ? event.touches[0] : event;
    },
    slide = function () {
      if (transition) {
        sliderTrack.style.transition = "transform .5s";
      }
      sliderTrack.style.transform = `translate3d(-${
        slideIndex * slideWidth
      }px, 0px, 0px)`;

      prev.classList.toggle("disabled", slideIndex === 0);
      next.classList.toggle("disabled", slideIndex === --slides.length);
    },
    swipeStart = function () {
      let evt = getEvent();

      if (allowSwipe) {
        swipeStartTime = Date.now();

        transition = true;

        nextTrf = (slideIndex + 1) * -slideWidth;
        prevTrf = (slideIndex - 1) * -slideWidth;

        posInit = posX1 = evt.clientX;
        posY1 = evt.clientY;

        sliderTrack.style.transition = "";

        document.addEventListener("touchmove", swipeAction);
        document.addEventListener("mousemove", swipeAction);
        document.addEventListener("touchend", swipeEnd);
        document.addEventListener("mouseup", swipeEnd);

        sliderList.classList.remove("grab");
        sliderList.classList.add("grabbing");
      }
    },
    swipeAction = function () {
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

        // запрет ухода вправо на последнем слайде
        if (slideIndex === --slides.length) {
          if (posInit > posX1) {
            setTransform(transform, lastTrf);
            return;
          } else {
            allowSwipe = true;
          }
        }

        if (
          (posInit > posX1 && transform < nextTrf) ||
          (posInit < posX1 && transform > prevTrf)
        ) {
          reachEdge();
          return;
        }

        sliderTrack.style.transform = `translate3d(${
          transform - posX2
        }px, 0px, 0px)`;
      }
    },
    swipeEnd = function () {
      posFinal = posInit - posX1;

      isScroll = false;
      isSwipe = false;

      document.removeEventListener("touchmove", swipeAction);
      document.removeEventListener("mousemove", swipeAction);
      document.removeEventListener("touchend", swipeEnd);
      document.removeEventListener("mouseup", swipeEnd);

      sliderList.classList.add("grab");
      sliderList.classList.remove("grabbing");

      if (allowSwipe) {
        swipeEndTime = Date.now();
        if (
          Math.abs(posFinal) > posThreshold ||
          swipeEndTime - swipeStartTime < 300
        ) {
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
    setTransform = function (transform, comapreTransform) {
      if (transform >= comapreTransform) {
        if (transform > comapreTransform) {
          sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
        }
      }
      allowSwipe = false;
    },
    reachEdge = function () {
      transition = false;
      swipeEnd();
      allowSwipe = true;
    };

  sliderTrack.style.transform = "translate3d(0px, 0px, 0px)";
  sliderList.classList.add("grab");

  sliderTrack.addEventListener("transitionend", () => (allowSwipe = true));
  slider.addEventListener("touchstart", swipeStart);
  slider.addEventListener("mousedown", swipeStart);

  arrows.addEventListener("click", function () {
    let target = event.target;

    if (target.classList.contains("next")) {
      slideIndex++;
    } else if (target.classList.contains("prev")) {
      slideIndex--;
    } else {
      return;
    }

    slide();
  });
}
// --------------------RENDER ALL CLOTHES--------------------
function RenderAllclothes(clothes) {
  let containerBikes = document.querySelector(".grid-bikes-container");
  containerBikes.innerHTML = "";

  clothes.forEach((accesoryCard) => {
    containerBikes
    ? (containerBikes.innerHTML += `
    <div class="bike-card  bike-trigger " data=${clothes.indexOf(
      accesoryCard
    )}>
    <div class="bike-card-container">
        <img class="img-bike" src="${
          accesoryCard.clothesImg
        }" alt="">
        <div class="info-product-container"> 
            <h3 class="">${accesoryCard.name}</h3>
        
          
        
      
           
        </div>
    </div>

    </div>
`)
: null;
  });

  const modalContainer = document.querySelector(".modal-container");

  const cards = document.querySelectorAll(".bike-card");
  cards.forEach((card) =>
    card.addEventListener("click", function () {
      const numberOfProduct = card.getAttribute("data");

      const img1 = clothes[numberOfProduct].clothesImg;
      const img2 = clothes[numberOfProduct].clothesImg2;
      const img3 = clothes[numberOfProduct].clothesImg3;
      const img4 = clothes[numberOfProduct].clothesImg4;
      const name = clothes[numberOfProduct].name;
      const type = clothes[numberOfProduct].type;
      const price = clothes[numberOfProduct].price;
      const desc = clothes[numberOfProduct].description;

      const productModalLiteral = `
       
        <div class="modal-container-box row">
        <img class="icon-cross" src="./imgs/cross.svg" alt="" >
        <div class="slider image-bike-modal">
        <div class="slider-list modal-slide modal-accessories">

          <div class="slider-track">
            <div class="slide modal-slide modal-accessories" style="background-image: url('${img1}'); background-size: 50%">   </div>
            <div class="slide modal-slide modal-accessories" style="background-image: url('${img2}'); background-size: 50%">   </div>
            <div class="slide modal-slide modal-accessories" style="background-image: url('${img3}'); background-size: 50%">   </div>
            <div class="slide modal-slide modal-accessories" style="background-image: url('${img4}'); background-size: 50%">   </div>
        
          </div>
        </div>
        <div class="slider-arrows">
          <button type="button" class="prev">&larr;</button>
          <button type="button" class="next">&rarr;</button>
        </div>
        </div>
        <div class="product-desc-container">
          <h1 class="prod-title">${name}</h1>
          <p class="prod-desc">${type}</p>
          <p class="prod-desc">${price}£</p>
          <p class="prod-desc description-modal">${desc}</p>
          <div class="btn-more-cont modal-button">
            <button class="btn-custom">Buy</button>
      
          </div>
        </div>
      </div>
        `;
      modalContainer.style.display = "block";
      modalContainer.innerHTML = productModalLiteral;

      const crossCloseModal = document.querySelector(".icon-cross");
      crossCloseModal.addEventListener("click", function () {
        modalContainer.style.display = "none";
      });
      Slider();
    })
  );
}
RenderAllclothes(bikeClothes1, "see_more_1");

// --------------------DISPLAY MODAL CLOTHES--------------------

function displayModal(bikeClothes) {
  const modalContainer = document.querySelector(".modal-container");

  const cards = document.querySelectorAll(".bike-card");
  cards.forEach((card) =>
    card.addEventListener("click", function () {
      const numberOfProduct = card.getAttribute("data");

      const img1 = bikeClothes[numberOfProduct].clothesImg;
      const img2 = bikeClothes[numberOfProduct].clothesImg2;
      const img3 = bikeClothes[numberOfProduct].clothesImg3;
      const img4 = bikeClothes[numberOfProduct].clothesImg4;

      const name = bikeClothes[numberOfProduct].name;
      const type = bikeClothes[numberOfProduct].type;
      const price = bikeClothes[numberOfProduct].price;
      const desc = bikeClothes[numberOfProduct].description;

      const productModalLiteral = `
    <div class="modal-container-box row ">
    <img class="icon-cross" src="./imgs/cross.svg" alt="" class="cross-exit-modal">
    <div class="slider image-bike-modal">
    <div class="slider-list modal-slide modal-accessories">
      <div class="slider-track">
        <div class="slide modal-slide modal-accessories" style="background-image: url('${img1}'); background-size: 50%">   </div>
        <div class="slide modal-slide modal-accessories" style="background-image: url('${img2}'); background-size: 50%">   </div>
        <div class="slide modal-slide modal-accessories" style="background-image: url('${img3}'); background-size: 50%">   </div>
        <div class="slide modal-slide modal-accessories" style="background-image: url('${img4}'); background-size: 50%">   </div>
    
      </div>
    </div>
    <div class="slider-arrows">
      <button type="button" class="prev">&larr;</button>
      <button type="button" class="next">&rarr;</button>
    </div>
    </div>
    <div class="product-desc-container">
      <h1 class="prod-title">${name}</h1>
      <p class="prod-desc">${type}</p>
      <p class="prod-desc">${price}£</p>
      <p class="prod-desc description-modal">${desc}</p>
      <div class="btn-more-cont modal-button">
        <button class="btn-custom">Buy</button>
  
      </div>
    </div>
  </div>
    `;
      modalContainer.style.display = "block";
      modalContainer.innerHTML = productModalLiteral;

      const crossCloseModal = document.querySelector(".icon-cross");
      crossCloseModal.addEventListener("click", function () {
        modalContainer.style.display = "none";
      });
      Slider();
    })
  );
}
displayModal(bikeClothes1);
// --------------------SEARCH Clothes via types--------------------

function clothesChangeTypes(objectAccessories) {
  const select = document.querySelector(".select-type");

  select.addEventListener("change", () => {
    const selectedType = select.value;

    if (selectedType !== "All") {
      const arrayOfSelectedTypes = objectAccessories.filter((ele) => {
        return ele.type === selectedType;
      });
      RenderAllclothes(arrayOfSelectedTypes);
    } else {
      RenderAllclothes(bikeClothes1);
    }
  });
}

clothesChangeTypes(bikeClothes1);
