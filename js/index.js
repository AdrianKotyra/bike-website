const BikesTopSliderObjects = [
    {   imageBike: "./imgs/cycle.png",
        speedBike: "90km",
        kmphdBike: "30 KMPH",
        speedBikeHours: "4HOURS",
        speedBikeWeight: "18KG",
        titleBike: "Model A",
    
    },
    {   imageBike: "./imgs/bike-top-4.png",
        speedBike: "80km",
        kmphdBike: "28 KMPH",
        speedBikeHours: "3HOURS",
        speedBikeWeight: "16KG",
        titleBike: "Model B",
    
    },
    {   imageBike: "./imgs/bike-top-2.png",
        speedBike: "50km",
        kmphdBike: "29 KMPH",
        speedBikeHours: "2HOURS",
        speedBikeWeight: "19KG",
        titleBike: "Model C",
    
    },
    {   imageBike: "./imgs/bike-top-3.png",
        speedBike: "40km",
        kmphdBike: "33 KMPH",
        speedBikeHours: "3HOURS",
        speedBikeWeight: "12KG",
        titleBike: "Model D",
    
    },
    {   imageBike: "./imgs/top-bike-7.png",
        speedBike: "42km",
        kmphdBike: "30 KMPH",
        speedBikeHours: "3HOURS",
        speedBikeWeight: "19KG",
        titleBike: "Model E",
    
    },
    ]

const locationObject = [
    {   
        Edinburgh: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42505.913946369445!2d-3.209524473569967!3d55.950378624658164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887b800a5982623%3A0x64f2147b7ce71727!2sEdynburg!5e0!3m2!1spl!2suk!4v1712929132318!5m2!1spl!2suk' width='100%' height='100%' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    },
    {   
        Glasgow: "<iframe class='map-locations'src='https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d71640.85760796783!2d-4.277090456257747!3d55.86653883128981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d55.871302699999994!2d-4.3208192!5e0!3m2!1spl!2suk!4v1712925366704!5m2!1spl!2suk' width='100%' height='100%' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    },
    {   
        Dundee: "<iframe class='map-locations'src='https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d41933.67765759646!2d-2.999435681596449!3d56.470044502524225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x48864144ab639cd3%3A0x94e43b1e384be52a!2sDundee!3m2!1d56.462018!2d-2.9707209999999997!5e0!3m2!1spl!2suk!4v1712928621381!5m2!1spl!2suk' width='100%' height='100%' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    },
    {   
        Inverness: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34329.67594682603!2d-4.263057198744742!3d57.468035742118154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488f715b2d17de2b%3A0x624309d12e3ec43d!2sInverness!5e0!3m2!1spl!2suk!4v1712929267344!5m2!1spl!2suk' width='100%' height='100%' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    },
    {   
        Aberdeen: "<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69247.95500329071!2d-2.1198962959580236!3d57.15418085125638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4884054c1fd77549%3A0xe8bb05da5cf4c472!2sAberdeen!5e0!3m2!1spl!2suk!4v1712929376791!5m2!1spl!2suk' width='100%' height='100%' style='border:0;' allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>"
    },

]
function displayOnHover(objectLocation){
    const locationsContainer = document.querySelector(".service-container-box")
    const mapContainer = document.querySelector(".map-box");
    const locations = document.querySelectorAll(".locations");
    locations.forEach(location=>location.addEventListener("click", function(){
        const city = location.getAttribute("city");
 
        for (let i=0;i<objectLocation.length;i++) {

            const cityNameFromObject = Object.keys(locationObject[i])[0];
         
            if(cityNameFromObject===city) {
                locationsContainer.style.animation="locationsAnimation 0.5s forwards"
                
                const imgElement =  location.querySelector(".city-img");
                const allImagesLocation = document.querySelectorAll(".city-img");

                allImagesLocation.forEach(img=>img.classList.remove("city-img-active"))
                setTimeout(() => {
                    imgElement.classList.add("city-img-active")
                }, 1);

               
                
             

                setTimeout(() => {
                    mapContainer.style.display="block";
                    
                    
                }, 501);
               

                mapContainer.innerHTML=objectLocation[i][city];
                
            }
        }
      
      


        
        
    }) )

  

}
displayOnHover(locationObject)
const readMore = [
    {
        id: 0,
        text: ["Founded in 2023, Bike King Borders emerged from the founder's profound passion for cycling and a profound appreciation for the scenic beauty of the region it serves. With a vision extending beyond mere commerce, the company aims to become a cornerstone of the cycling community, offering more than just products and services but also a hub for enthusiasts to connect and share their love for the sport. This commitment to fostering a vibrant cycling culture has been integral to the company's growth, as it resonates with individuals who seek more than just transactions; they seek a sense of belonging and camaraderie within a community that shares their passion.", "Since its inception, Bike King Borders has remained dedicated to its core values of excellence and authenticity. Every product and service offered reflects this commitment, ensuring that customers receive not only top-notch gear but also a personalized experience tailored to their cycling needs. This dedication to quality has garnered the trust and loyalty of customers, establishing Bike King Borders as a reliable source for all things cycling-related in the region. Furthermore, the company's deep-rooted connection to the cycling culture permeates through every aspect of its operations, from the knowledgeable staff who are passionate about the sport to the events and initiatives aimed at bringing the community together.", "As Bike King Borders continues to grow, it remains steadfast in its mission to enrich the cycling experience for enthusiasts of all levels. Beyond just being a retailer, the company aspires to be a driving force behind the cycling scene in the region, organizing group rides, races, and community events that promote not only physical health but also a sense of camaraderie and belonging. By staying true to its founding principles and nurturing its relationship with the cycling community, Bike King Borders looks forward to a future where every cyclist feels supported, inspired, and empowered to explore the beautiful landscapes of the region on two wheels."],
        imgs: ["./imgs/readmore/readmore%20(1).jpg", "./imgs/readmore/readmore%20(2).jpg", "./imgs/readmore/readmore%20(3).jpg"]
    },
    {
        id: 1,
        text: ["Bike King Borders, established in 2023, embodies a vision that extends far beyond the mere transaction of goods and services. At its core, the company was founded with the ambitious goal of nurturing a vibrant cycling community. This vision isn't just about selling bicycles or accessories; it's about creating a space where enthusiasts can come together, share their passion for the sport, and forge lasting connections. Since its inception, Bike King Borders has remained steadfast in its commitment to this ethos, recognizing that a thriving cycling culture is not only beneficial for business but also enriches the lives of individuals and the community at large.", " Driven by a dedication to excellence, Bike King Borders has experienced steady growth since its founding. This growth isn't solely measured in terms of revenue or market share but rather in the deepening of its roots within the cycling culture of the region it serves. By prioritizing quality products and services, the company has earned the trust and loyalty of its customers, establishing itself as a reliable and respected cornerstone of the cycling community. This commitment to excellence isn't just a business strategy; it's a reflection of Bike King Borders' genuine passion for cycling and its desire to provide enthusiasts with the best possible experience.", "Central to Bike King Borders' success is its profound connection to the cycling culture that thrives within the region. This connection isn't superficial but rather deeply ingrained in the company's DNA. From sponsoring local races and events to organizing group rides and community initiatives, Bike King Borders actively participates in and contributes to the vibrant cycling scene. This authentic engagement resonates with cyclists who seek more than just products; they seek a sense of belonging and camaraderie within a community that shares their passion. As Bike King Borders continues to grow and evolve, it remains committed to its founding principles, ensuring that the cycling community remains at the heart of everything it does."],
        imgs: ["./imgs/readmore/readmore%20(4).jpg", "./imgs/readmore/readmore%20(5).jpg", "./imgs/readmore/readmore%20(6).jpg"]
    },
    {
        id: 2,
        text: ["At Bike King Borders, our mission extends far beyond the typical role of a retailer. We see ourselves as more than just a place to buy cycling equipment – we're your dedicated companion on your cycling journey. Whether you're an experienced cyclist searching for the latest high-performance gear or a novice enthusiast eager to explore the picturesque trails of our region, we're here to support you every step of the way. Our commitment to being your trusted partner means providing not only top-quality products but also expert guidance and personalized assistance to ensure that your cycling experience is nothing short of exceptional.", "Our carefully curated selection of cycling equipment reflects our dedication to serving cyclists of all backgrounds and skill levels. Whether you're passionate about conquering the open road, tackling rugged mountain terrain, or cruising through city streets, we have everything you need to fuel your cycling passion. From cutting-edge road bikes designed for speed and precision to durable mountain models built to withstand challenging trails, and versatile hybrid bikes perfect for urban commuting or leisurely rides, our comprehensive range of products caters to every style and preference. Each item in our inventory is handpicked to meet the highest standards of quality, performance, and durability, ensuring that you can confidently embark on your cycling adventures with gear you can trust.", "At Bike King Borders, we understand that cycling is more than just a hobby – it's a lifestyle. That's why we're dedicated to providing not only top-of-the-line equipment but also a supportive and inclusive community where cyclists can come together to share their passion and experiences. Whether you're joining us for one of our organized group rides, participating in a local cycling event, or simply stopping by our store for a friendly chat, you'll find a welcoming environment where cyclists of all backgrounds are celebrated and encouraged. With Bike King Borders as your trusted partner, you can embark on your cycling journey with confidence, knowing that you have the support and resources you need to achieve your goals and make lasting memories on the road or trail."],
        imgs: ["./imgs/readmore/readmore%20(7).jpg", "./imgs/readmore/readmore%20(8).jpg", "./imgs/readmore/readmore%20(9).jpg"]
    },
    {
        id: 3,
        text: ["What distinguishes Bike King Borders from other cycling retailers is our steadfast dedication to quality and unwavering commitment to customer satisfaction. We believe that every cyclist deserves equipment and service that meet the highest standards, which is why we prioritize excellence in everything we do. Our team of seasoned technicians is not only passionate about cycling but also highly skilled in the art of bike maintenance and repair. Whether you're in need of a routine tune-up or a complex repair, you can trust our experts to deliver top-notch service that ensures your bike performs at its peak, mile after mile.", "At Bike King Borders, we take great pride in our meticulous attention to detail. We understand that even the smallest adjustments can make a significant difference in your cycling experience, which is why we approach every task with precision and care. From adjusting your bike's gears and brakes to fine-tuning its suspension and drivetrain, no detail is overlooked in our pursuit of perfection. Our goal is not just to fix your bike but to ensure that it's operating at optimal efficiency, allowing you to enjoy a smooth and seamless ride every time you hit the road or trail.", "What truly sets us apart, however, is our genuine dedication to keeping you rolling smoothly, mile after mile. We don't just see ourselves as service providers; we see ourselves as partners in your cycling journey, committed to supporting you every step of the way. Whether you're a seasoned rider with years of experience or a newcomer just starting out, you can count on Bike King Borders to provide the expertise, assistance, and personalized attention you need to achieve your cycling goals. With our team by your side, you can ride with confidence, knowing that your bike is in capable hands and that we're here to ensure your continued satisfaction and enjoyment of the sport."],
        imgs: ["./imgs/readmore/readmore%20(10).jpg", "./imgs/readmore/readmore%20(11).jpg", "./imgs/readmore/readmore%20(12).jpg"]
    },
    {
        id: 4,
        text: ["Embark on your cycling journey and find the perfect ride to match your aspirations with Bike King Borders' premium selection of bikes. Whether you're a seasoned cyclist with a thirst for speed and precision on the open road or an adventurous spirit eager to conquer rugged mountain trails, we have the ideal model to fulfill your needs and elevate your riding experience. Our curated collection features top-of-the-line road bikes designed for high performance and maximum efficiency, as well as rugged mountain bikes built to withstand the toughest terrain and provide unmatched stability and control.", "For those who crave the thrill of the open road, our selection of high-performance road bikes offers unparalleled speed, agility, and responsiveness. Engineered with cutting-edge technology and precision craftsmanship, these bikes are designed to deliver an exhilarating riding experience, whether you're tackling a challenging climb or sprinting towards the finish line. With lightweight frames, aerodynamic designs, and top-of-the-line components, our road bikes are built to help you achieve your cycling goals and reach new levels of performance.", "If your heart belongs to the trails and you yearn for adventure in the great outdoors, our rugged mountain bikes are the perfect choice for you. Designed to tackle the toughest terrain with ease, these bikes are built to withstand the rigors of off-road riding and provide unparalleled stability, control, and durability. Whether you're navigating rocky descents, powering through technical climbs, or shredding through singletrack trails, our mountain bikes are ready to take on whatever challenges the trail throws your way. With features like responsive suspension systems, powerful disc brakes, and durable frames, our mountain bikes are built to help you explore new trails, conquer new obstacles, and experience the thrill of off-road adventure like never before." ],
        imgs: ["./imgs/readmore/readmore%20(13).jpg", "./imgs/readmore/readmore%20(14).jpg", "./imgs/readmore/readmore%20(15).jpg"]
    },
    {
        id: 5,
        text: ["Prepare for success on your cycling journey with Bike King Borders' comprehensive selection of gear and accessories. Whether you're gearing up for your daily commute or preparing for an epic adventure, we have everything you need to ride with confidence, comfort, and style. Our curated collection includes practical essentials like helmets, locks, and lights to keep you safe and visible on the road, as well as performance-enhancing components like pedals, saddles, and handlebars to optimize your riding experience and take your performance to the next level.", "Safety is paramount when it comes to cycling, which is why we offer a wide range of essential gear designed to protect you on every ride. Our selection of helmets features cutting-edge designs and advanced safety features to ensure maximum protection in the event of a fall or collision. Additionally, our high-quality locks and lights provide added security and visibility, giving you peace of mind as you navigate busy streets and dimly lit pathways.", "In addition to safety gear, we also offer a variety of performance-enhancing components to help you achieve your cycling goals. From premium pedals that provide optimal power transfer and efficiency to ergonomic saddles that offer unmatched comfort and support, our selection of components is designed to enhance your riding experience and optimize your performance. Whether you're looking to upgrade your existing setup or customize your bike to suit your individual needs and preferences, our knowledgeable staff is here to help you find the perfect gear to take your cycling to the next level. With Bike King Borders as your trusted partner, you can gear up for success and ride with confidence, knowing that you have everything you need to enjoy the ultimate cycling experience." ],
        imgs: ["./imgs/readmore/readmore%20(16).jpg", "./imgs/readmore/readmore%20(17).jpg", "./imgs/readmore/readmore%20(18).jpg"]
    },
    {
        id: 6,
        text: ["Elevate your cycling experience and ride in style with Bike King Borders' premium collection of cycling apparel and accessories. Whether you're hitting the road for a long-distance ride or exploring rugged trails in the great outdoors, our carefully curated selection combines performance-driven features with fashionable designs to ensure that you not only look good but also feel comfortable and confident on every ride. From sleek jerseys and padded shorts to weather-resistant jackets and versatile accessories, our collection has everything you need to ride in style, no matter where your journey takes you.", "Our range of cycling apparel is designed with both performance and style in mind, offering innovative features and technologies to enhance your comfort and performance on the bike. Our sleek jerseys are crafted from high-quality, moisture-wicking fabrics to keep you cool and dry during intense rides, while our padded shorts provide cushioned support and protection for long hours in the saddle. Additionally, our weather-resistant jackets offer protection from the elements, ensuring that you stay warm and dry in changing weather conditions.", "In addition to apparel, our collection also includes a variety of stylish accessories to complete your cycling ensemble and add a touch of flair to your ride. From colorful socks and caps to sleek sunglasses and gloves, our accessories are designed to complement your look and enhance your riding experience. Whether you're cycling through the city streets or tackling rugged trails in the wilderness, our stylish accessories are sure to turn heads and make a statement wherever you go." ],
        imgs: ["./imgs/readmore/readmore%20(19).jpg", "./imgs/readmore/readmore%20(20).jpg", "./imgs/readmore/readmore%20(21).jpg"]
    },
]

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


const feedbacks = [
    {   id: 1,
        personName: "Emily Johnson",
        feedback: "Excellent service! 5 stars.",
        stars: 4,
        img: "./imgs/feedback/person (1).jpg"
    },
    {
        id: 2,
        personName: "David Martinez",
        feedback: "Great experience, highly recommended. 4.5 stars.",
        stars: 4,
        img: "./imgs/feedback/person (2).jpg"
    },
    {   id: 3,
        personName: "Sarah Thompson",
        feedback: "Fantastic product, exceeded my expectations. 4.7 stars.",
        stars: 4.7,
        img: "./imgs/feedback/person (3).jpg"
    },
    {    id: 4,
        personName: "Michael Brown",
        feedback: "Superb customer support and quality. 4.8 stars.",
        stars: 3.8,
        img: "./imgs/feedback/person (4).jpg"
    },
    {   id: 5,
        personName: "Jessica Lee",
        feedback: "Wonderful service, will definitely come back again. 4.9 stars.",
        stars: 4.9,
        img: "./imgs/feedback/person (5).jpg"
    },
    {   id: 6,
        personName: "Christopher Nguyen",
        feedback: "Impressive product quality, 5 stars!",
        stars: 5,
        img: "./imgs/feedback/person (6).jpg"
    },
    {   id: 7,
        personName: "Amanda Wilson",
        feedback: "Brilliant experience overall. 4.6 stars.",
        stars: 4.6,
        img: "./imgs/feedback/person (7).jpg"
    },
    {   id: 8,
        personName: "Daniel Taylor",
        feedback: "Outstanding service and prompt delivery. 4.9 stars.",
        stars: 4.9,
        img: "./imgs/feedback/person (8).jpg"
    },
    {   id: 9,
        personName: "Rachel Lopez",
        feedback: "Absolutely satisfied with my purchase. 4.7 stars.",
        stars: 4.7,
        img: "./imgs/feedback/person (9).jpg"
    },
    {   id: 10,
        personName: "Kevin King",
        feedback: "Top-notch quality and fast shipping. 4.8 stars.",
        stars: 4.8,
        img: "./imgs/feedback/person (10).jpg"
    },
    {   id: 11,
        personName: "Megan Campbell",
        feedback: "Incredible product, couldn't be happier. 5 stars!",
        stars: 5,
        img: "./imgs/feedback/person (11).jpg"
    },
    {   id: 12,
        personName: "Joshua Adams",
        feedback: "Great value for money, highly recommended. 4.5 stars.",
        stars: 4.5,
        img: "./imgs/feedback/person (12).jpg"
    },
    {   id: 13,
        personName: "Lauren Garcia",
        feedback: "Excellent communication and service. 4.9 stars.",
        stars: 4.9,
        img: "./imgs/feedback/person (13).jpg"
    },
    {   id: 14,
        personName: "Ryan Rodriguez",
        feedback: "Fantastic experience from start to finish. 4.8 stars.",
        stars: 4.8,
        img: "./imgs/feedback/person (14).jpg"
    },
    {   id: 15,
        personName: "Samantha Clark",
        feedback: "Exceptional product quality. 4.7 stars.",
        stars: 4.7,
        img: "./imgs/feedback/person (15).jpg"
    },
    {   id: 16,
        personName: "Brandon Hernandez",
        feedback: "Very satisfied with my purchase. 4.6 stars.",
        stars: 4.6,
        img: "./imgs/feedback/person (16).jpg"
    },
    {   id: 17,
        personName: "Jennifer Scott",
        feedback: "Amazing customer service, thank you! 4.9 stars.",
        stars: 4.9,
        img: "./imgs/feedback/person (17).jpg"
    },
    {   id: 18,
        personName: "Tyler Nguyen",
        feedback: "Highly impressed with the speed of delivery. 4.8 stars.",
        stars: 4.8,
        img: "./imgs/feedback/person (18).jpg"
    },
    {    id: 19,
        personName: "Emily Baker",
        feedback: "Absolutely love the product! 5 stars.",
        stars: 5,
        img: "./imgs/feedback/person (19).jpg"
    },
    {    id: 20,
        personName: "Nicholas Carter",
        feedback: "Great experience overall, would buy again. 4.7 stars.",
        stars: 4.7,
        img: "./imgs/feedback/person (20).jpg"
    }
];


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



function renderFeedback(object){
    const feedbackContainer = document.querySelector(".feedback-container");
    object.map(ele=>{
        feedbackContainer? feedbackContainer.innerHTML += 
       
        `  
        <div class="feedback-card col">
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
renderFeedback(feedbacks)
const triggerFeedbacks = document.querySelector(".feedback-trigger");
triggerFeedbacks? triggerFeedbacks.addEventListener("click", function(){
    const gridFeedback = document.querySelector(".feedback-container");
    gridFeedback.style.display="grid";
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
    const speedBike = document.querySelector(".bootom-text-top1 h3");
    const kmphdBike = document.querySelector(".bootom-text-top1-second h3");
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
        speedBike.innerHTML = objects[currentIndex].speedBike;
        kmphdBike.innerHTML = objects[currentIndex].kmphdBike;
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


