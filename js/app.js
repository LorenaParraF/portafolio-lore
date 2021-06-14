const slide_scroll = document.getElementById("slide_scroll");
const controles = document.getElementById("controles");

function detectarDireccionPrecionada(target) {
  return target.dataset.direction;
}

function filtrarSlides(slider) {
  const slides = Array.from(slider.children).filter((element) => {
    return element.classList.contains("sld");
    // console.log(element);
  });

  return slides;
}

function detectarCualSlideEstaActivo(slides) {
  let auxElementActive = 0;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains("active")) {
      auxElementActive = i;
    }
  }

  return auxElementActive;
}

function scrollSection(positionMove) {
  const h = window.innerHeight;
  return h * positionMove;
}

function agregarClaseActiveSlide(elementActive, direction, slides) {
  console.log(slides.length - 1);
  if (direction === "bottom" && elementActive < slides.length - 1) {
    slides[elementActive].classList.remove("active");
    slides[elementActive + 1].classList.add("active");

    window.scroll(0, scrollSection(elementActive + 1));
  } else if (direction === "top" && elementActive > 0) {
    slides[elementActive].classList.remove("active");
    slides[elementActive - 1].classList.add("active");

    window.scroll(0, scrollSection(elementActive - 1));
  }
}

let elementActualActive = 0;

controles.addEventListener("click", (e) => {
  window.removeEventListener("scroll", e);

  const direction = detectarDireccionPrecionada(e.target);
  const slides = filtrarSlides(slide_scroll);

  if (direction === "top" || direction === "bottom") {
    elementActualActive = detectarCualSlideEstaActivo(slides);
    agregarClaseActiveSlide(elementActualActive, direction, slides);
  }
});

var scrollPos = 0;
let activeScroll = false;

// window.addEventListener("scroll" , e => {
//   window.scroll(0, 0);
// });

// window.addEventListener('scroll', function(e){

//   window.removeEventListener("scroll", e);
//   if( activeScroll === false) {
//     console.log(e)
//     activeScroll = true;
//     let direction = "bottom";
//     if ((document.body.getBoundingClientRect()).top > scrollPos) {
//       direction = "top";

//     }
//     else  {
//       direction = "bottom";
//       scrollPos = (document.body.getBoundingClientRect()).top;

//     }
//     // ABAJO

//       // const direction = detectarDireccionPrecionada(e.target);
//       const slides = filtrarSlides(slide_scroll);

//       if( direction === "top" || direction === "bottom" ) {
//         const elementActualActive = detectarCualSlideEstaActivo(slides);
//         agregarClaseActiveSlide(elementActualActive, direction, slides);
//       }

//       setTimeout(() => {
//         activeScroll = false
//         // window.removeEventListener("scroll", e);
//       }, 1000);
//   }
// });
