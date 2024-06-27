const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=95d1dc3d&s=';

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
  const keyword = document.querySelector('.input-keyword').value;
  
  let movies = await searchMovie(keyword)
  updateUi(movies)
});

function updateUi(movie) {
  const movieContainer = document.querySelector('.movie-container');
  let cards = ''
  movie.forEach(m => {
    cards += showCards(m)
  })
  movieContainer.innerHTML = cards;
}
function searchMovie(keyword) {
  return fetch(api + keyword)
 .then(response => response.json())
 .then(data => data.Search)
}


function showCards(movie) {
  return `
  <div class="card mt-2 me-2" style="width: 18rem;">
            <img src=${movie.Poster}class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${movie.Title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary modal-detail" data-imdbid=${movie.imdbID}>Detail</a>
            </div>
          </div>`
}

document.addEventListener('click', function(e) {
  if(e.target.contains('modal-detail')) {
    const imdbid = e.target.dataset.imdbid;
    fetch('http://www.omdbapi.com/?apikey=882e02af&i=' + imdbid)
   
  }
})