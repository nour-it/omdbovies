import React, { useEffect, useRef, useState } from 'react'
import NourIcon from '../../../components/core/NourIcon'
import { SERVICE } from '../../../data/home/service'
import { Link } from 'react-router-dom'
import { changeNavOnElementAppear, getUrl } from '../../../utils/function'
import { ServiceAnimation } from '../../../utils/animation'

function serviceItem(service: Object, index: number, array: Object[]): React.ReactNode {
    const { icon, width, url } = Object.values(service)[0]
    return <div className="border rounded" key={index.toString()} id={`service_item`}>
        <NourIcon id={icon} width={width} />
        <h2 className="h2">{Object.keys(service)[0]}</h2>
        <Link to={getUrl(url)} onClick={() => window.localStorage.prevUrl = window.location.href}>
            <span className="text-gray-2">{SERVICE.more}</span>
            <NourIcon id={'arrow-right-svg'} width="15" />
        </Link>
    </div>
}


export default function Service() {
    const [state, setState] = useState({ mounted: false })
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setState({ mounted: true })
        changeNavOnElementAppear("service", ".section_service")
        let callback: IntersectionObserverCallback = (entries) => {
            if (entries[0].intersectionRatio <= 0) {
                //sectionRef.current?.classList.add("hide");
            } else {
                sectionRef.current?.classList.remove("hide");
                ServiceAnimation(sectionRef.current as HTMLElement);
            }
        }
        const intersectionObserver = new IntersectionObserver(callback);
        intersectionObserver.observe(sectionRef.current as HTMLElement);
        return () => setState({ mounted: false })
    }, [])

    return (
        <section className="section_service hide" id="service" ref={sectionRef}>
            <div>
                <h1 className="h1">{SERVICE.title}</h1>
                <p className="text-gray-1">{SERVICE.subtitle}</p>
            </div>
            <div>
                {SERVICE.services.map(serviceItem)}
            </div>
        </section>
    )
}
