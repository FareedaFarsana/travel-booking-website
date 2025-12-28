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

