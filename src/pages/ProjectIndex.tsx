
import React, { useState } from 'react'
import NourContainer from '../components/core/NourContainer'
import ExperienceHeader from '../components/header/ExperienceHeader'
import HomeFooter from '../components/footer/HomeFooter'
import { PROJECT } from '../data/projects'
import NourIcon from '../components/core/NourIcon'
import { project } from '../utils/type'
import { Link } from 'react-router-dom'
import { getUrl } from '../utils/function'

let handleOnProjectClick = (project: project) => { }

let makeUrl = (url: string): string => ''

function projectItem(project: project, index: number = 0, array: Object[] = []): React.ReactNode {

  return <div className='project border rounded' key={index.toString()} style={{ ...project.style }}>
    <div className='rounded' style={{ background: "var(--color-body-background)" }} >
      <NourIcon id={project.plateform} width={24} />
      <h2 className="h2">{project.name}</h2>
      <Link to={makeUrl(project.link)} onClick={() => handleOnProjectClick(project)}>
        <span className="text-gray-2">more</span>
        <NourIcon id={'arrow-right-svg'} width="15" />
      </Link>
    </div>
  </div>
}

export default function ProjecteIndex(props: any) {

  const [state, setState] = useState({
    project: PROJECT.projects.find(p => p.link === window.location.hash),
    url: new URL(window.location.href),
    theme: localStorage.getItem("theme")
  })

  makeUrl = (url: string): string => {
    return url.concat(state.url.search)
  }

  handleOnProjectClick = (project: project) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setState({...state, project  })
  }

  const handleCloseInfoBox = () => {
    setState({...state,  project: undefined })
    window.history.replaceState(null, "/", getUrl("/project"))
  }

  function filterProject(project: project, index: number = 0, array: Object[] = []): boolean {
    let completedRequest: boolean = state.url.searchParams.get("completed") === "1"
    if (completedRequest) return project !== state.project && project.completed
    return project !== state.project
  }

  let theme = localStorage.getItem("theme") || ""

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
    <NourContainer >
      <ExperienceHeader onThemeChange={onThemeChange} theme={state.theme} />
      <div className="ctn-projects">
        {state.project && <div className='projects info'>
          {projectItem(state.project)}
          <div className='project-info border rounded'>
            <div>
              <div>
                {state.project.imgs.map((path, i) => <img src={`/img/project/${state.project?.link.replace("#", "")}/${path}`} key={i.toString()} alt="" />)}
              </div>
              <div className='close' onClick={handleCloseInfoBox}><NourIcon id="close" /></div>
            </div>
            <div>
              <h1>{state.project?.name}</h1>
              <div>{state.project?.periode}</div>
              <div dangerouslySetInnerHTML={{ __html: state.project?.description ?? "" }} />
            </div>
          </div>
        </div>}
        <div className={`projects`}>{PROJECT.projects.filter(filterProject).map(projectItem)}</div>
      </div>
      <HomeFooter theme={theme}/>
    </NourContainer>
  )
}