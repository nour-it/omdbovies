import {
    countCompletedProjects,
    getContent,
    getExperienceYears,
} from "../../utils/function";
import { HomeAbout } from "../../utils/type";

const projects = countCompletedProjects();
const years = getExperienceYears();

const resumeLink = `https://firebasestorage.googleapis.com/v0/b/nour-it-portfolio.appspot.com/o/resumes%2Fseydou-nouroudine.resume.en.pdf?alt=media&token=6fc43bcb-c0ef-4e0f-be2e-72e96a0d1810`;

const content: any = {
    en: {
        title: "About Me",
        subtitle: "My Introducation",
        abouts: [
            {
                Experience: { value: years + " years", icon: "award-svg", width: "31" },
            },
            {
                Completed: {
                    value: projects + " project" + (projects > 1 ? "s" : ""),
                    icon: "cloud-svg",
                    width: "26",
                },
            },
            {
                Supports: { value: "online 24/7", icon: "hear-phone-svg", width: "20" },
            },
        ],
        previousRole: `In my previous role, I was responsible for building and maintaining a suite of web applications for a large
        e-commerce company. I worked closely with designers and product managers to ensure that the applications
        were user-friendly and met the needs of our customers. I also collaborated with back-end developers to
        integrate our front-end code with the company's API.`,
        resumeLink: resumeLink,
        download: "Download CV",
    },
    fr: {
        title: "A propos de moi",
        subtitle: "Ma présentation",
        abouts: [
            {
                Experience: { value: years + " ans", icon: "award-svg", width: "31" },
            },
            {
                Completed: {
                    value: projects + " project" + (projects > 1 ? "s" : ""),
                    icon: "cloud-svg",
                    width: "26",
                },
            },
            {
                Supports: { value: "online 24/7", icon: "hear-phone-svg", width: "20" },
            },
        ],
        previousRole: `Dans mon rôle précédent, j'étais responsable de la création et de la maintenance d'une suite d'applications Web pour un grand
        société de commerce électronique. J'ai travaillé en étroite collaboration avec les designers et les chefs de produits pour m'assurer que les applications
        étaient conviviaux et répondaient aux besoins de nos clients. J'ai également collaboré avec des développeurs back-end pour
        intégrer notre code frontal à l'API de l'entreprise.`,
        resumeLink: resumeLink,
        download: "Télécharger le CV",
    },
};

export const ABOUT: HomeAbout = getContent(content);
