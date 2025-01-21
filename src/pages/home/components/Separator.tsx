import React from 'react'
import NourIcon from '../../../components/core/NourIcon'
import anime from 'animejs/lib/anime.es.js';

export default function Separator() {
  const handleSCroll = function () {
    let footer = document.querySelector("footer")
    window.scrollTo({
      top: footer?.offsetTop,
      behavior: "smooth",
    })
  }
  let viewed = false;
  setInterval(function () {
    let separator = document.querySelector(".seprarator") as HTMLElement
    function playAnimation(): void {
      if (!viewed) {
        anime({
          targets: `.seprarator`,
          opacity: [0, 1],
          duration: 600,
          delay: 500,
          easing: 'easeInOutQuad'
        })
      }
    }
    let callback: IntersectionObserverCallback = (entries) => {
      if (entries[0].intersectionRatio <= 0) return;
      separator.classList.remove("hide");
      playAnimation();
      viewed = true
    }
    if (separator) {
      const intersectionObserver = new IntersectionObserver(callback);
      intersectionObserver.observe(separator);
    }
  }, 500)


  return (
    <div className="seprarator hide" onClick={handleSCroll}>
      <NourIcon id={"arrow-down-svg"} width="17" />
      <span className="text-gray-1">scroll down</span>
    </div>
  )
}
