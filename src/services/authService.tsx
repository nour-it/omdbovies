import host from "../var/host";
import BaseService from "./baseService";

export default class AuthService extends BaseService {

  /**@type AuthService */
  static authService;

  static getAuthService() {
    if (!this.service) {
      this.authService = new AuthService();
    }
    return this.authService;
  }

  async loginAttempt(formData) {
    let { data } = await this.post(this.url(host.url.user.loginAttemptUrl), formData);
    if (data.token) {
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  }

  isAuthenticate() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem('token');
  }

  async loadUserInfo() {
    let { data } = await this.get(this.url(host.url.dashboard.userInfoUrl), this.isAuthenticate());
    return data;
  }
}