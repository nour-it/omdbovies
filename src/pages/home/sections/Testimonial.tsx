import React, { useEffect, useRef, useState } from 'react'
import { CLIENT } from '../../../data/home/testimonial'
import { changeNavOnElementAppear } from '../../../utils/function';
import { TestimonialAnimation } from '../../../utils/animation';

export default function Testimonial() {
    const [state, setState] = useState({ mounted: false })

    if (CLIENT.clients.length == 0) return null;

    const sectionRef = useRef<HTMLElement>(null)
    useEffect(() => {
        setState({ mounted: true })
        changeNavOnElementAppear("blog", ".section_testimonial");

        let callback: IntersectionObserverCallback = (entries) => {
            if (entries[0].intersectionRatio <= 0) { //sectionRef.current?.classList.add("hide"); } else {
                sectionRef.current?.classList.remove("hide"); TestimonialAnimation(sectionRef.current as HTMLElement)
            }
        }
        const intersectionObserver = new IntersectionObserver(callback); intersectionObserver.observe(sectionRef.current as
            HTMLElement); return () => setState({ mounted: false })
    }, [])

    return (
        <section className="section_testimonial hide" id="blog" ref={sectionRef}>
            <div>
                <h1 className="h1">{CLIENT.title}</h1>
                <p className="text-gray-1">{CLIENT.subtitle}</p>
            </div>
            <div>
                {CLIENT.clients.map(clientItem)}
            </div>
            <div><span className="dot active"></span></div>
        </section>
    )
}

function clientItem(client: Object, index: number, array: Object[]): React.ReactNode {
    const name = Object.values(client)[0]
    const domain = Object.values(client)[1]
    const image = Object.values(client)[2]
    const message = Object.values(client)[3]
    return (<div className="shadow rounded" key={index.toString()}>
        <p>{message}</p>
        <div>
            <div><img src={`/img/client/${image}`} alt="client" /></div>
            <div>
                <span className="text-orange-1">{name}</span>
                <span className="text-orange-2">{domain}</span>
            </div>
        </div>
    </div>)
}
