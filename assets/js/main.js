//Email Js
function SendMail(){
  var params = {
    from_name : document.getElementById("name_id").value,
    email_id : document.getElementById("email_id").value,
    subject_id : document.getElementById("subject_id").value,
    message : document.getElementById("message_id").value
  }
  emailjs.send("service_yefp6xq", "template_4p0ffod", params).then(function (res) {
    alert("Success!" + res.status);
  })
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
//Portfolio section - Slider
var n_img = 2;
var current = 1;

function next(){
    current++;
    if(current > n_img){
        current = 1;
    }

    for(var i = n_img; i > 0; i--){
        document.querySelector("#img_slider img:nth-child(" + i + ")").style.display = "none";
    }
    document.querySelector("#img_slider img:nth-child(" + current + ")").style.display = "block";
}
//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    }
    else{
      document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    }
  });
});
