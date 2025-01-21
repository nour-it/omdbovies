import { getContent } from "../../utils/function";
import { Service } from "../../utils/type";

import { URLS } from "../../utils/url";

const content: any = {
    en: {
        title: "Service",
        subtitle: "What i offer",
        services: [
            {
                Experience: { icon: "award-svg", width: "31", url: URLS.experience },
            },
            {
                Completed: {
                    icon: "cloud-svg",
                    width: "26",
                    url: URLS.project + "?completed=1",
                },
            },
            {
                Supports: { icon: "hear-phone-svg", width: "20", url: URLS.support },
            },
        ],
        more: "view more",
    },
    fr: {
        title: "Service",
        subtitle: "Ce que j'offre",
        services: [
            {
                Expérience: { icon: "award-svg", width: "31", url: URLS.experience },
            },
            {
                Finis: {
                    icon: "cloud-svg",
                    width: "26",
                    url: URLS.project + "?completed=1",
                },
            },
            {
                Supports: { icon: "hear-phone-svg", width: "20", url: URLS.support },
            },
        ],
        more: "voir plus",
    },
};

export const SERVICE: Service = getContent(content);
