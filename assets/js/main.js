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
//About me section
const typed = document.querySelector('.typed');

if(typed) {
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    string: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  })
}
