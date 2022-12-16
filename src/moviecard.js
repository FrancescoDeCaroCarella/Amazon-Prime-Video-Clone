import { cE, qS, URL_DB, IMG_URL, IMG_URL_HERO, cDL } from "./utils.js";

const getMovieCard = (res, parent) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const voteEl = cE("p");
  const infoContainerEl = cE("div");
  const titleEl = cE("h3");
  const dateEl = cE("p");
  const descEl = cE("p");
  const genreEl = cE("p");
  const voteNumberEl = cE("p");

  cardEl.className = "movie_card";
  imgEl.className = "movie_img";
  voteEl.className = "stars";
  infoContainerEl.className = "movie_card_info";
  titleEl.className = "modal_title";
  dateEl.className = "modal_date";
  descEl.className = "modal_desc";
  genreEl.className = "modal_genre";
  voteNumberEl.className = "modal_vote";

  imgEl.setAttribute("src", `${IMG_URL}${res.poster_path}`);
  imgEl.setAttribute("alt", "image");
  voteEl.setAttribute(`style`, `--rating: ${res.vote_average};`);
  titleEl.textContent = res.title;
  dateEl.textContent = res.release_date;
  descEl.textContent = cDL(res.overview);
  genreEl.textContent = res.genre_ids;
  voteNumberEl.textContent = res.vote_average;

  infoContainerEl.append(titleEl, dateEl, descEl, genreEl, voteNumberEl);
  cardEl.append(imgEl, voteEl);
  parent.append(cardEl);

  cardEl.addEventListener("mouseover", () => {
    cardEl.appendChild(infoContainerEl);
    parent.classList.remove("movies-container-overflow");
  });
  cardEl.addEventListener("mouseout", () => {
    cardEl.removeChild(infoContainerEl);
    parent.classList.add("movies-container-overflow");
  });
};

const getTopRatedMovieCard = (res, parent) => {
  const cardEl = cE("div");
  const voteEl = cE("h1");
  const imgEl = cE("img");
  
  cardEl.className = "top_rated_movie_card";
  voteEl.className = "movie_vote";
  imgEl.className = "movie_img";

  imgEl.setAttribute("src", `${IMG_URL}${res.poster_path}`);
  imgEl.setAttribute("alt", "image");
  voteEl.textContent = res.vote_average;

  cardEl.append(imgEl, voteEl);
  parent.append(cardEl);
};

const getMostPopularMovieCard = (res, parent) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  imgEl.className = "movie_img_hero";

  imgEl.setAttribute("src", `${IMG_URL_HERO}${res.backdrop_path}`);
  imgEl.setAttribute("alt", "image");

  cardEl.append(imgEl);
  parent.append(cardEl);
};

export { getMovieCard, getTopRatedMovieCard, getMostPopularMovieCard };
