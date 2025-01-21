import BaseService from "./baseService";
import host from "../var/host";


export default class AchatService extends BaseService {

  publicOffer = {}
  categories = {}

  static achatService;

  /**
   * @returns {AchatService}
   */
  static getAchatService() {
    if (!this.service) {
      this.achatService = new AchatService();
    }
    return this.achatService;
  }

  async loadPublicOffer() {
    if (this.publicOffer.nextUrl) {
      let { data } = await this.get(this.publicOffer.nextUrl);
      this.publicOffer.allLoad = data.last_page_url == this.publicOffer.nextUrl
      this.publicOffer.nextUrl = data.next_page_url;
      this.publicOffer.total = data.total;
      return { offers: data.data, total: this.total };
    }
    let { data } = await this.get(this.url(host.url.achat.publicOfferUrl));
    this.publicOffer.nextUrl = data.offers.next_page_url;
    this.publicOffer.total = data.offers.total;
    return { offers: data.offers.data, total: this.total };
  }

  async loadOffersCategories() {
    let { data } = await this.get(this.url(host.url.achat.offersCategoryUrl));
    this.categories.allLoad = true;
    return { categories: data };
  }

}

export class Offer {
  /**@type {NUmber} */
  id;
  /**  @type {string} */
  name;
  /** @type {number} */
  avance;
  /**  @type {string} */
  created_at;
  /** @type {string} */
  delay;
  /** @type {number} */
  description;
  /** @type {number} */
  id;
  /** @type {number} */
  price;
  /** @type {number} */
  quantite;
  /** @type {number} */
  sous_category_id;
  /** @type {string} */
  updated_at;
  /** @type {number} */
  user_id;
  /** @type {string} */
  validate_at;
  /** @type {number} */
  visible;
}

export class Souscription {
  /**@type {Number} */
  avance;
  /**@type {Date} */
  cancel_at;
  /**@type {Number} */
  delay;
  /**@type {String} */
  description;
  /**@type {Number} */
  id;
  /**@type {Number} */
  offer_id;
  /**@type {Number} */
  quantite;
  /**@type {Date} */
  souscrited_at; 
  /**@type {Date} */
  updated_at;
  /**@type {Number} */
  user_id;
  /**@type {Date} */
  validate_at;
  /**@type {Offer} */
  offer;
}