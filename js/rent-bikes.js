const BikesFat = [
    {
      img: "./imgs/hire-fat-bikes/fat-bike (1).jpg",
      name: "Model A",
      location: "edinburgh",
      price: 30.99,
      description: "Your perfect companion for exploring Edinburgh's scenic routes with ease.",
      type: "electric",
      speed: 64,
    },
    {
      img: "./imgs/hire-fat-bikes/fat-bike (2).jpg",
      name: "Trailblazer X",
      location: "Edinburgh",
      price: 35.50,
      description: "Unmatched speed and rugged durability for conquering Edinburgh's trails like a pro.",
      type: "electric",
      speed: 70,
    },
    {
      img: "./imgs/hire-fat-bikes/fat-bike (3).jpg",
      name: "Explorer Pro",
      location: "Edinburgh",
      price: 28.99,
      description: "Explorer Pro: Discover Edinburgh's landscapes with reliability and versatility.",
      type: "electric",
      speed: 60,
    },
    {
      img: "./imgs/hire-fat-bikes/fat-bike (4).jpg",
      name: "Thunderbolt XT",
      location: "Edinburgh",
      price: 32.75,
      description: "Experience the thrill of speed through Edinburgh's diverse terrain.",
      type: "electric",
      speed: 68,
    },
    {
      img: "./imgs/hire-fat-bikes/fat-bike (5).jpg",
      name: "Adventure Seeker",
      location: "Edinburgh",
      price: 31.99,
      description: "Adventure Seeker: Unleash your adventurous spirit on Edinburgh's urban streets and off-road trails.",
      type: "electric",
      speed: 65,
    }
];
const BikesMountain = [
  {
    img: "./imgs/hire-mountain-bikes/mountain-bike (1).jpg",
    name: "Trailblazer 5000",
    location: "Edinburgh",
    price: 45.99,
    description: "Trailblazer 5000: Dominate the trails of Edinburgh with precision and power.",
    type: "mountain",
    suspension: "full",
    gears: 21
  },
  {
    img: "./imgs/hire-mountain-bikes/mountain-bike (2).jpg",
    name: "Summit Slayer",
    location: "Edinburgh",
    price: 52.50,
    description: "Summit Slayer: Conquer Edinburgh's toughest peaks with unmatched agility and control.",
    type: "mountain",
    suspension: "front",
    speed: 55,
  },
  {
    img: "./imgs/hire-mountain-bikes/mountain-bike (3).jpg",
    name: "Ridge Rider Pro",
    location: "Edinburgh",
    price: 49.99,
    description: "Ridge Rider Pro: Explore Edinburgh's rugged terrain with confidence and style.",
    type: "mountain",
    suspension: "full",
    speed: 55,
  },
  {
    img: "./imgs/hire-mountain-bikes/mountain-bike (4).jpg",
    name: "Alpine Assault",
    location: "Edinburgh",
    price: 48.75,
    description: "Alpine Assault: Tackle Edinburgh's mountainous trails with ease and speed.",
    type: "mountain",
    suspension: "front",
    speed: 68,
  },
  {
    img: "./imgs/hire-mountain-bikes/mountain-bike (5).jpg",
    name: "Peak Performance",
    location: "Edinburgh",
    price: 55.99,
    description: "Peak Performance: Reach new heights of performance on Edinburgh's challenging terrain.",
    type: "mountain",
    suspension: "full",
    speed: 75,
  }
];

const BikesHybrid = [
  {
    img: "./imgs/hire-hybrid-bikes/hybrid-bike (1).jpg",
    name: "Urban Commuter",
    location: "Glasgow",
    price: 39.99,
    description: "Urban Commuter: Navigate Glasgow's streets with ease and comfort on this versatile hybrid bike.",
    type: "hybrid",
    suspension: "none",
    speed: 62,
  },
  {
    img: "./imgs/hire-hybrid-bikes/hybrid-bike (2).jpg",
    name: "City Explorer",
    location: "Edinburgh",
    price: 42.50,
    description: "City Explorer: Discover Edinburgh's hidden gems and scenic routes on this reliable hybrid bike.",
    type: "hybrid",
    suspension: "front",
    speed: 61,
  },
  {
    img: "./imgs/hire-hybrid-bikes/hybrid-bike (3).jpg",
    name: "Crossroad Cruiser",
    location: "Aberdeen",
    price: 45.99,
    description: "Crossroad Cruiser: Cruise through Aberdeen's urban and rural landscapes in style and comfort.",
    type: "hybrid",
    suspension: "none",
    speed: 69,
  },
  {
    img: "./imgs/hire-hybrid-bikes/hybrid-bike (4).jpg",
    name: "Adventure Hybrid",
    location: "Dundee",
    price: 48.75,
    description: "Adventure Hybrid: Embark on thrilling journeys through Dundee's diverse terrain on this versatile hybrid bike.",
    type: "hybrid",
    suspension: "front",
    speed: 64,
  },
  {
    img: "./imgs/hire-hybrid-bikes/hybrid-bike (5).jpg",
    name: "Metro Trekker",
    location: "Inverness",
    price: 52.99,
    description: "Metro Trekker: Explore Inverness's city streets and outskirts with confidence and agility on this premium hybrid bike.",
    type: "hybrid",
    suspension: "front",
    speed: 59,
  }
];

function RenderBikes(object){
    const renderDiv = document.querySelector(".hire-bike-section");

    object.map(fatBike=>
        renderDiv.innerHTML+= `
        <div class="hire-bike-section-container row section-container-hire">
            <div class="hire-bike-part-1 hire-bike-section-img-container">
            <span>${fatBike.price}£</span>
            <img src="${fatBike.img}" alt="">
            </div>
    
            <div class="hire-bike-part-2 hire-bike-section-info">
            <h3>${fatBike.name}</h3>
            <p>${fatBike.description}</p>
            <div class="text-icon-hire-row row"><img class="icon-hire" src="./imgs/bicycle.svg"><p>${fatBike.type}</p></div>
            <div class="text-icon-hire-row row"><img class="icon-hire" src="./imgs/location.svg"><p>${fatBike.location}</p></div>
            <div class="text-icon-hire-row row"><img class="icon-hire" src="./imgs/speedometer.svg"><p>${fatBike.speed}km/h</p></div>
            <div class="text-icon-hire-row row"></div>
          
            </div>
            <button class="btn-custom hire-btn">Hire</button>
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