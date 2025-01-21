
import { getContent } from "../utils/function";
import { Project } from "../utils/type";

const content: any = {
    en: {
        projects: [
            // {
            //     name: "Fruit Nour Matching",
            //     plateform: "android",
            //     periode: "Oct 2021 - Dec 2021",
            //     description: `
                
            //     `,
            //     link: "#fruitnourmatching",
            //     completed: true,
            //     style: { backgroundImage: "url(/img/project/fruitnourmatching/logo.png)", backgroundColor: "var(--cover)" },
            //     imgs: ["1.jpg", "2.jpg", "3.jpg"]
            // }    
        ],
    },
    fr: {
        projects: [
            // {
            //     name: "Fruit Nour Matching",
            //     plateform: "android",
            //     periode: "Oct 2021 - Dec 2021",
            //     description: `
            //         C'est un jeu développer avec react-native.<br/>
            //         Dans ce jeu, le joueur doit miser pour ensuite gagner un gain.<br/>
            //         Le joueur a la possibilté d'augmenter la vitesse de défilement pour accroître d'avantage son gain.
            //     `,
            //     link: "#fruitnourmatching",
            //     completed: true,
            //     style: { backgroundImage: "url(/img/project/fruitnourmatching/logo.png)", backgroundColor: "var(--cover)" },
            //     imgs: ["1.jpg", "2.jpg", "3.jpg"]
            // }
        ],
    }
}

export const PROJECT: Project = getContent(content)