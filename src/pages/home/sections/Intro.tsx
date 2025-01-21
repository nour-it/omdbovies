import React, { useEffect, useRef, useState } from "react";
import NourIcon from "../../../components/core/NourIcon";
import { intro } from "../../../data/home/intro";
import { changeNavOnElementAppear, log } from "../../../utils/function";
import { IntroAnimation } from "../../../utils/animation";

export default function Intro() {
  const [state, setState] = useState({ mounted: false })

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setState({ mounted: true })
    changeNavOnElementAppear("home", ".section__intro");
    let callback: IntersectionObserverCallback = (entries) => {
      if (entries[0].intersectionRatio <= 0) {
        //sectionRef.current?.classList.add("hide");
      } else {
        sectionRef.current?.classList.remove("hide");
        IntroAnimation()
      }
    }
    const intersectionObserver = new IntersectionObserver(callback);
    intersectionObserver.observe(sectionRef.current as HTMLElement);
    return () => setState({ mounted: false })
  }, []);

  return (
    <section className="section__intro hide" id="home" ref={sectionRef}>
      <div>
        <div className="logo">
          Nour<span>It</span>
        </div>
        <div className="text-black-2">
          <hr /> {intro.title}
        </div>
        <div>
          {intro.descriptions.map(
            (
              value: String,
              index: number,
              array: String[]
            ): React.ReactNode => (
              <p key={index.toString()}>{value}</p>
            )
          )}
        </div>
        <a href="#contact" className="btn">
          {intro.say}
          <NourIcon id={"prime_send-svg"} width={24} />
        </a>
      </div>
      <div>
        <img src="/img/logo512.png" alt="user" />
      </div>
    </section>
  );
}
