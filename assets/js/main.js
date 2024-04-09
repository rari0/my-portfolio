//Email Js
function SendMail() {
  var name = document.getElementById("name_id").value;
  var email = document.getElementById("email_id").value;
  var subject = document.getElementById("subject_id").value;
  var message = document.getElementById("message_id").value;

  if (!name || !email || !subject || !message) {
    alert("Fill in all fields.");
    return;
  }
  
  var params = {
    from_name: name,
    email_id: email,
    subject_id: subject,
    message: message
  };

  emailjs.send("service_yefp6xq", "template_4p0ffod", params).then(function(res) {
    alert("Success!" + res.status);
  });
}
//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
//Skills section - Modal
const skillsModals = document.querySelectorAll(".skills-modal");
const moreBtns = document.querySelectorAll(".more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
  skillsModals[modalClick].classList.add("active");
}

moreBtns.forEach((moreBtns, i) => {
  moreBtns.addEventListener("click", () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtns) => {
  modalCloseBtns.addEventListener("click", () => {
    skillsModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});
//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
  portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCards, i) => {
  imgCards.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtns) => {
  portfolioCloseBtns.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});
//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    const navLink = document.querySelector(".nav-items a[href='#" + id + "']");
    if(navLink){
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        navLink.classList.add("active");
      }
      else{
        navLink.classList.remove("active");
      }
    }
  });
});
//Portfolio section - Slider 01
var current = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nextBtn_01").addEventListener("click", next_01);
});

function next_01(){
    var img = document.querySelectorAll("#img_slider_01 img");
    var n_img = img.length;

    current++;
    if (current >= n_img) {
        current = 0;
    }

    for(var i = 0; i < n_img; i++){
        img[i].style.display = "none";
    }
    img[current].style.display = "block";
}
//Portfolio section - Slider 02
var current = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nextBtn_02").addEventListener("click", next_02);
});

function next_02(){
    var img = document.querySelectorAll("#img_slider_02 img");
    var n_img = img.length;

    current++;
    if (current >= n_img) {
        current = 0;
    }

    for(var i = 0; i < n_img; i++){
        img[i].style.display = "none";
    }
    img[current].style.display = "block";
}
//Portfolio section - Slider 03
var current = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nextBtn_03").addEventListener("click", next_03);
});

function next_03(){
    var img = document.querySelectorAll("#img_slider_03 img");
    var n_img = img.length;

    current++;
    if (current >= n_img) {
        current = 0;
    }

    for(var i = 0; i < n_img; i++){
        img[i].style.display = "none";
    }
    img[current].style.display = "block";
}
//Portfolio section - Slider 05
var current = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nextBtn_05").addEventListener("click", next_05);
});

function next_05(){
    var img = document.querySelectorAll("#img_slider_05 img");
    var n_img = img.length;

    current++;
    if (current >= n_img) {
        current = 0;
    }

    for(var i = 0; i < n_img; i++){
        img[i].style.display = "none";
    }
    img[current].style.display = "block";
}
//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});
