import React, { useState } from "react";
import NourContainer from "../../components/core/NourContainer";
import Intro from "./sections/Intro";
import HomeHeader from "../../components/header/HomeHeader";
import Separator from "./components/Separator";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Service from "./sections/Service";
import Qualification from "./sections/Qualification";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import HomeFooter from "../../components/footer/HomeFooter";

export default function HomeIndex() {
  const [state, setState] = useState({ theme: localStorage.getItem("theme") });

  function onThemeChange(): void {
    let body = document.body;
    if (body.classList.length > 0) {
      setState({ ...state, theme: "" });
      localStorage.setItem("theme", "");
    } else {
      setState({ ...state, theme: "dark" });
      localStorage.setItem("theme", "dark");
    }
    body.classList.toggle("dark");
  }

  return (
    <>
      <HomeHeader onThemeChange={onThemeChange} theme={state.theme} />
      <NourContainer>
        <Intro />
        <Separator />
        <About />
        <Service />
        <Skills />
        <Qualification />
        <Testimonial />
        <Contact />
        <HomeFooter theme={state.theme} />
      </NourContainer>
    </>
  );
}
