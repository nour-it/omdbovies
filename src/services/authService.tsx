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
    // this.categories.allLoad = true;
    let res = {
      offer: data.user.offer,
      souscription: data.user.souscription,
      tontine: data.user.tontine,
      adhesion: data.user.adhesion,
      publication: data.user.publication,
      parution: data.user.parution,
      engagement: data.user.engagement,
      association_membered: data.user.association_membered,
      user: {
        id: data.user.id,
        name: data.user.name,
        surname: data.user.surname,
        created_at: data.user.created_at,
        verified_at: data.user.verified_at,
      },
    }
    
    return res;
  }
}