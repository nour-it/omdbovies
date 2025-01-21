import React, { useEffect, useRef, useState } from 'react'
import NourButton from '../../../components/core/NourButton'
import NourIcon from '../../../components/core/NourIcon'
import { ABOUT } from '../../../data/home/about'
import { changeNavOnElementAppear } from '../../../utils/function'
import { AboutAnimation } from '../../../utils/animation'


export default function About() {

    const [state, setState] = useState({ mounted: false })
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setState({ mounted: true })
        changeNavOnElementAppear("about", ".section__about");
        let callback: IntersectionObserverCallback = (entries) => {
            if (entries[0].intersectionRatio <= 0) {
                //sectionRef.current?.classList.add("hide");
            } else {
                sectionRef.current?.classList.remove("hide");
                AboutAnimation(sectionRef.current as HTMLElement)
            }
        }
        const intersectionObserver = new IntersectionObserver(callback);
        intersectionObserver.observe(sectionRef.current as HTMLElement);
        return () => setState({ mounted: false })
    }, [])

    return (
        <section className="section__about hide" id="about" ref={sectionRef}>
            <div>
                <h1 className="h1">{ABOUT.title}</h1>
                <p className="text-gray-1">{ABOUT.subtitle}</p>
            </div>
            <div>
                <div><img src="/img/me.jpeg" alt="user 2" className="rounded" /></div>
                <div>
                    <div>{ABOUT.abouts.map(aboutItem)}</div>
                    <p>{ABOUT.previousRole}</p>
                    <NourButton downlaod={ABOUT.resumeLink} to={ABOUT.resumeLink} target={"_blanck"}>
                        {ABOUT.download}
                        <NourIcon id={`docuemt-svg`} width={24} />
                    </NourButton>
                </div>
            </div>
        </section>
    )
}

function aboutItem(about: Object, index: number, array: Object[]): React.ReactNode {
    const { icon, value, width } = Object.values(about)[0]
    return <div className="card-1 border rounded" id={`about_item`} key={index.toString()}>
        <NourIcon id={icon} width={width} />
        <p className="text-gray-1">{Object.keys(about)[0]}</p>
        <span className="text-gray-2">{value}</span>
    </div>
}
