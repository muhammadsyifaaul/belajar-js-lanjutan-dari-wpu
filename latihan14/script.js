// const game_name = prompt('Enter game name :').toLocaleLowerCase();
// const key = '59694d050dd2425487e16ef800e6927d';
// const api = 'https://api.rawg.io/api/games?'
// // .then(response => response.json())
// // .then(response => console.log(response))
// // .catch(error => console.log(error))

// function searchName() {
//     fetch(`${api}key=${key}&search=${game_name}`)
//     .then(response => response.json())
//     .then(data => {
//         for(let game of data.results) { // Perhatikan perubahan di sini
//             console.log(game.name);
//         }
//     })
//     .catch(error => console.log(error));
// }

// searchName();
// const req = fetch('https://kitsu.io/api/edge/anime?');

// function searchGenre() {
//     const genre = prompt('Enter your title :');
//     const search = fetch(`${req}filter[categories]${genre}`);
//     search
//     .then(response => response.json())
//     .then(response => {
//         for(let data of response.data) {
//             console.log(data.attributes.slug);
//         }
//     })
//     .catch(error => console.log(error));
// }

// searchGenre()
// const api = 'https://kitsu.io/api/edge/anime?include=genres'; // Menambahkan include genres


// fetch(api)
// .then(response => response.json())
// .then(response => {
//     for(let anime of response.data) {
//         console.log(anime.attributes.slug);
//         // Menambahkan kode untuk mengambil genre dari relationship jika tersedia
//         let genres = anime.relationships.genres.links.related;
//         fetch(genres)
//         .then(genreResponse => genreResponse.json())
//         .then(genreData => {
//             let genreList = genreData.data.map(genre => genre.attributes.name).join(', ');
//             show += `
//             <h2>Title : ${anime.attributes.slug}</h2>
//             <h3>Type : ${anime.attributes.subtype}</h3>
//             <p>Genre : ${genreList}</p>
//             <img src="${anime.attributes.posterImage.medium}" alt="${anime.attributes.slug}">
//             `;
//             document.body.innerHTML = show;
//         });
//     }
// })
// .catch(error => console.error('Error:', error));

// let show = ``
// function searchGenre() {
//     const genre = prompt('Enter your title :');
//     const req = 'https://kitsu.io/api/edge/anime?filter[categories]=' + genre;
    
//     fetch(req)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         for(let anime of data.data) {
//             console.log(anime.attributes.slug);
//         }
//     })
//     .catch(error => console.error('Error fetching data:', error));
// }

const api = 'https://kitsu.io/api/edge/anime?include=genres';
let cards = '';

fetch(api)
.then(response => response.json())
.then(response => {
    const fetches = [];
    for(let anime of response.data) {
        let genres = anime.relationships.genres.links.related;
        fetches.push(
            fetch(genres)
            .then(genreResponse => genreResponse.json())
            .then(genreData => {
                let genreList = genreData.data.map(genre => genre.attributes.name).join(', ');
                return showCards(anime, genreList);
            })
        );
    }
    return Promise.all(fetches); // Menunggu semua fetch genre selesai
})
.then(allCards => {
    cards = allCards.join('');
    document.querySelector('.movie-container').innerHTML = cards;
})
.catch(error => console.error('Error:', error));

function showCards(anime, genreList) {
    return `<div class="col-md-4 my-3">
      <div class="card">
          <img class="card-img-top" src=${anime.attributes.posterImage.medium} alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${anime.attributes.slug}</h5>
            <p class="card-subtitle mb-2 text-muted">${genreList}</p>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-id="${anime.id}">Show details</a>
          </div>
        </div>
      </div>`;
}

function showMovieDetail (anime, genreList) {
    return `<div class="container-fluid">
      <div class="row">
          <div class="col-md-3">
              <img src="${m.Poster}" class="img-fluid">
          </div>
          <div class="col-md">
              <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                  <li class="list-group-item"><strong>Plot: </strong> <br> ${m.Plot}</li>
                </ul>
          </div>
      </div>
      </div>`
  }
  
