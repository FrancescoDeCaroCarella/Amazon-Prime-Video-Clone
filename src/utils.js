const cE = (el) => document.createElement(el);
const qS = (el) => document.querySelector(el);
const URL_DB = [
  {
    //MOST POPULAR
    // URL_MOST_POPULAR:"https://api.themoviedb.org/3/discover/movie?api_key=741f255e2fca99e2b2552acba109f99e&language=it-IT&region=IT&sort_by=popularity.desc",
  },
  {
    //TOP RATED
    URL_TOP_RATED:
      "https://api.themoviedb.org/3/movie/top_rated?api_key=741f255e2fca99e2b2552acba109f99e&language=it-IT&region=IT&sort_by=rating.desc",
  },
  {
    //GENRE COMEDY
    URL_COMEDY:
      "https://api.themoviedb.org/3/discover/movie?api_key=741f255e2fca99e2b2552acba109f99e&language=it-IT&region=IT&sort_by=popularity.desc&with_genres=35",
  },
  {
    //GENRE THRILLER
    URL_THRILLER:
      "https://api.themoviedb.org/3/discover/movie?api_key=741f255e2fca99e2b2552acba109f99e&language=it-IT&region=IT&sort_by=popularity.desc&with_genres=53",
  },
  {
    //GENRE HORROR
    URL_HORROR:
      "https://api.themoviedb.org/3/discover/movie?api_key=741f255e2fca99e2b2552acba109f99e&language=it-IT&region=IT&sort_by=popularity.desc&with_genres=27",
  },
];

//IMAGE URL
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const IMG_URL_HERO = "https://image.tmdb.org/t/p/original"

// CUT DESCRIPTION LENGHT
const cDL = function cutDescriptionLength(data) {
  if (data.length >= 125) return data.substr(0, 125)+' ...';
  else return data
}

//INSERT CURRENT YEAR
let dateY = new Date().getFullYear().toString();
document.getElementById("year").innerHTML = dateY;
//END INSERT CURRENT YEAR

//SLIDER CARD BUTTON
const containter = document.getElementById("top-rated-container");
const buttonRight = document.getElementById("next-btn");
const buttonLeft = document.getElementById("prev-btn");
let containerDimensions = containter.getBoundingClientRect();
let containerWidth = containerDimensions.width;

buttonRight.onclick = function () {
  containter.scrollLeft += containerWidth;
};
buttonLeft.onclick = function () {
  containter.scrollLeft -= containerWidth;
};

//HERO SCROLL 
const heroImage = document.getElementById("hero-last-movies");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    heroImage.style.height = "80px";
    heroImage.style.transitionDuration = "1s";
  } else {
    heroImage.style.height = "100vh";
  }
}

window.onscroll = function () {
  scrollFunction();
};


export { cE, qS, URL_DB, IMG_URL, IMG_URL_HERO, cDL };
