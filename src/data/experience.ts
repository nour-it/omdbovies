
import { getContent } from "../utils/function";
import { Experience } from "../utils/type";

const content: any = {
    en: {
        experiences: [
            {
                title: "Company internship",
                adress: "Tixpros, Lome-Togo",
                periode: "Oct 2021 - Dec 2021",
                description: `
                <h2 style="text-align: left;"><span style="color: #ff6600;"><strong>Where ?</strong></span></h2>
                <p style="text-align: center;"><strong>Tix Pros</strong> is a large-scale IT company; Adidogom&eacute;.</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">When?</span></h2>
                <p>&nbsp;</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">Why?</span></h2>
                <p style="text-align: center;">I did my internship there for my undergraduate degree. I was part of an application development team on an internal project and many other projects for clients I had to do. occupy the position of back end developer for the project and the position of front end developer for a client project.</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">How?</span></h2>
                <p style="text-align: center;">I worked with programming languages ​​like php with the laravel framework and javascript It was a very nice experience for me because I had to work with programming languages ​​like php with the laravel framework and javascript. develop a way of being in a team and above all of seeing beyond what is possible. of my limits</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">What results?</span></h2>
            `},
        ],
    },
    fr: {
        experiences: [
            {
                title: 'Stage en entreprise',
                adress: 'Tixpros, Lome-Togo',
                date: 'Oct 2021 - Dec 2021',
                description: `
                <h2 style="text-align: left;"><span style="color: #ff6600;"><strong>O&ugrave; ?</strong></span></h2>
                <p style="text-align: center;"><strong>Tix Pros</strong> est une entreprise informatique size &agrave; Adidogom&eacute;.</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">Quand ?</span></h2>
                <p>&nbsp;</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">Pourquoi ?</span></h2>
                <p style="text-align: center;">J'y ai fait mon stage pour mon parcour de Licence. Je m'&eacute;tais int&eacute;grer dans une &eacute;quipe de d&eacute;veloppement d'application sur un projet en interne et bien d'autres projets pour clients j'ai eu &agrave; occuper le poste de d&eacute;veloppeur back end pour le projet et le poste de d&eacute;veloppeur front end pour un projet client.</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">Comment ?</span></h2>
                <p style="text-align: center;">J'ai travaill&eacute; avec les langages de programmation comme le php avec le framework laravel et le javascript C'&eacute;tait une tr&egrave;s belle exp&eacute;rience pour moi car j'ai eu &agrave; d&eacute;velopper une mani&egrave;re d'&egrave;tre en &eacute;quipe et surtout de voir au del&agrave; de mes limites</p>
                <h2 style="text-align: left;"><span style="color: #ff6600;">Quels r&eacute;sultats ?</span></h2>  
                `},
        ],
    }
}

export const EXPERIENCE: Experience = getContent(content)