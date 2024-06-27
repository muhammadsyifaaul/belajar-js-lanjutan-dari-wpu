const api = 'https://kitsu.io/api/edge/anime?include=genres';

fetch(api)

.then(response => response.json())
.then(response => {
    let animeData = response.data;
    let getGenre = animeData.map(anime => {
        let genres = anime.relationships.genres.links.related;
        return fetch(genres)
                .then(genreResponse => genreResponse.json())
                .then(genreData => {
                    let genreList = genreData.data.map(genre => genre.attributes.name).join(', ');
                    return {
                        title: anime.attributes.slug,
                        type: anime.attributes.subtype,
                        genres: genreList
                    };
                });
    })
    return Promise.all(getGenre)
})
.then(animeDetails => {
    animeDetails.forEach(anime => {
        console.log(`Title: ${anime.title}`);
        console.log(`Type: ${anime.type}`);
        console.log(`Genres: ${anime.genres}`);
        console.log('\n');
    });
})
.catch(error => console.log(error))