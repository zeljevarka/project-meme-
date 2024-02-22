 alert (
   "Этот сайт создала Юля "
 )
 const logo = document.getElementById("header-logo")
 console.log (logo)
 logo.style.marginLeft="100px"
 
 
 const tiktok = document.querySelector (".tiktok-title")
 tiktok.style.color = "blue"
 
 const main = document.getElementById("main")

 
 const title = document.getElementById ("title")
 const tikTitle = document.querySelector (".tiktok-title")
 function changecolor() {
     title.style.color = "red"
     title.textContent = "Сангвини"
 }
 function changeTitle (){
     tikTitle.textContent = "Чиназес"
     console.log (1)
 }
 
 const blackTitle = document.getElementById ("title")
 
 const maintext = document.getElementById ("main-text-p")
  prompt("введите свое имя","имя")
     maintext.innerHTML = `<div class="name">Привет, ${prompt("введите свое имя","имя")}</div>`
  var swiper = new Swiper(".mySwiper", {
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });
const header= document.querySelector ("header") 

function themeDark (){
  header.classList.toggle("dark");
  main.classList.toggle("dark"); 
  logo.style.background = "logo-dark.png"
}

let inputTitle = document.querySelector(".section-crit-input")
let titleArea = document.getElementById("projekt-title")

function GetTitle() {
  titleArea.textContent = "amogus"
}

let formImage = document.getElementById ("projekt-img")
let textImage = document.getElementById ("img-crit")

function changeImg (){
  formImage.style.backgroundImage = `url(${textImage.value})`
}

const app = Vue.createApp({
  data(){
      return {
          a:"5",
          title:"amogus",
          text: "bruh",
          image:"https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTZCSmCzmIPm0up8wmW566cK5w3sSTUChT5UnaU3VnFxrHwoRNSnks0xUBmj2r2oeJk"
      }
  }
})
app.mount('#app')