// hamburger menu animation

const hamburger = document.querySelector ('#hamburger');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('animate');
})

//interactive wheel

const wheelHomeAutomation = document.getElementById('wheel-home-automation');
const displayHomeAutomation = document.getElementById('display-home-automation');

const wheelMusicSystem = document.getElementById('wheel-music-system');
const displayMusicSystem = document.getElementById('display-music-system');

const wheelLightningClimate = document.getElementById('wheel-lightning-climate');
const displayLightningClimate = document.getElementById('display-lightning-climate');

const wheelSecurityAlarm = document.getElementById('wheel-security-alarm');
const displaySecurityAlarm = document.getElementById('display-security-alarm');

const wheelVideoSurveillance = document.getElementById('wheel-video-surveillance');
const displayVideoSurveillance = document.getElementById('display-video-surveillance');

const wheelCustomDesign = document.getElementById('wheel-custom-design');
const displayCustomDesign = document.getElementById('display-custom-design');

const wheelRegularMaintenance = document.getElementById('wheel-regular-maintenance');
const displayRegularMaintenance = document.getElementById('display-regular-maintenance');

const wheelHomeTheatre = document.getElementById('wheel-home-theatre');
const displayHomeTheatre = document.getElementById('display-home-theatre');

wheelHomeAutomation.addEventListener('click', event => {
    displayHomeAutomation.classList.add('active');
    wheelHomeAutomation.classList.add('active');

    displayMusicSystem.classList.remove('active');
    wheelMusicSystem.classList.remove('active');

    displayLightningClimate.classList.remove('active');
    wheelLightningClimate.classList.remove('active');

    displaySecurityAlarm.classList.remove('active');
    wheelSecurityAlarm.classList.remove('active');

    displayVideoSurveillance.classList.remove('active');
    wheelVideoSurveillance.classList.remove('active');

    displayCustomDesign.classList.remove('active');
    wheelCustomDesign.classList.remove('active');

    displayRegularMaintenance.classList.remove('active');
    wheelRegularMaintenance.classList.remove('active');

    displayHomeTheatre.classList.remove('active');
    wheelHomeTheatre.classList.remove('active');
})

wheelMusicSystem.addEventListener('click', event => {
  displayMusicSystem.classList.add('active');
  wheelMusicSystem.classList.add('active');

  displayLightningClimate.classList.remove('active');
  wheelLightningClimate.classList.remove('active');

  displaySecurityAlarm.classList.remove('active');
  wheelSecurityAlarm.classList.remove('active');

  displayVideoSurveillance.classList.remove('active');
  wheelVideoSurveillance.classList.remove('active');

  displayCustomDesign.classList.remove('active');
  wheelCustomDesign.classList.remove('active');

  displayRegularMaintenance.classList.remove('active');
  wheelRegularMaintenance.classList.remove('active');

  displayHomeTheatre.classList.remove('active');
  wheelHomeTheatre.classList.remove('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');
})

wheelLightningClimate.addEventListener('click', event => {
  displayLightningClimate.classList.add('active');
  wheelLightningClimate.classList.add('active');

  displaySecurityAlarm.classList.remove('active');
  wheelSecurityAlarm.classList.remove('active');

  displayVideoSurveillance.classList.remove('active');
  wheelVideoSurveillance.classList.remove('active');

  displayCustomDesign.classList.remove('active');
  wheelCustomDesign.classList.remove('active');

  displayRegularMaintenance.classList.remove('active');
  wheelRegularMaintenance.classList.remove('active');

  displayHomeTheatre.classList.remove('active');
  wheelHomeTheatre.classList.remove('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');

  displayMusicSystem.classList.remove('active');
  wheelMusicSystem.classList.remove('active');
})

wheelSecurityAlarm.addEventListener('click', event => {
  displaySecurityAlarm.classList.add('active');
  wheelSecurityAlarm.classList.add('active');

  displayVideoSurveillance.classList.remove('active');
  wheelVideoSurveillance.classList.remove('active');

  displayCustomDesign.classList.remove('active');
  wheelCustomDesign.classList.remove('active');

  displayRegularMaintenance.classList.remove('active');
  wheelRegularMaintenance.classList.remove('active');

  displayHomeTheatre.classList.remove('active');
  wheelHomeTheatre.classList.remove('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');

  displayMusicSystem.classList.remove('active');
  wheelMusicSystem.classList.remove('active');

  displayLightningClimate.classList.remove('active');
  wheelLightningClimate.classList.remove('active');
})

wheelVideoSurveillance.addEventListener('click', event => {
  displayVideoSurveillance.classList.add('active');
  wheelVideoSurveillance.classList.add('active');

  displayCustomDesign.classList.remove('active');
  wheelCustomDesign.classList.remove('active');

  displayRegularMaintenance.classList.remove('active');
  wheelRegularMaintenance.classList.remove('active');

  displayHomeTheatre.classList.remove('active');
  wheelHomeTheatre.classList.remove('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');

  displayMusicSystem.classList.remove('active');
  wheelMusicSystem.classList.remove('active');

  displayLightningClimate.classList.remove('active');
  wheelLightningClimate.classList.remove('active');

  displaySecurityAlarm.classList.remove('active');
  wheelSecurityAlarm.classList.remove('active');
})

wheelCustomDesign.addEventListener('click', event => {
  displayCustomDesign.classList.add('active');
  wheelCustomDesign.classList.add('active');

  displayRegularMaintenance.classList.remove('active');
  wheelRegularMaintenance.classList.remove('active');

  displayHomeTheatre.classList.remove('active');
  wheelHomeTheatre.classList.remove('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');

  displayMusicSystem.classList.remove('active');
  wheelMusicSystem.classList.remove('active');

  displayLightningClimate.classList.remove('active');
  wheelLightningClimate.classList.remove('active');

  displaySecurityAlarm.classList.remove('active');
  wheelSecurityAlarm.classList.remove('active');

  displayVideoSurveillance.classList.remove('active');
  wheelVideoSurveillance.classList.remove('active');
})

wheelRegularMaintenance.addEventListener('click', event => {
  displayRegularMaintenance.classList.add('active');
  wheelRegularMaintenance.classList.add('active');

  displayHomeTheatre.classList.remove('active');
  wheelHomeTheatre.classList.remove('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');

  displayMusicSystem.classList.remove('active');
  wheelMusicSystem.classList.remove('active');

  displayLightningClimate.classList.remove('active');
  wheelLightningClimate.classList.remove('active');

  displaySecurityAlarm.classList.remove('active');
  wheelSecurityAlarm.classList.remove('active');

  displayVideoSurveillance.classList.remove('active');
  wheelVideoSurveillance.classList.remove('active');

  displayCustomDesign.classList.remove('active');
  wheelCustomDesign.classList.remove('active');
})

wheelHomeTheatre.addEventListener('click', event => {
  displayHomeTheatre.classList.add('active');
  wheelHomeTheatre.classList.add('active');

  displayHomeAutomation.classList.remove('active');
  wheelHomeAutomation.classList.remove('active');

  displayMusicSystem.classList.remove('active');
  wheelMusicSystem.classList.remove('active');

  displayLightningClimate.classList.remove('active');
  wheelLightningClimate.classList.remove('active');

  displaySecurityAlarm.classList.remove('active');
  wheelSecurityAlarm.classList.remove('active');

  displayVideoSurveillance.classList.remove('active');
  wheelVideoSurveillance.classList.remove('active');

  displayCustomDesign.classList.remove('active');
  wheelCustomDesign.classList.remove('active');

  displayRegularMaintenance.classList.remove('active');
  wheelRegularMaintenance.classList.remove('active');
})

// modal open and close

const ctaFreeConsultation = document.getElementById('cta-freeconsultation');
const ctaSend = document.getElementById('cta-send');
const modal = document.getElementById('modal');
const headerLetsTalk = document.getElementById('headerLetsTalk');
const inquiryReceived = document.getElementById('inquiryReceived');
const closeIcon = document.getElementById('close-icon');
const form = document.getElementById('form');

ctaFreeConsultation.addEventListener('click', event => {
    modal.classList.add('show');
})

form.addEventListener('submit', function(event){
    event.preventDefault() // pervent form from autosubmitting. do not refresh page or clear input fields
    modal.classList.remove('show');
    headerLetsTalk.innerHTML= "Thank you for your inquiry!";
    headerLetsTalk.style.fontSize= "30px";
    inquiryReceived.innerHTML= "We will get in touch within 1 business days.";
    inquiryReceived.style.marginTop = "-5px";
    form.reset(); // reset form but not site/window
})

closeIcon.addEventListener('click', event => {
    modal.classList.remove('show');
})

window.onclick = function(e){
    if(e.target == modal){
        modal.classList.remove('show');
    }
}
