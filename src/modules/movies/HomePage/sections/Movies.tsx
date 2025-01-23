import React from 'react'
import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';
import { URLS } from '../../../../utils/url';
import { useSelector } from 'react-redux';
/* 
{Title: 'Run All Night', Year: '2015', imdbID: 'tt2199571', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTU2ODI3ODEyOV5BMl5BanBnXkFtZTgwMTM3NTQzNDE@._V1_SX300.jpg'}
*/


function Movies({ moviesStore }) {
  let movies = moviesStore.movies;
  
  if (movies.length == 0) {
    movies = [{ id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }];
  }

  
  movies = movies.filter((m) => (new RegExp(moviesStore.filter.categories.join("|"), "i")).test(m.Genre));

  console.log(movies)

  return (
    <div className='container mx-auto p-4 flex flex-col gap-[30px]'>
      <h2>Movies</h2>
      <div className="flex gap-[80px] w-[100%]" style={{ overflowX: "scroll" }}>
        {movies.map(Movie)}
      </div>
    </div>
  )
}

function Movie(props) {
  if (!props.imdbID) {
    return <div className="w-[250px] h-[490px]" key={props.id}>
      <ContentLoader viewBox="0 0 250 490" >
        <rect x="0" y="0" width="250" height="370" />
        <rect x="0" y="380" width="250" height="120" />
      </ContentLoader>
    </div>
  }
  return <Link className="w-[250px]" key={props.imdbID} to={URLS.moviePreveiw(props.imdbID)}>
    <div className={`relative bg-cover bg-center w-[250px] h-[370px]`} style={{ "backgroundImage": `url('${props.Poster}')` }} >
    </div>
    <div>
      <h2 className="h-[50px]">{props.Country}, {props.Year}</h2>
      <h2>{props.Title}</h2>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[url('/icon/brand.svg')] w-[35px] h-[17px]" />
          <div>{props.Ratings[0].Value}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[url('/icon/orange.svg')] w-[16px] h-[17px]" />
          <div>{props.Ratings[1].Value}</div>
        </div>
      </div>
      <div>{props.Genre}</div>
    </div>
  </Link>
}


export default Movies
