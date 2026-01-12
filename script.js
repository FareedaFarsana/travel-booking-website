// TOGGLE MENU
function toggleMenu() {
  const links = document.querySelector('.nav-links');
  const btn = document.querySelector('.nav-btn');
  links.classList.toggle('active');
  btn.classList.toggle('active');
}

// POPUP
function showPopup(e){
  e.preventDefault();
  document.getElementById("popup").style.display = "flex";
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}

// close popup when clicking outside card
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("popup").addEventListener("click",function(e){
  if(e.target.id === "popup"){
    closePopup();
  }
});
});

// home 
  // window.addEventListener("scroll", () => {
  //   const scrolled = window.scrollY;
  //   const home = document.querySelector(".home");
  //   home.style.backgroundPositionY = `${scrolled * 0.25}px`;
  // });



// testimonials
//  const testimonials = [
//   {
//     text: "ExploreX made my journey stress-free!",
//     name: "— Ayesha",
//     rating: "★★★★★",
//     meta: "Kerala Trip · Solo Traveler"
//   },
//   {
//     text: "Amazing destinations and friendly support team.",
//     name: "— Rahul",
//     rating: "★★★★☆",
//     meta: "Goa Vacation · Couple"
//   },
//   {
//     text: "Highly recommended for first-time travelers.",
//     name: "— Sara",
//     rating: "★★★★★",
//     meta: "Dubai Tour · First-time Traveler"
//   },
//   {
//     text: "Everything was perfectly planned!",
//     name: "— Arjun",
//     rating: "★★★★★",
//     meta: "Himalayan Trek · Adventure"
//   }
//  ];

//  let reviewIndex = 0;

//  function changeTestimonial(){
//     const textEl = document.getElementById("testimonial-text");
//     const nameEl = document.getElementById("testimonial-name");
//     const ratingEl = document.getElementById("testimonial-rating");
//     const metaEl = document.getElementById("testimonial-meta");
    
//     textEl.style.opacity = 0;
//     nameEl.style.opacity = 0;
//     ratingEl.style.opacity = 0;
//     metaEl.style.opacity = 0;

//     setTimeout(()=>{
//     reviewIndex = (reviewIndex + 1) % testimonials.length;

//     textEl.innerText = testimonials[reviewIndex].text;
//     nameEl.innerText = testimonials[reviewIndex].name;
//     ratingEl.innerText = testimonials[reviewIndex].rating;
//     metaEl.innerText = testimonials[reviewIndex].meta;

    //fade in
//     textEl.style.opacity = 1;
//     nameEl.style.opacity = 1
//     ratingEl.style.opacity = 1;
//     metaEl.style.opacity = 1;
//      }, 300);
//  }
//  //auto rotate
//  setInterval(changeTestimonial, 4000)

 
//  contact section
function submitForm(event){
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMsg");

  // clear previous msgs
  nameError.innerText = "";
  emailError.innerText = "";
  messageError.innerText = "";
  successMsg.innerText = "";

  let valid = true;

  // name validation
  if(name.value.trim() === ""){
    emailError.innerText = "Email is required";
    valid = false;
  }

  // Email validation
  if(email.value.trim() === ""){
    emailError.innerText = "Email is required";
    valid = false;
  }

  //message validation
  if(message.value.trim() === ""){
    messageError.innerText = "Message cannot be empty";
    valid = false;
  }

  //success
  if(valid){
    successMsg.innerText = "Message sent successfully!";
    name.value="";
    email.value="";
    message.value="";
  }
}