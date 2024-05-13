


// --------------------RENDER HIRE BIKES--------------------


function RenderBikes(object){
    const renderDiv = document.querySelector(".hire-bike-section");

    object.map(Bike=>
        renderDiv.innerHTML+= `
        <div class="hire-bike-section-container row section-container-hire">
            <div class="hire-bike-part-1 hire-bike-section-img-container">
            <span>${Bike.price}£</span>
            <img src="${Bike.img}" alt="">
            </div>
    
            <div class="hire-bike-part-2 hire-bike-section-info">
            <h3>${Bike.name}</h3>
            <p>${Bike.description}</p>
            <div class="text-icon-hire-row row"><img class="icon-hire" src="./imgs/bicycle.svg"><p>${Bike.type}</p></div>
            <div class="text-icon-hire-row row"><img class="icon-hire" src="./imgs/location.svg"><p>${Bike.location}</p></div>
            <div class="text-icon-hire-row row"><img class="icon-hire" src="./imgs/speedometer.svg"><p>${Bike.speed}km/h</p></div>
            <div class="text-icon-hire-row row">
            </div>
            <button class="btn-custom hire-btn" data-id=${Bike.id}>Hire</button>
            </div>
           
        </div>
        `

    
    
    
    )


}
const renderDivFat = document.querySelector(".hire-bike-section-fat");
const renderDivMountain = document.querySelector(".hire-bike-section-mountain");
const renderDivHybrid = document.querySelector(".hire-bike-section-hybrid");

renderDivFat? RenderBikes(BikesFat) : null;
renderDivMountain? RenderBikes(BikesMountain) : null;
renderDivHybrid? RenderBikes(BikesHybrid)  : null;


// --------------------MODAL RENT BIKE--------------------


function modalRentBike(object) {

  const modalContainer = document.querySelector(".modal-container");
  const hireButtons = document.querySelectorAll(".hire-btn");

  hireButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      let objectBike = null; 
      const bikeIdObject = btn.getAttribute("data-id");
    


      objectBike = object.find(bike => bike.id === parseInt(bikeIdObject)); 
      const bikeObjectLiteral = `
       <img class="icon-cross" src="./imgs/cross.svg" alt="">
      <div class="rent-bike-modal">
       
        <h1 class="header">${objectBike.name}</h1>
        <div class="slider image-bike-modal">
          <div class="slider-list modal-slide">
            <div class="slider-track">
              <div class="slide modal-slide" style="background-image: url('${objectBike.img}'); background-size: cover">   </div>
              <div class="slide modal-slide" style="background-image: url('${objectBike.img2}'); background-size: cover">   </div>
              <div class="slide modal-slide" style="background-image: url('${objectBike.img3}'); background-size: cover">   </div>
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
            <p>${objectBike.frame}</p>
          </div>
          <div class="row">
            <p>Grup set</p>
            <p>${objectBike.grupset}</p>
          </div>
          <div class="row">
            <p>Braking system</p>
            <p>${objectBike.brakingSystem}</p>
          </div>
          <div class="row">
            <p>Wheel</p>
            <p>${objectBike.wheel}</p>
          </div>
          <div class="row">
            <p>Velg aluminium</p>
            <p>${objectBike.velg}</p>
          </div>
          <div class="row">
            <p>Stang</p>
            <p>${objectBike.stang}</p>
          </div>
          <div class="row">
            <p>Pedal</p>
            <p>${objectBike.pedal}</p>
          </div>
          <div class="row">
            <p>Transmission</p>
            <p>${objectBike.transmission}</p>
          </div>
          <div class="row">
            <p>Cleat</p>
            <p>${objectBike.cleat}</p>
          </div>
  
  
        </div>
        <p><strong> Description: </strong>${objectBike.description} </p>
        <p><strong> Location: </strong>${objectBike.location} </p>
        <p><strong> Price: </strong>${objectBike.price} £ </p>
        <p><strong> Speed: </strong>${objectBike.speed} km/h </p>
        <p><strong> Type: </strong>${objectBike.type} </p>
        <button class="btn-custom">Hire</button>
      </div>`
      modalContainer.style.display="block";
      modalContainer.innerHTML=bikeObjectLiteral;
      const crossCloseModal = document.querySelector(".icon-cross");
      crossCloseModal.addEventListener("click", function(){
          modalContainer.style.display="none"
      })
      Slider()
    

    });
    
  });
  
  

}
renderDivFat? modalRentBike(BikesFat) : null;
renderDivMountain? modalRentBike(BikesMountain) : null;
renderDivHybrid? modalRentBike(BikesHybrid)  : null;
