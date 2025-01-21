import { getContent } from "../utils/function";
import { Support } from "../utils/type";

const content: any = {
    en: {
        supports: [
            {
                title: "Design integration",
                description: "No description yet",
                illustrationPosition: `left`,
                img: "integration.jpg"
            },
        ],
    },
    fr: {
        supports: [
            {
                title: "Intégration de maquette",
                description: `
                    Nous intégrons votre maquette avec: 
                    <ul>
                        <li>
                            <img src="/img/skill/html.png" alt="" height="24px"> + <img src="/img/skill/css.png" alt="" height="24px"> - html + css. 
                        </li>
                    wordpress, react, etc...
                    </ul>
                    `,
                illustrationPosition: `left`,
                img: "integration.jpg",
            }, 
            {
                title: "Conception d'applications",
                description: `
                    Nous intégrons votre maquette avec: 
                    <ul>
                        <li>
                            <img src="/img/skill/html.png" alt="" height="24px"> web :
                            <ul>
                                
                            </ul> 
                        </li>
                    </ul>
                    `,
                illustrationPosition: `right`,
                img: "integration.jpg",
            },
            {
                title: "Administration de base de données",
                description: `
                    Nous intégrons votre maquette avec: 
                    <ul>
                        <li>
                            <img src="/img/skill/html.png" alt="" height="24px"> html/css. 
                        </li>
                    wordpress, react, etc...
                    </ul>
                    `,
                illustrationPosition: `left`,
                img: "integration.jpg",
            },
        ],

    }
}

export const SUPPORT: Support = getContent(content)
