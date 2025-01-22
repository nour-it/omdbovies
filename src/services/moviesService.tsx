import url from "../var/host";
import BaseService from "./baseService";


export default class MoviesService extends BaseService {

  /**
   * @type {MoviesService}
   */
  static moviesService;

  /**
   * @returns {MoviesService}
   */
  static getMoviesService() {
    if (!this.service) {
      this.moviesService = new MoviesService();
    }
    return this.moviesService;
  }


  async getMovies() {
    let { data } = await this.get(this.entryPoint + url.movies.search)
    const movies = [];
    for (let movie of data.Search) {
      let { data } = await this.get(this.entryPoint + url.movies.detail(movie.imdbID))
      movies.push(data)
    }
    return movies;
  }

}
