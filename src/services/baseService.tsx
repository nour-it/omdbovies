import axios from "axios";

export default class BaseService {
  entryPoint = import.meta.env.VITE_API_ENDPOINT + import.meta.env.VITE_API_KEY;
  // entryPoint = window.location.origin

  static service;

  defaultConfig = { headers: { 'Accept': "Application/json" } }
  config = {}
  authConfig = { headers: { 'Accept': "Application/json", "Authorization": "Bearer " + localStorage.getItem("token") } }

  static getService() {
    if (!this.service) {
      this.service = new BaseService();
    }
    return this.service;
  }

  url(url) {
    return this.entryPoint + url;
  }

  async get(url, auth = false) {
    import.meta.env.DEV && console.log(url);
    this.config = auth ? this.authConfig : this.defaultConfig;
    return await axios.get(url, this.config)
  }

  async post(url, data, auth = false) {
    import.meta.env.DEV && console.log(url);
    this.config = auth ? this.authConfig : this.defaultConfig;
    return axios.post(url, data, this.config)
  }
}