import axios from "axios";

export default class BaseService {
  entryPoint = window.location.protocol + "//" + window.location.hostname + ":8000";
  // entryPoint = window.location.origin

  static service;

  defaultConfig = { headers: { 'X-Requested-With': "XMLHttpRequest" } }
  config = {}
  authConfig = { headers: { 'X-Requested-With': "XMLHttpRequest", "Authorization": "Bearer " + localStorage.getItem("token") } }

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
    console.log(url);
    this.config = auth ? this.authConfig : this.defaultConfig;
    return await axios.get(url, this.config)
  }

  async post(url, data, auth = false) {
    console.log(url);
    this.config = auth ? this.authConfig : this.defaultConfig;
    return axios.post(url, data, this.config)
  }
}