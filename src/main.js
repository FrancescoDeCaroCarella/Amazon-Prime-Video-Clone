import { cE, qS, URL_DB, cDL } from "./utils.js";
import { getMovieCard, getTopRatedMovieCard, getHeroMovieCard } from "./moviecard.js";

let movies = [];
const urlMostPopular = URL_DB[0].URL_MOST_POPULAR;
const urlTopRated = URL_DB[1].URL_TOP_RATED;
const urlComedy = URL_DB[2].URL_COMEDY;
const urlThriller = URL_DB[3].URL_THRILLER;
const urlHorror = URL_DB[4].URL_HORROR;
const heroContainer = qS(".hero-container");
const topRatedContainer = qS(".top-rated-container");
const comedyContainer = qS(".comedy-container");
const thrillerContainer = qS(".thriller-container");
const horrorContainer = qS(".horror-container");

fetch(urlMostPopular)
  .then((res) => res.json())
  .then((data) => {
    movies = data.results;
    movies.map((res) => {
      getHeroMovieCard(res, heroContainer);
    });
  });

fetch(urlTopRated)
  .then((res) => res.json())
  .then((data) => {
    movies = data.results;
    movies.map((res) => {
      getTopRatedMovieCard(res, topRatedContainer);
    });
  });

fetch(urlComedy)
  .then((res) => res.json())
  .then((data) => {
    movies = data.results;
    movies.map((res) => {
      getMovieCard(res, comedyContainer);
    });
  });

fetch(urlThriller)
  .then((res) => res.json())
  .then((data) => {
    movies = data.results;
    movies.map((res) => {
      getMovieCard(res, thrillerContainer);
    });
  });

fetch(urlHorror)
  .then((res) => res.json())
  .then((data) => {
    movies = data.results;
    movies.map((res) => {
      getMovieCard(res, horrorContainer);
    });
  });
