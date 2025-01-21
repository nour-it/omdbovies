import React, { useEffect, useRef, useState } from 'react'
import NourIcon from '../../../components/core/NourIcon'
import { QUALIFICATION, maps } from '../../../data/home/qualification'
import { changeNavOnElementAppear } from '../../../utils/function'
import { QualificationAnimation } from '../../../utils/animation';

export default function Qualification() {
    const [state, setState] = useState<{ showMap: boolean, mapId: number | null, mounted?: boolean }>({ showMap: false, mapId: null, mounted: false })
    const sectionRef = useRef<HTMLElement>(null)
    useEffect(() => {
        setState({ ...state, mounted: true })
        changeNavOnElementAppear("blog", ".section_qualification");

        let callback: IntersectionObserverCallback = (entries) => {
            if (entries[0].intersectionRatio <= 0) {
                //sectionRef.current?.classList.add("hide");
            }else {
                sectionRef.current?.classList.remove("hide");
                QualificationAnimation(sectionRef.current as HTMLElement);
            };
        }
        const intersectionObserver = new IntersectionObserver(callback);
        intersectionObserver.observe(sectionRef.current as HTMLElement);
        return () => setState({ ...state, mounted: false })
    }, [])

    function onToggleMap(index: number | null) {
        if (index != null && maps[index]) {
            setState({ ...state, showMap: !state.showMap, mapId: index })
        } else {
            setState({ ...state, showMap: !state.showMap, mapId: null })
        }
        // {maps[state.mapId]}
    }

    return (
        <section className='section_qualification hide' id="blog" ref={sectionRef}>
            <div>
                <h1 className='h1'>{QUALIFICATION.title}</h1>
                <p className='text-gray-1'>{QUALIFICATION.subtitle}</p>
            </div>
            <div>
                {QUALIFICATION.categories.map(categoryItem)}
            </div>
            <div>
                <div className='line'>
                    {QUALIFICATION.qualifications.map((value: Object, index: number): React.ReactNode => (<span className={`round${index}`} key={index.toString()}></span>))}
                </div>
                {QUALIFICATION.qualifications.map(
                    (qualification: Object, index: number, array: Object[]): React.ReactNode => {
                        return qualificationItem(qualification, index, onToggleMap)
                    })}
            </div>
            {state.showMap && state.mapId != null && <div className="map">
                <div dangerouslySetInnerHTML={{ __html: maps[state.mapId] }} />
                <button onClick={() => onToggleMap(null)}><NourIcon id="close" /></button>
            </div>}

        </section>
    )
}


function categoryItem(category: Object, index: number, array: Object[]): React.ReactNode {
    const name = Object.values(category)[0]
    const icon = Object.values(category)[1]
    const width = Object.values(category)[2]

    return (
        <div key={index.toString()}>
            <NourIcon id={icon} width={width} />
            <h2 className='h2'>{name}</h2>
        </div>
    )
}


function qualificationItem(qualification: Object, index: number, callback: any): React.ReactNode {
    const title = Object.values(qualification)[0]
    const adress = Object.values(qualification)[1]
    const period = Object.values(qualification)[3]

    const position = index % 2 === 0 ? 'left' : 'right'
    return (
        <div className={`card-3 ${position}`} key={index.toString()}>
            <div>
                <h2 className='h2'>{title}</h2>
                <a className='h2 gray-5' href='#blog' onClick={() => callback(index)}>{adress}</a>
            </div>
            <span className='text-gray-2'>
                <NourIcon id={"calendar"} width={18} /> {period}
            </span>
        </div>
    )
}
