// const slideImage = document.querySelectorAll(".slide-image");
// const slidesContainer = document.querySelector(".slides-container");
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");
// const navigationDots = document.querySelector(".navigation-dots");

// let numberOfImages = slideImage.length;
// let slideWidth = slideImage[0].clientWidth;
// let currentSlide = 0;

// // Set up the slider

// function init() {
//   /*   
//     slideImage[0] = 0
//     slideImage[1] = 100%
//     slideImage[2] = 200%
//     */

//   slideImage.forEach((img, i) => {
//     img.style.left = i * 100 + "%";
//   });

//   slideImage[0].classList.add("active");

//   createNavigationDots();
// }

// function init() {
//   /*   
//     slideImage[0] = 0
//     slideImage[1] = 100%
//     slideImage[2] = 200%
//     */

//   slideImage.forEach((img, i) => {
//     img.style.left = i * 100 + "%";
//   });

//   slideImage[0].classList.add("active");

//   createNavigationDots();
// }


// init();


// // Create navigation dots

// function createNavigationDots() {
//   for (let i = 0; i < numberOfImages; i++) {
//     const dot = document.createElement("div");
//     dot.classList.add("single-dot");
//     navigationDots.appendChild(dot);

//     dot.addEventListener("click", () => {
//       goToSlide(i);
//     });
//   }

//   navigationDots.children[0].classList.add("active");
  
// }

// // Next Button

// nextBtn.addEventListener("click", () => {
//   if (currentSlide >= numberOfImages - 1) {
//     goToSlide(0);
//     return;
//   }

//   currentSlide++;
//   goToSlide(currentSlide);
// });

// // Previous Button

// prevBtn.addEventListener("click", () => {
//   if (currentSlide <= 0) {
//     goToSlide(numberOfImages - 1);
//     return;
//   }

//   currentSlide--;
//   goToSlide(currentSlide);
// });

// // Go To Slide

// function goToSlide(slideNumber) {
//   slidesContainer.style.transform =
//     "translateX(-" + slideWidth * slideNumber + "px)";

//   currentSlide = slideNumber;

//   setActiveClass();
// }

// // Set Active Class

// function setActiveClass() {
//   // Set active class for Slide Image

//   let currentActive = document.querySelector(".slide-image.active");
//   currentActive.classList.remove("active");
//   slideImage[currentSlide].classList.add("active");

//   //   set active class for navigation dots

//   let currentDot = document.querySelector(".single-dot.active");
//   currentDot.classList.remove("active");
//   navigationDots.children[currentSlide].classList.add("active");
// }

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}


  function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1000);
}


// Back top

function goToTop() {
  var timer = setInterval(function() {
    document.documentElement.scrollTop -= 20;

    if(document.documentElement.scrollTop <= 0) {
      clearInterval(timer);
    }
  }, 5);
}


function checkPass() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  
  let isEmailAddress = val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
  }
  if(email == "" && pass == "") {
    alert("Vui lòng nhập email và mật khẩu");
  }
  else if(isEmailAddress(email) == false) {
    alert("Bạn đã nhập sai định dạng email");
  }
}






