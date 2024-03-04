import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import axios from 'axios';
gsap.registerPlugin(ScrollTrigger)

export function parallax(target){
    gsap.utils.toArray(target.value).forEach((section) => {
      const altura = section.offsetHeight - section.parentElement.offsetHeight;

      gsap.fromTo(section,{ 
        y: -altura
      }, {
        scrollTrigger: {
          trigger: section,
          scrub: true
        },
        y: 0,
        ease: "none"
      });
    });
  }

export function splitAnimation(text){
  gsap.to(text.chars, {
    scrollTrigger: {
      trigger: `.${text.elements[0].className}`,
      start: 'top 80%',
    },
    y:0,
    stagger: 0.03,
  });
}

const getApi = axios.create({
  baseURL: 'https://zelda.fanapis.com/api'
})

export default getApi
