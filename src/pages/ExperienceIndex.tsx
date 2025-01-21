import React, { useState } from "react";
import NourContainer from "../components/core/NourContainer";
import ExperienceHeader from "../components/header/ExperienceHeader";
import HomeFooter from "../components/footer/HomeFooter";
import NourIcon from "../components/core/NourIcon";
import { EXPERIENCE } from "../data/experience";

function experienceItem(
  experience: Object,
  index: number,
  array: Object[]
): React.ReactNode {
  const title = Object.values(experience)[0];
  const adress = Object.values(experience)[1];
  const periode = Object.values(experience)[2];
  const description = Object.values(experience)[3];
  return (
    <div className="experience" key={index.toString()}>
      <div className="card-3 right">
        <div>
          <h2 className="h2">{title}</h2>
          <span className="h2 gray-5">{adress}</span>
        </div>
        <span className="text-gray-2">
          <NourIcon id="calendar" width="18" />
          {periode}
        </span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default function ExperienceIndex(props: any) {
  let theme = localStorage.getItem("theme") || "";
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
    <NourContainer>
      <ExperienceHeader onThemeChange={onThemeChange} theme={state.theme}/>
      {EXPERIENCE.experiences.map(experienceItem)}
      <HomeFooter theme={theme} />
    </NourContainer>
  );
}
