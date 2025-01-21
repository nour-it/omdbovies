
import anime from 'animejs/lib/anime.es.js';

export function IntroAnimation(section?: HTMLElement): void {
  anime({ targets: `.section__intro .logo`, translateY: [100, 0], opacity: [0, 1], duration: 300, easing: 'easeInOutQuad' })
  anime({ targets: `.section__intro .logo + div`, translateY: [100, 0], opacity: [0, 1], duration: 300, delay: 200, easing: 'easeInOutQuad' })
  anime({ targets: `.section__intro .logo + div + div`, opacity: [0, 1], duration: 300, delay: 500, easing: 'easeInOutQuad' })
  anime({ targets: `.section__intro > div + div`, scale: [0, 1], opacity: [0, 1], duration: 300, delay: 500, easing: 'easeInOutQuad' })
  anime({ targets: `.section__intro .btn`, scale: [0, 1], opacity: [0, 1], duration: 300, delay: 1000, easing: 'easeInOutQuad' })
}

export function AboutAnimation(section?: HTMLElement) {
  anime({ targets: `.section__about > div:nth-child(1)`, opacity: [0, 1], duration: 300, delay: 300, easing: 'easeInOutQuad' })
  anime({ targets: `.section__about > div:nth-child(2) > div:nth-child(1)`, opacity: [0, 1], translateY: [100, 0], duration: 300, delay: 600, easing: 'easeInOutQuad' })
  const $aboutItems = section?.querySelectorAll("#about_item")
  $aboutItems?.forEach(($item, index) => {
    anime({ targets: $item, opacity: [0, 1], translateY: [100, 0], duration: 300, delay: (300 * index) + 800, easing: 'easeInOutQuad' })
  })
  anime({ targets: `.section__about > div:nth-child(2) > div:nth-child(2) > p`, opacity: [0, 1], duration: 500, delay: 1000, easing: 'easeInOutQuad' })
  anime({ targets: `.section__about > div:nth-child(2) > div:nth-child(2) > p + .btn`, scale: [0, 1], opacity: [0, 1], duration: 300, delay: 1000, easing: 'easeInOutQuad' })

}

export function ServiceAnimation(section?: HTMLElement) {
  anime({ targets: `.section_service > div:nth-child(1)`, opacity: [0, 1], duration: 300, delay: 300, easing: 'easeInOutQuad' })
  const $serviceItems = section?.querySelectorAll("#service_item")
  $serviceItems?.forEach(($item, index) => {
    anime({ targets: $item, opacity: [0, 1], scaleX: [0, 1], duration: 500, delay: (300 * index) + 800, easing: 'easeInOutQuad' })
  })
}

export function SkillAnimation(section?: HTMLElement) {
  anime({ targets: `.section_skills > div:nth-child(1)`, opacity: [0, 1], duration: 300, delay: 300, easing: 'easeInOutQuad' })
  const $skillItems = section?.querySelectorAll("#skill_item")
  $skillItems?.forEach(($item, index) => {
    anime({ targets: $item, opacity: [0, 1], duration: 300, delay: (100 * index) + 800, easing: 'easeInOutQuad' })
  })
}

export function QualificationAnimation(section?: HTMLElement) {
  anime({ targets: `.section_qualification > div:nth-child(1)`, opacity: [0, 1], duration: 300, delay: 300, easing: 'easeInOutQuad' })
  anime({ targets: `.section_qualification > div:nth-child(2)`, opacity: [0, 1], duration: 300, delay: 600, easing: 'easeInOutQuad' })
  anime({ targets: `.section_qualification .line`, height: [0, 490], duration: 1000, delay: 500, easing: 'easeInOutQuad' })
  for (let i = 0; i < 4; i++) {
    anime({ targets: `.section_qualification .line .round${i}`, opacity: [0, 1], duration: 300, delay: 500 * i, easing: 'easeInOutQuad' })
  }
}

export function TestimonialAnimation(section?: HTMLElement) {
  anime({ targets: `.section_testimonial > div:nth-child(1)`, opacity: [0, 1], duration: 300, delay: 300, easing: 'easeInOutQuad' })
}

export function ContactAnimation(section?: HTMLElement) {
  anime({ targets: `.section_contact > div:nth-child(1)`, opacity: [0, 1], duration: 300, delay: 300, easing: 'easeInOutQuad' })
}