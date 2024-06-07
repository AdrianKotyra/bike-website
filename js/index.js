

// --------------------PREMADE SLIDER FUNCTION (NOT MINE)--------------------

//slider autoslider
setTimeout(() => {
  setInterval(function () {
    $(".x")? 
    $(".x").each(function () {
        $(this).removeClass('x magicStartLoop').animate({
            right: $(this).innerWidth()
        }, 850, function () {
            $(this).addClass('hidden-slider').removeAttr("style");
        });
        $(this).next().removeClass("hidden-slider").addClass("x magicStartLoop");
        if ($(".sliderContainer").children().last().hasClass("magicStartLoop")) {
            setTimeout(function () {
                $(".sliderContainer").children().first().removeClass("hidden-slider").addClass("x magicStartLoop");
            }, 4000);// <===Interval time
        }
    }) : null
  }, 4000);
}, 1000);//  <=== delay

//slider on click
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
// ------------------------------DISPLAY MORE ON CLICK---------------------------------


function displayeReadMore(readMoreObject) {
    const allTriggersReadMore = document.querySelectorAll(".read-more-trigger");
    let modalWindow = document.querySelector(".modal-container");
    const body = document.querySelector("body");
    allTriggersReadMore.forEach(btn=>btn.addEventListener("click", function(){
        const indexOfObject = btn.getAttribute("id");
      
        readMoreModalObjectLiteral = `<div class="modal-container-box modal-read-more col">
        
        <img class="icon-cross"src="./imgs/cross.svg" alt=""> 
    
        <div class="read-more-row row">
          <div>
            <p>${readMoreObject[indexOfObject].text[0]}</p>
          </div>
          <img src=${readMoreObject[indexOfObject].imgs[0]} alt="">
    
    
    
        </div>
    
        <div class="read-more-row row-reverse">
          <div>
            <p>${readMoreObject[indexOfObject].text[1]}</p>
          </div>
          <img src=${readMoreObject[indexOfObject].imgs[1]} alt="">
    
          
    
        </div>
        <div class="read-more-row row">
          <div>
            <p>${readMoreObject[indexOfObject].text[2]}</p>
          </div>
          <img src=${readMoreObject[indexOfObject].imgs[2]} alt="">
    
          
    
        </div>
        </div>`

        modalWindow.innerHTML=readMoreModalObjectLiteral;
     
        body.style.overflowY="hidden";
        modalWindow.style.display="block";
        const crossCloseModal = document.querySelector(".icon-cross");
        crossCloseModal.addEventListener("click", function(){
            modalWindow.style.display="none"
            body.style.overflowY="scroll";
        })
    }))



}

displayeReadMore(readMore)


// ------------------------------modal windows hirebike and accessories---------------------------------

const modalHireBike = ` <div class="modal-container-box modal-hire">
<img class="icon-cross"src="./imgs/cross.svg" alt="">
<div class="hire-bike-modal">
<h1>What kind of bike you need?</h1>
<p class="rent-p"> At our rental shop, we provide a diverse range of top-quality bikes suited for various preferences and skill levels. 
Here are three kinds of bikes you can rent</p3>
<div class="hire-bike-imgs-container">

    <div class="img-container-hire">
        <a target="_blank"href="hybrid-bikes.html">
            <p class="hire-bike-bike-title">Hybrid bike</p>
    
            <img class="img-hire"src="./imgs/hybrid-bike.jpg" alt="">
        </a>
    </div>


    <div class="img-container-hire">
        <a  target="_blank"href="mountain-bikes.html">
            <p class="hire-bike-bike-title">Mountain bike</p>
            <img class="img-hire" src="./imgs/mountain-bike.jpg" alt="">
        </a>
    </div>
  
   
      
    <div class="img-container-hire">
        <a target="_blank" href="fat-bikes.html">
            <p class="hire-bike-bike-title">Fat bike</p>
            <img class="img-hire" src="./imgs/fat-bike.jpg" alt="">
        </a>
    </div>
   
 
    

</div>

</div>
</div>`

const modalBuyAccessories = ` <div class="modal-container-box modal-hire">
<img class="icon-cross"src="./imgs/cross.svg" alt="">
<div class="hire-bike-modal">
<h1>What do you need for your Bike?</h1>
<p class="rent-p"> Bikes King offers a comprehensive range of accessories to enhance your biking experience. Whether you're gearing up for an urban commute or an off-road adventure, we have you covered. Our accessories collection includes everything from safety gear like helmets and reflective 
vests to practical additions such as bike racks and panniers for carrying your essentials. </p3>
<div class="hire-bike-imgs-container">

    <div class="img-container-hire">
        <a target="_blank"href="bikes.html">
            <p class="hire-bike-bike-title">Bike</p>
    
            <img class="img-hire"src="./imgs/bg.png" alt="">
        </a>
    </div>


    <div class="img-container-hire">
        <a  target="_blank"href="clothes.html">
            <p class="hire-bike-bike-title">Clothes</p>
            <img class="img-hire" src="./imgs/bike-clothing.jpg" alt="">
        </a>
    </div>
  
   
      
    <div class="img-container-hire">
        <a target="_blank" href="accessories.html">
            <p class="hire-bike-bike-title">Accessories</p>
            <img class="img-hire" src="./imgs/helmet-modal.jpg" alt="">
        </a>
    </div>
   
 
    

</div>

</div>
</div>`







// ------------------------------RENDER FEEDBACKS ON CLICK MAP OBJECT---------------------------------
function renderFeedbackSlider(object){
    const feedback_container = document.querySelector(".feedback_container");
    object.map(ele => {
        feedback_container ? feedback_container.innerHTML += 
        `  
        <div class="feedback-col box-1" style="background-image: url('${ele.img}')">
            <div class="text-feed-col">
                <p>${ele.name}</p>
                <span class="cursive">
                    "${ele.feedback}"</span>
            </div>
        </div>`
        : null
    })  
     
  
}

renderFeedbackSlider(feedbackSlider)
function renderFeedback(object){
    const feedbackContainer = document.querySelector(".feedback-container");
    object.map(ele=>{
        feedbackContainer? feedbackContainer.innerHTML += 
       
        `  
        <div class="feedback-card col" data-id=${object.indexOf(ele)}>
          <p class="feedback-person"> ${ele.feedback}
          </p>
          <div class="feedback-person-img-container row">
            <img src="${ele.img}" >
            <div class="feedback-person-name col">
              <p class="person-name">${ele.personName}</p>
              <div class="stars-container-${ele.id}"
        
               
              
              </div>
            </div>
          </div>
        
        </div>
       ` : null
        const starsContainer = document.querySelector(".stars-container-"+ele.id);
      
        const starImage = '<img class="star-icon" src="./imgs/star.svg">'
        for(let i=0;i<ele.stars; i++) {

            starsContainer?starsContainer.innerHTML+=starImage : null
            
          
        }
      
    }
 
  )

}
    


const triggerFeedbacks = document.querySelector(".feedback-trigger");
triggerFeedbacks? triggerFeedbacks.addEventListener("click", function(){
    const gridFeedback = document.querySelector(".feedback-container");
    gridFeedback.style.display="grid";
    // inititate single modal feedback card function
    triggerFeedbacks.style.visibility="hidden"
    renderFeedback(feedbacks)
    renderSingleFeedback(feedbacks)
}) : null
  




// ------------------------------DROPDOWN NAV---------------------------------


function dropDownTrigger(){
    const dropDownTriggerProducts = document.querySelector(".drop-down-trigger-products");
    const allDropds = document.querySelectorAll(".dropdown-all");
    dropDownTriggerProducts.addEventListener("click", function(){
        
        const dropBox = document.querySelector(".products-dropdown-container");
       dropBox.style.display==="block"? dropBox.style.display="none" : dropBox.style.display="block"
    
        
     });

        
    
    const dropDownTriggerBikes = document.querySelector(".drop-down-trigger-bikes");
    dropDownTriggerBikes.addEventListener("click", function(){
        const dropBox = document.querySelector(".bikes-dropdown-container");
       dropBox.style.display==="block"? dropBox.style.display="none" : dropBox.style.display="block"

      
    })
}
    
  
dropDownTrigger() 
// ------------------------------INDEX SLIDER BIKES---------------------------------

function topSliderBikes(objects, timeout) {
    const imageBike = document.querySelector(".top-bike-img");
  

    const speedBikeHours = document.querySelector(".bootom-text-top2 h3");
    const speedBikeWeight = document.querySelector(".bootom-text-top2-second h3");
    const titleBike = document.querySelector(".title-bike h3");
    let currentIndex = 0;
    imageBike? setInterval(() => {
       
        currentIndex = (currentIndex + 1) % objects.length;
        
        imageBike.style.animation="topBiklesAnimation 0.8s forwards"
        setTimeout(() => {
            imageBike.style.animation=""
        }, 501);

        imageBike.src = objects[currentIndex].imageBike;
     
       
        speedBikeHours.innerHTML = objects[currentIndex].speedBikeHours;
        speedBikeWeight.innerHTML = objects[currentIndex].speedBikeWeight;
        titleBike.innerHTML = objects[currentIndex].titleBike;
    }, timeout) : null;
    
}


topSliderBikes(BikesTopSliderObjects, 3000)


// ------------------------------MODAL HIRE BIKES---------------------------------


function hireBikeModal(modal){
   
    const modalContainer = document.querySelector(".modal-container");
    const body = document.querySelector("body");

    modalContainer.innerHTML=modal;
    body.style.overflowY="hidden";
    modalContainer.style.display="block";
    const crossCloseModal = document.querySelector(".icon-cross");
    crossCloseModal.addEventListener("click", function(){
        modalContainer.style.display="none"
        modalContainer.innerHTML=modal;
        body.style.overflowY="scroll";
    })

}

const triggerRentBike = document.querySelector(".hire-bike-trigger");
triggerRentBike? triggerRentBike.addEventListener("click", function(){
    hireBikeModal(modalHireBike)
})
: null


// ------------------------------MODAL ACCESSORIES---------------------------------

function buyAccessoriesModal(modal){
   
    const modalContainer = document.querySelector(".modal-container");
    const body = document.querySelector("body");
    body.style.overflowY="hidden";
    modalContainer.innerHTML=modal;
    modalContainer.style.display="block";
    const crossCloseModal = document.querySelector(".icon-cross");
    crossCloseModal.addEventListener("click", function(){
        modalContainer.style.display="none"
        body.style.overflowY="scroll";
    })

}

const triggerbuyAccessories = document.querySelector(".accessories-trigger-modal");
triggerbuyAccessories? triggerbuyAccessories.addEventListener("click", function(){
    buyAccessoriesModal(modalBuyAccessories)
})
: null



// ------------------------------MOBILE NAV---------------------------------
function mobileDropDowns(dropDownContainer, dropDownTrigger) {

    dropDownTrigger.addEventListener("click", function(){
        dropDownContainer.style.display==="none" ? dropDownContainer.style.display="flex" : dropDownContainer.style.display="none";
        
    })
    
}   



const productsMobileTriggerDropdown = document.querySelector(".products-dropdown-mobile-container");
const productsMobileDropdown = document.querySelector(".products-dropdown-mobile");
productsMobileDropdown.style.display="none"

mobileDropDowns(productsMobileDropdown, productsMobileTriggerDropdown )



const hireMobileTriggerDropdown = document.querySelector(".hire-dropdown-mobile-container");
const hireMobileDropdown = document.querySelector(".rent-dropdown-mobile");
hireMobileDropdown.style.display="none"





mobileDropDowns(hireMobileDropdown, hireMobileTriggerDropdown )
const mobileNav = document.querySelector(".mobile-nav");
mobileNav.style.display="none"

// ------------------------------MOBILE NAV---------------------------------
function displayMobile(){
   
    
    const hamb = document.querySelector(".burger-box");
    hamb.addEventListener("click", function(){
        mobileNav.style.display==="none" ? mobileNav.style.display="block" : mobileNav.style.display="none";
    })
}
displayMobile()


// ------------------------------NEWSLETTER---------------------------------

function newsLetterModal(){
    
    const InputValue = document.querySelector(".newsLetterInput").value;
    const newsLetter = `
    <div class="newsletter-modal">
        <img class="icon-cross exit-window"src="./imgs/cross.svg" alt="">
        <div class="newsletter-modal-container col">
        
            <img src="./imgs/letter.svg" alt="">
            <div class="text-letter">
            <h1>Thank you for your subscription !</h1>
            <h1> ${InputValue} </h1>
          
            <button class="btn-custom exit-window">OK</button>
            </div>


            </div>
        </div>
    `
    const modalContainer = document.querySelector(".modal-container");
    const body = document.querySelector("body");
    body.style.overflowY="hidden";
    modalContainer.innerHTML=newsLetter;
    modalContainer.style.display="block";
    const crossCloseModal = document.querySelectorAll(".exit-window");
    crossCloseModal.forEach(element => {
        element.addEventListener("click", function(){
            modalContainer.style.display="none"
            body.style.overflowY="scroll";
        })
        
    });
}

const triggerNewLetter = document.querySelector(".submit_newsletter");

triggerNewLetter.addEventListener("click", function(event){
    letterRequired = /@/;
    const info = document.querySelector(".info-news");
    event.preventDefault()
    const InputValue = document.querySelector(".newsLetterInput").value;
    if(InputValue.length>=4 &&  letterRequired.test(InputValue) && !info.classList.contains("subscribed")) {

        newsLetterModal()
        info.innerHTML="You have Subscribed"
        info.classList.add("subscribed")
    }
    else if (info.classList.contains("subscribed")) {
        info.innerHTML="You have Subscribed"
    }
    else {
        info.innerHTML="Please enter valid email at least 4 letters and cotnains '@'"
    }
})
// ------------------------------SHOW BIKES ELEMENTS---------------------------------
function BikeRepair(){
    
    function offOnContent(trigger, content){
        trigger? 
        trigger.addEventListener("mouseover", function(){
            content.style.animation="bikeRepairAniamtion 0.5s forwards"
            content.style.display="block"
        }) : null
        trigger? 
        trigger.addEventListener("mouseout", function(){
            content.style.animation="bikeRepairAniamtionBackwards 0.5s forwards"
         
            
        }) :null
    }
    const saddleTrigger = document.querySelector(".saddle-trigger");
    const saddleContent = document.querySelector(".saddle-container")
    offOnContent(saddleTrigger, saddleContent )
   
    const frameTrigger = document.querySelector(".frame-trigger");
    const frameContent = document.querySelector(".frame-container")
    offOnContent(frameTrigger, frameContent )

    const brakesTrigger = document.querySelector(".brakes-trigger");
    const brakesContent = document.querySelector(".brakes-container")
 
    offOnContent(brakesTrigger, brakesContent )

    const handlesTrigger = document.querySelector(".handles-trigger");
    const handlesContent = document.querySelector(".handles-container")
 
    offOnContent(handlesTrigger, handlesContent )

    const railsTrigger = document.querySelector(".rails-trigger");
    const railsContent = document.querySelector(".rails-container")
 
    offOnContent(railsTrigger, railsContent )
}
BikeRepair()

// ------------------------------Locations change---------------------------------
function displayOnHover(objectLocation){
    const locationsContainer = document.querySelector(".service-container-box")
    const mapContainer = document.querySelector(".map-box");
    const address = document.querySelector(".address-map")
    
    const locations = document.querySelectorAll(".locations");
    locations.forEach(location=>location.addEventListener("click", function(){
        const city = location.getAttribute("city");
 
        for (let i=0;i<objectLocation.length;i++) {

            const cityNameFromObject = Object.keys(objectLocation[i])[0];
            const cityAddress= Object.values(objectLocation[i])[1];
            if(cityNameFromObject===city) {
                locationsContainer.style.animation="locationsAnimation 0.5s forwards"
                const imgElement =  location.querySelector(".city-img");
                const allImagesLocation = document.querySelectorAll(".city-img");

                allImagesLocation.forEach(img=>img.classList.remove("city-img-active"))

                setTimeout(() => {
                  imgElement.classList.add("city-img-active")
                  address.innerHTML=cityAddress
                    
                }, 1);
                setTimeout(() => {
                  address.style.display="block"
                 
                }, 600);

               
                
             

                setTimeout(() => {
                    mapContainer.style.display="block";
                    
                    
                }, 501);
               

                mapContainer.innerHTML=objectLocation[i][city];
                
            }
        }
      
      


        
        
    }) )

  

}
displayOnHover(locationObject)

// ------------------------------INTERSECTION ELE(ELEMENT TO DISPPLAY) TRIGGER (INTERSECTED ELEMENT)---------------------------------

function ShowEle(ele, trigger, animationClass) {
    function ObsCallback (entries) {
        const [entry] = entries
        if(entry.isIntersecting===true) {
            ele.classList.add(animationClass)
        }
        
    }
    const ObsOptions = {
        root:null,
        threshold: 0,
        rootMargin: '-100px'
    }
    const observer = new IntersectionObserver(ObsCallback, ObsOptions)
    trigger?  observer.observe(trigger) : null;
   
}



const intersectedElement1 = document.querySelector(".hidden-service-para1");
const trigger1 = document.querySelector(".trigger-hidden1");
const intersectedElement2 = document.querySelector(".hidden-service-para2");
const trigger2 = document.querySelector(".trigger-hidden2");
const intersectedElement3 = document.querySelector(".hidden-service-para3");
const trigger3 = document.querySelector(".trigger-hidden3");
const intersectedElement4 = document.querySelector(".hidden-service-para4");
const trigger4= document.querySelector(".trigger-hidden4");
const intersectedElement5 = document.querySelector(".hidden-service-para5");
const trigger5 = document.querySelector(".trigger-hidden5");
const intersectedElement6 = document.querySelector(".hidden-service-para6");
const trigger6 = document.querySelector(".trigger-hidden6");



ShowEle(intersectedElement1, trigger1, "visible-service")
ShowEle(intersectedElement2, trigger2 , "visible-service")
ShowEle(intersectedElement3, trigger3 , "visible-service")
ShowEle(intersectedElement4, trigger4, "visible-service" )
ShowEle(intersectedElement5, trigger5 , "visible-service")
ShowEle(intersectedElement6, trigger6 , "visible-service")

const videoText = document.querySelector(".video-text");
const videoTextTrigger = document.querySelector(".anchor_video");
ShowEle(videoText, videoTextTrigger, "videoTextAnimation")


const aboutHeader1 = document.querySelector(".about-header1");
const aboutHeader2 = document.querySelector(".about-header2");
const aboutHeader3 = document.querySelector(".about-header3");
const aboutHeader4 = document.querySelector(".about-header4");

const aboutHeaderTrigger1 = document.querySelector(".about-header1-trigger");
const aboutHeaderTrigger2 = document.querySelector(".about-header2-trigger");
const aboutHeaderTrigger3 = document.querySelector(".about-header3-trigger");
const aboutHeaderTrigger4 = document.querySelector(".about-header4-trigger");

ShowEle(aboutHeader1, aboutHeaderTrigger1, "visible-service")
ShowEle(aboutHeader2, aboutHeaderTrigger2, "visible-service")
ShowEle(aboutHeader3, aboutHeaderTrigger3, "visible-service")
ShowEle(aboutHeader4, aboutHeaderTrigger4, "visible-service")


const rental1 = document.querySelector(".rental-p1");
const rental2 = document.querySelector(".rental-p2");
const rental3 = document.querySelector(".rental-p3");

const rental1Anchor = document.querySelector(".rental-anchor1");
const rental2Anchor = document.querySelector(".rental-anchor2");
const rental3Anchor = document.querySelector(".rental-anchor3");

ShowEle(rental1, rental1Anchor, "visible-service")
ShowEle(rental2, rental2Anchor, "visible-service")
ShowEle(rental3, rental3Anchor, "visible-service")

const aboutText = document.querySelector(".about-text-container")
const aboutTextAnchor = document.querySelector(".anchorAbout")
ShowEle(aboutText, aboutTextAnchor, "rightToleftFade")

const textMidContainer = document.querySelector(".text-mid-container-accessories")
const anchorSliderSection = document.querySelector(".anchorSliderSection")
ShowEle(textMidContainer, anchorSliderSection, "visible-service")

const textTopLeft = document.querySelector(".text-section-top");
const textTopLeftAnchor = document.querySelector(".anchor-left-text-top");

ShowEle(textTopLeft, textTopLeftAnchor, "rightToleftFade")

const chooseParagraphTrigger1 = document.querySelector(".choose-p-trigger1");

function ShowEleChoose(trigger, animationClass) {
    const chooseParagraph1 = document.querySelector(".choose-section > div:nth-child(1)");
    const chooseParagraph2 = document.querySelector(".choose-section > div:nth-child(2)");
    const chooseParagraph3 = document.querySelector(".choose-section > div:nth-child(3)");
    const chooseParagraph4 = document.querySelector(".choose-section > div:nth-child(4)");

    function ObsCallback (entries) {
        const [entry] = entries
        if(entry.isIntersecting===true) {
            chooseParagraph1.classList.add(animationClass)
            setTimeout(() => {
                chooseParagraph2.classList.add(animationClass)
            }, 300);
            setTimeout(() => {
                chooseParagraph3.classList.add(animationClass)
            }, 600);
            setTimeout(() => {
                chooseParagraph4.classList.add(animationClass)
            }, 900);
        }
      
        
    }
    const ObsOptions = {
        root:null,
        threshold: 0,
        rootMargin: '-100px'
    }
    const observer = new IntersectionObserver(ObsCallback, ObsOptions)
    trigger?  observer.observe(trigger) : null;
   
}


ShowEleChoose(chooseParagraphTrigger1, "visible-service" )


const serviceColsTrigger = document.querySelector(".anchor-service-cols");

function ShowServiceCols(trigger) {
  const serviceCols = document.querySelectorAll(".col-service");
  const serviceColsTexts = document.querySelectorAll(".col-service .text");

  function ObsCallback (entries) {
      const [entry] = entries
      if(entry.isIntersecting===true && window.innerWidth > 605) { 
        serviceCols.forEach(ele=>ele.style.display="table")
        setTimeout(() => {
          serviceColsTexts.forEach(ele=>ele.style.display="table")
        }, 700);
    
      }
    
      
  }
  const ObsOptions = {
      root:null,
      threshold: 0,
      rootMargin: '0px'
  }
  const observer = new IntersectionObserver(ObsCallback, ObsOptions)
  trigger?  observer.observe(trigger) : null;
 
}

ShowServiceCols(serviceColsTrigger)




// ------------------------------Render FAQ from data then create function to use it---------------------------------
function renderFaq(data){
    const faqContainer = document.querySelector(".faq-container");
   
    data.map(ele=> faqContainer.innerHTML+=`
        <div class="col-50">
            <div class="row">
                <p>${ele.question}</p>

                <span class="material-symbols-outlined icon-red addCordian">
                add
                </span>
                
            </div>

            <div class="content-faq">
                ${ele.answer}
            </div>
        </div>`
        
    )
   

    const allCordiansSymbols = document.querySelectorAll(".addCordian");
    allCordiansSymbols.forEach(cordianSymbol=>cordianSymbol.innerHTML="add")
}
renderFaq(faqQuestionsAnswers)


function faqCordians(){
    cordiansTriggers = document.querySelectorAll(".faq-container .col-50");
    
    cordiansTriggers.forEach(ele=>ele.addEventListener("click", function(){

        const eachQuestionSymbol = ele.querySelector(".material-symbols-outlined");
        const eachQuestionAnswer = ele.querySelector(".content-faq");

        eachQuestionSymbol.innerHTML = eachQuestionSymbol.innerHTML === "add" ? "remove" : "add";
        eachQuestionAnswer.style.display = eachQuestionAnswer.style.display === "block" ? "none" : "block";


      

    }))
}
faqCordians()

// ------------------------------Contact Form Main---------------------------------
function submitContactForm(){
    const formMain = document.querySelector(".form-main");
    const msgContainer = document.querySelector(".contact-container-msg");
    formMain? 
    formMain.addEventListener("submit", function(event){
        event.preventDefault();
        msgContainer.style.display="block";
    }) : null
  


}

submitContactForm()

// ------------------------------Contact Form contact page---------------------------------

function submitContactFormContact(){
    const contactForm = document.querySelector(".contact-form-page");
    const body = document.querySelector("body")
    const modalMain = document.querySelector(".modal-container");

    const messageAccepted = ` <div class="message-contact-form">
    <div class="row">
      <div class="col">
        <h1 class="header">We value your feedback</h1>
        <p>We would like to hear about your recent exeperience with Bike King road,<br> Thank you for your message</p>
       
      </div>

      <img src="./imgs/graphic-bike3.jpg" alt="">

    </div>
   
    <button class="btn-custom accept-btn-contact-form">OK</button>
   </div>`
    const messageRejected = ` <div class="message-contact-form">
    <div class="row">
      <div class="col">
        <h1 class="header">Your form already been submitted</h1>
        
       
      </div>

      <img src="./imgs/graphic-bike.jpg" alt="">

    </div>
   
    <button class="btn-custom accept-btn-contact-form">OK</button>
   </div>`

   
    contactForm? contactForm.addEventListener("submit", function(event){
        const createModalMEssage = function(message){
            body.style.overflowY="hidden"
            modalMain.style.display="block"
            event.preventDefault();
            modalMain.innerHTML=message
        }
        
      

       

        if(!contactForm.classList.contains("submitted")) {
            contactForm.classList.add("submitted");
            createModalMEssage(messageAccepted)
    
        }
        else {
            createModalMEssage(messageRejected)
    
        }


        const acceptButton = modalMain.querySelector(".accept-btn-contact-form");
           acceptButton.addEventListener("click", function(){
            modalMain.style.display="none"
            body.style.overflowY="scroll"
        })

    }) : null
  


}

submitContactFormContact()

// ------------------------------Calendar Render---------------------------------
function renderCallendar(){
  const daysTag = document.querySelector(".days");
  const currentDate = document.querySelector(".current-date");
  const prevNextIcon = document.querySelectorAll(".icons span");
  
  let currYear = new Date().getFullYear();
  let currMonth = new Date().getMonth();
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const renderCalendar = () => {
      const date = new Date(currYear, currMonth, 1);
      let firstDayofMonth = date.getDay();
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
      let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
      let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  
      let liTag = "";
  
      for (let i = firstDayofMonth; i > 0; i--) {
          liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }
  
      for (let i = 1; i <= lastDateofMonth; i++) {
          let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
          liTag += `<li class="${isToday}">${i}</li>`;
      }
  
      for (let i = lastDayofMonth; i < 6; i++) {
          liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
      }
  
      currentDate.innerText = `${months[currMonth]} ${currYear}`;
      daysTag.innerHTML = liTag;
  };
  
  renderCalendar();
  const daysCallendar = document.querySelectorAll(".calendar .days li")
  selectUnselectT(daysCallendar)
  prevNextIcon.forEach(icon => {
      icon.addEventListener("click", () => {
          currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
  
          if (currMonth < 0 || currMonth > 11) {
              currYear = icon.id === "prev" ? currYear - 1 : currYear + 1;
              currMonth = currMonth < 0 ? 11 : 0;
          }
          
          renderCalendar();
          const daysCallendar = document.querySelectorAll(".calendar .days li")
          selectUnselectT(daysCallendar)
      });
  });
}


// ------------------------------helper function add class remove class---------------------------------

function selectUnselectT(Elements){
  const activeClass = "selected";
  Elements.forEach(ele=>ele.addEventListener("click", ()=> {

    Elements.forEach(ele=>ele.classList.remove(activeClass))
    setTimeout(() => {
      ele.classList.add(activeClass);
    }, 1);
   
  }))
 
}
function closeModal(){
  const modalContainer = document.querySelector(".modal-container");
  const crossCloseModal = document.querySelectorAll(".exitModal");
    // ----exit modal----
    crossCloseModal.forEach(element => {
      element.addEventListener("click", function(){
          modalContainer.style.display="none"
         
          
      })
      
     
    });
}

// ------------------------------APPOINTEMNT MODAL---------------------------------



function modalAppointment() {
 
  const btnAppointment = document.querySelectorAll(".appointment-button");
  const modalContainer = document.querySelector(".modal-container");
  const modalAppointment = `
  <img class="icon-cross exitModal"src="./imgs/cross.svg" alt=""> 
  <div class="book-modal">
    <div class="book-modal-container">
      <h3>Set Appointment Type</h3>
      <div class="select-type-container row">
        <div class="col-100">
          <div class="type-col">
            <p>I want to get my bike repaired.</p>
          </div>
          <div class="type-col">
            <p>I want to select and buy a bike.</p>
          </div>
        </div>
        <div class="col-100">
          <div class="type-col">
            <p>I want to hire a bike</p>
          </div>
          <div class="type-col">
            <p>I want to collect my serviced product.</p>
          </div>
        </div>
      </div>
    </div>
    <h3>Select Time</h3>
    <div class="time-table col-100">
      <div class="wrapper col-50">
        <header>
          <p class="current-date"></p>
          <div class="icons">
            <span id="prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
              </svg> 
            </span>
            <span id="next">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
              </svg>
            </span>
           </div>
        </header>
        <div class="calendar">
          <ul class="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul class="days"></ul>
        </div>
      </div>
      <div class="time-grid col-50">
        <div class="time-col">
          <p> 10.00 AM</p>
        </div>
        <div class="time-col">
          <p> 11.00 AM</p>
        </div>
        <div class="time-col">
          <p> 12.00 PM</p>
        </div>
        <div class="time-col">
          <p> 13.00 PM</p>
        </div>
        <div class="time-col">
          <p> 14.00 PM</p>
        </div>
        <div class="time-col">
          <p> 15.00 PM</p>
        </div>
        <div class="time-col">
          <p> 16.00 PM</p>
        </div>
        <div class="time-col">
          <p> 17.00 PM</p>
        </div>
        <div class="time-col">
          <p> 18.00 PM</p>
        </div>
        <div class="time-col">
          <p> 19.00 PM</p>
        </div>
      </div>
    </div>
    <h3>Select Location</h3>
    <div class="location-select">
      <div class="loc-col">
        <p>Edinburgh</p>
      </div>
      <div class="loc-col">
        <p>Glasgow</p>
      </div>
      <div class="loc-col">
        <p>Dundee</p>
      </div>
      <div class="loc-col">
        <p>Inverness</p>
      </div>
      <div class="loc-col">
        <p>Aberdeen</p>
      </div>
    </div>
    <h3>Comments</h3>
    <div class="row comment-container"> 
      <div class="half">
        <textarea id="" cols="30" rows="10" required>

        </textarea>
      
      </div>

      <img src="./imgs/bikeillu2.svg" alt="">
    
    </div>
   
    <button class="btn-custom confirmAppointement">Confirm</button>
    <div class="message_modal_appointement"> </div>
  </div>
  `

  btnAppointment.forEach(btn=>btn.addEventListener("click", ()=>{
    modalContainer.innerHTML=modalAppointment;
    modalContainer.style.display="block";
   
    const typeColumnsAll = document.querySelectorAll(".type-col");
 

    selectUnselectT(typeColumnsAll)
    renderCallendar()

    const timeCol = document.querySelectorAll(".time-col");
    selectUnselectT(timeCol)

   
    const locations = document.querySelectorAll(".loc-col");
    selectUnselectT(locations)



    const btnConfirm = document.querySelector(".confirmAppointement");

    btnConfirm.addEventListener("click", ()=> {
      const messageContainer = document.querySelector(".message_modal_appointement")
      const currentDate = document.querySelector(".current-date").innerHTML;
      const appointmentDetails = [];

      const activeElements = document.querySelectorAll('.selected');
      activeElements.forEach(element => {
        appointmentDetails.push(element.innerHTML);

       
       
      });
      const messageApproval = `
      <div class="message_appointement"> 
      <img class="icon-cross exitModal"src="./imgs/cross.svg" alt=""> 
      <h3> Appointements Details </h3>
        <p> ${appointmentDetails[0]} </p>
        <p> ${appointmentDetails[1]}  ${currentDate}</p>
        <p> ${appointmentDetails[2]}</p>
        <p> ${appointmentDetails[3]} </p>
        <button class="btn-custom exitModal"> OK </button>
      </div>
      `
      appointmentDetails.length===4?  modalContainer.innerHTML=messageApproval : 
      messageContainer.innerHTML="Select all appointements options"
     
      closeModal()
    })
   
    closeModal()
  }))


 
}
modalAppointment()


// ------------------------------video modal---------------------------------
function videoModal(){
    
  const video = `
  <div class="newsletter-modal video-modal">
    <div class="icon-bg">
    </div>
    <img class="icon-cross exit-window"src="./imgs/cross.svg" alt="">
    

    "
    <iframe class="video-bike"width="100%" height="100%" src="https://www.youtube.com/embed/_T7NTe3uBN4?si=EGjGxO0lOSRKWRrJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  </div>
  `
  const modalContainer = document.querySelector(".modal-container");
  const body = document.querySelector("body");
  body.style.overflowY="hidden";
  modalContainer.innerHTML=video;
  modalContainer.style.display="block";
  const crossCloseModal = document.querySelectorAll(".exit-window");
  crossCloseModal.forEach(element => {
      element.addEventListener("click", function(){
          modalContainer.style.display="none"
          body.style.overflowY="scroll";
          var stopVideos = function () {
            var videos = document.querySelectorAll('.video-bike');
            Array.prototype.forEach.call(videos, function (video) {
                if (video.tagName.toLowerCase() === 'video') {
                    video.pause();
                } else {
                    var src = video.src;
                    video.src = src;
                }
            });
        };
        stopVideos()
      })
      
  });
}
const videoTrigger = document.querySelector(".watch-video-button");
videoTrigger? videoTrigger.addEventListener("click", ()=> {
  videoModal()
}) : null


// ------------------------------contact maps modal---------------------------------



function renderMaps(object){

  const body = document.querySelector("body");
  const modalMain = document.querySelector(".modal-container");
  const CitiesMaps = document.querySelectorAll(".map-loc-contact");
  CitiesMaps.forEach((city)=>{
    city.addEventListener("mouseover", ()=>{
      body.style.overflowY="hidden";
      const cityData = city.getAttribute("data-city");
      const objectFromDataAddress = object.find(ele=>Object.keys(ele)[0]===cityData)
      const iframeMap = Object.values(objectFromDataAddress)[0]

      const mapModal = `
      <div class="modal-container-map">
        <img class="icon-cross exitModal"src="./imgs/cross.svg" alt=""> 
        ${iframeMap}
       
        

        </div>
      `

      modalMain.style.display="block"
      modalMain.innerHTML=mapModal

      const crossCloseModal = document.querySelector(".exitModal");
      crossCloseModal.addEventListener("click", ()=>{
        modalMain.style.display="none"
        body.style.overflowY="scroll";
      })
    })
  })
}

renderMaps(locationObject)


// ------------------------------render single modal feedback card---------------------------------

function renderSingleFeedback(object){
  const body = document.querySelector("body")
  const modalContainer = document.querySelector(".modal-container");
  const feedbackCards = document.querySelectorAll(".feedback-card");

  feedbackCards.forEach(card=>card.addEventListener("click", ()=>{
    body.style.overflowY="hidden";

    cardIndex = card.getAttribute("data-id")
    const nameCustomer = object[cardIndex].personName;
    const feedbackCustomer = object[cardIndex].feedback;
    const extrafeedbackCustomer = object[cardIndex].feedback;
    const imgCustomer = object[cardIndex].img;

    modalContainer.style.display="block";
    modalContainer? modalContainer.innerHTML = ` <div class="feedback-modal-container">
    <img class="icon-cross exit-window feedback-cross"src="./imgs/cross.svg" alt="">
    <div class="feedback-modal row">
      <div class="col-50 col">
        <h1>What our customers are saying</h1>
        <p>We appreciate your feedback and will carefully consider your suggestions to improve our services. 
        Your input is invaluable to us, and it plays a crucial role in helping us enhance our offerings to better meet your needs. </p> 
        <button class="btn-custom btn-feedback"> leave your feedback </button>
       
      </div>
      <div class="feedback-section-modal col-50">
        <div class="customer-card-feedback">
      
          <img src="${imgCustomer}" alt="">
          <div class="text-container-modal-feedback">
            <p>"${feedbackCustomer}"</p>
       
            <div class="customer-name-stars-container row">
              <p>${nameCustomer}</p>
              <div class="star-card-feedback row">
                <img class="star-icon" src="./imgs/star.svg">
                <img class="star-icon" src="./imgs/star.svg">
                <img class="star-icon" src="./imgs/star.svg">
                <img class="star-icon" src="./imgs/star.svg">
                <img class="star-icon" src="./imgs/star.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ` : null 

  inititateFeedback() //<===change content to form

  const crossCloseModal = document.querySelector(".feedback-cross");
  crossCloseModal.addEventListener("click", function(){
    modalContainer.style.display="none"
      body.style.overflowY="scroll";
  })
  }))
  

 

}

function inititateFeedback(){
  const feedbackModalContainer = document.querySelector(".feedback-modal");
  const triggerButton = document.querySelector(".btn-feedback")
  const feedbackForm = ` <div class="feedback-leave">
        <form action="" class="row form-feedback">
          <div class="col-50 col">
            <h3 class="title">Rate Your Experience</h3>
            <div class="row">
              <div class="container_single_start">
                <img class="empty_star star_feedback1" src="./imgs/star-empty-icon.svg" alt="">
              </div>
              <div class="container_single_start">
                <img class="empty_star star_feedback2" src="./imgs/star-empty-icon.svg" alt="">
              </div>
              <div class="container_single_start">
                <img class="empty_star star_feedback3" src="./imgs/star-empty-icon.svg" alt="">
              </div>
              <div class="container_single_start">
                  <img class="empty_star star_feedback4" src="./imgs/star-empty-icon.svg" alt="">
              </div>
              <div class="container_single_start">
                  <img class="empty_star star_feedback5" src="./imgs/star-empty-icon.svg" alt="">
              </div>
            </div>
            <div class="col_input_container_default col_input_cont">
              <div class="input_box row">
                <div>
                  <p class="p_feedback">Fullname</p>
                  <input class="feedback_input" type="text" name="Fullname" id="subject_input"placeholder = "Name">
                </div>
                <div class="col_input_container_default col_input">
                  <p class="p_feedback">Subject</p>
                  <input class="feedback_input" type="text" name="Fullname" id="subject_input"placeholder = "Subject">
                </div>
              </div>
              <div class="input_box row">
                  <div>
                    <p class="p_feedback">Email Adress</p>
                    <input class="feedback_input" type="text" name="Email" id="subject_input" placeholder="Email">
                  </div>
                  <div class="col">
                    <p class="p_feedback">Upload your photo</p>
                    <input type="file" id="img" name="img" accept="image/*">
                  </div>
              </div>
  
            </div>
          
          </div>
  
          <div class="col-50 col">
            <div class="col_input_container_default col_input">
              <p class="p_feedback">FEEDBACK</p>
              <textarea name="" class="msg_feedback" id="message_container" cols="30" rows="10"></textarea>
              <button type="submit" id="feedback_button_form" class="btn-custom button_form"form="form1" value="Submit">send</button>
            </div>
          </div>
         
        </form>
          
      </div>`
     
    triggerButton.addEventListener("click", ()=>{
      feedbackModalContainer.innerHTML=feedbackForm
      changeStart() //<=== stars change function
    })
}

// ---CHANGE STAR SOURCE IMG ON CLICK---
function changeStart() {
  const start1 = document.querySelector(".star_feedback1")
  const start2 = document.querySelector(".star_feedback2")
  const start3 = document.querySelector(".star_feedback3")
  const start4 = document.querySelector(".star_feedback4")
  const start5 = document.querySelector(".star_feedback5")
  const listofstars_about = [start1,start2,start3, start4, start5]
  const stars_empty_feedback = document.querySelectorAll(".empty_star");
  stars_empty_feedback.forEach(star=>star.addEventListener("click", function(target){
      if(star.classList.contains("star_feedback1"))  {

          if(start1.getAttribute("src")==="./imgs/star-full-icon.svg") {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
              start1.src="./imgs/star-empty-icon.svg"
              }, 1);
          }

          else {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
                  start1.src="./imgs/star-full-icon.svg"

              }, 1);
          }

      }


      if(star.classList.contains("star_feedback2"))  {

          if(start2.getAttribute("src")==="./imgs/star-full-icon.svg") {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
              start1.src="./imgs/star-empty-icon.svg"
              start2.src="./imgs/star-empty-icon.svg"
              }, 0.00001);
          }
          else {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
                  start1.src="./imgs/star-full-icon.svg"
                  start2.src="./imgs/star-full-icon.svg"

              }, 0.00001);
          }

      }


      if(star.classList.contains("star_feedback3"))  {

          if(start3.getAttribute("src")==="./imgs/star-full-icon.svg") {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
              start1.src="./imgs/star-empty-icon.svg"
              start2.src="./imgs/star-empty-icon.svg"
              start3.src="./imgs/star-empty-icon.svg"
              }, 0.00001);
          }
          else {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
                  start1.src="./imgs/star-full-icon.svg"
                  start2.src="./imgs/star-full-icon.svg"
                  start3.src="./imgs/star-full-icon.svg"

              }, 0.00001);
          }

      }


      if(star.classList.contains("star_feedback4"))  {

          if(start4.getAttribute("src")==="./imgs/star-full-icon.svg") {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
              start1.src="./imgs/star-empty-icon.svg"
              start2.src="./imgs/star-empty-icon.svg"
              start3.src="./imgs/star-empty-icon.svg"
              start4.src="./imgs/star-empty-icon.svg"
              }, 0.00001);
          }
          else {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
                  start1.src="./imgs/star-full-icon.svg"
                  start2.src="./imgs/star-full-icon.svg"
                  start3.src="./imgs/star-full-icon.svg"
                  start4.src="./imgs/star-full-icon.svg"

              }, 0.00001);
          }

      }

      if(star.classList.contains("star_feedback5"))  {

          if(start5.getAttribute("src")==="./imgs/star-full-icon.svg") {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
              start1.src="./imgs/star-empty-icon.svg"
              start2.src="./imgs/star-empty-icon.svg"
              start3.src="./imgs/star-empty-icon.svg"
              start4.src="./imgs/star-empty-icon.svg"
              start5.src="./imgs/star-empty-icon.svg"
              }, 0.00001);
          }
          else {
              listofstars_about.forEach(start=>start.src="./imgs/star-empty-icon.svg")
              setTimeout(() => {
                  start1.src="./imgs/star-full-icon.svg"
                  start2.src="./imgs/star-full-icon.svg"
                  start3.src="./imgs/star-full-icon.svg"
                  start4.src="./imgs/star-full-icon.svg"
                  start5.src="./imgs/star-full-icon.svg"
              }, 0.00001);
          }

      }

  }))

}
