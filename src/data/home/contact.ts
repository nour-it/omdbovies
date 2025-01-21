import { getContent } from "../../utils/function";
import { Contact } from "../../utils/type";

let contacts = [
    { way: "Email", id: "reply.nour.it@gmail.com", link: "mailto:reply.nour.it@gmail.com", icon: "email-svg", width: "35", },
]

const content: any = {
    en: {
        title: "Contact Me",
        subtitle: "get in touch",
        write: "Write to me",
        send: "send message",
        talk: "Talk to me",
        with: "with me",
        contacts: contacts,
        form: {
            name: "Insert you name",
            email: "Insert you email",
            message: "Write your project"
        },
        alert: "Your message was sent successfully"
    },
    fr: {
        title: "Contactez moi",
        subtitle: "entrer en contact",
        write: "Écris moi",
        send: "envoyer le message",
        talk: "Me parler",
        with: "avec moi",
        contacts: contacts,
        form: {
            name: "Saisissez votre nom",
            email: "Saisissez votre email",
            message: "Décrivez votre projet"
        },
        alert: "Votre message a bien été envoyé"
    },

}

export const CONTACT: Contact =  getContent(content)

