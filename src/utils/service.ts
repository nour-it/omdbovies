import axios from "axios";

export default class Service {

    static BASE_URL = import.meta.env.VITE_API_ENDPOINT;

    static async getBots() {
        try {
            let res = (await axios.get(this.BASE_URL + '/bots')).data;
            return res.data;
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getBotSharedMessages(id) {
        try {
            let res = (await axios.get(this.BASE_URL + `/bots/${id}/messages`)).data;
            return res.data;
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async getBotGroups(id) {
        try {
            let res = (await axios.get(this.BASE_URL + `/groups/${id}`)).data;
            return res.data;
        } catch (error) {
            console.log(error)
            return []
        }
    }

    static async shareMessage(id, data) {
        try {
            let res = await axios.post(this.BASE_URL + `/messages/${id}`, data)
            return res.data;
        } catch (error) {
            console.log(error)
            return []
        }
    }
}