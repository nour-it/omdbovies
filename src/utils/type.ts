export type Service = {
    title: string,
    subtitle: string,
    services: Object[],
    previousRole: string,
    resumeLink: string,
    more: string,
}

export type HomeIntro = {
    title: string,
    descriptions: string[],
    say: string
}

export type AboutType = {
    value: string,
    icon: string
}

export type HomeAbout = {
    title: string,
    subtitle: string,
    abouts: Object[],
    previousRole: string,
    resumeLink: string,
    download: string
}

export type Qualificaton = {
    title: string
    subtitle: string
    categories: Object[]
    qualifications: Object[]
}

export type Client = {
    title: string,
    subtitle: string,
    clients: Object[],
}

export type Contact = {
    title: string,
    subtitle: string,
    contacts: Object[],
    write: string,
    send: string,
    talk: "string",
    with: string,
    form: any,
    alert: string
}

export type Skill = {
    title: string,
    subtitle: string,
    skills: Object[],
}


export type Experience = {
    experiences: Object[]
}

export type project = {
    name: string,
    periode: string,
    description: string,
    link: string,
    completed: boolean,
    style: React.CSSProperties,
    plateform: string,
    imgs: string[],
}
export type Project = {
    projects: project[]
}

export type support = {
    title: string,
    description: string,
    illustration: string,
    illustrationPosition: "left" | "right",
    img: string,
}

export type Support = {
    supports: support[]
}