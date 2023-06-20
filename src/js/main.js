import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

// swiper import
import Swiper from "swiper";
import "swiper/css";
const menuActiveVideo = document.querySelectorAll('.video-menu li');
console.log (menuActiveVideo);

menuActiveVideo.forEach(element => {
  element.addEventListener('click', () => {
    document.querySelector('.mv-active').classList.remove('mv-active');
    element.classList.add('mv-active');
  })  
});

  