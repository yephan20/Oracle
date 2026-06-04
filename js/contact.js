
// hamburger menu animation

const hamburger = document.querySelector ('#hamburger');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('animate');
})

// contact form

const ctaSend = document.getElementById('cta-send');
const form = document.getElementById('form');
const inquiryReceived = document.getElementById('inquiry-received');


form.addEventListener('submit', function(event){
    event.preventDefault() // pervent form from autosubmitting. do not refresh page or clear input fields
    ctaSend.innerHTML= "Thank you! We will get in touch within 1 business days.";
    ctaSend.style.fontSize= "16px";
    ctaSend.style.textTransform= "none";
    ctaSend.style.width= "100%";
    ctaSend.style.height= "70px";
    ctaSend.style.color= "black";
})
