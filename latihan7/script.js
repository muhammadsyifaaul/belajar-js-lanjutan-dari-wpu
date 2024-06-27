let daftarAnime = {
    'kimi no nawa' : {
        tahunRilis : 2020,
        genre : ['romance','slice of life'],
        penjualan: [12,3,4,8,9,12,3,7,8,11,12,5]
    },
    'non non biyori' : {
        tahunRilis : 2021,
        genre: ['slice of life', 'school'],
        penjualan: [12,3,12,12,2,12,12,11,9,11,13,5]
    },
    'hitoribocchi': {
        tahunRilis : 2022,
        genre : ['slice of life', 'school'],
        penjualan: [9,3,12,6,2,3,12,11,11,11,1,5]
    }
};

alert('Selamat datang! Anda ingin mencari anime berdasarkan judul/genre/tahun rilis/terlaris?');

let search = prompt('Masukkan judul/genre/tahun rilis/terlaris: ').toLowerCase(); // ubah input ke lowercase

function searchAnime() {
    for(let judul in daftarAnime) {
        if(judul.toLowerCase() === search) { // bandingkan judul secara tepat, ubah ke lowercase
            const anime = daftarAnime[judul];
            let totalPenjualan = anime.penjualan.reduce((acc,val) => acc + val);
            let rata = Math.ceil(totalPenjualan / anime.penjualan.length);
            const showAnime = `
                <h1>${judul}</h1>
                <ul>
                    <li>Tahun Rilis: ${anime.tahunRilis}</li>
                    <li>Genre: ${anime.genre.join(', ')}</li>
                    <li>Penjualan: ${anime.penjualan.join(', ')}</li>
                    <li>dengan total Penjualan: ${totalPenjualan}</li>
                    <li>dengan rata rata: ${rata} perbulannya</li>
                </ul>
            `;
            document.body.innerHTML = showAnime;
            return;
        }
    }
    // Jika anime tidak ditemukan
    document.body.innerHTML = '<h1>Anime tidak ditemukan</h1>';
}

function searchHighest() {
    let highest = 0;
    let highestAnime = '';
    for(let judul in daftarAnime) {
        let total = daftarAnime[judul].penjualan.reduce((acc,val) => acc + val);
        if(total > highest) {
            highest = total;
            highestAnime = judul;
        }
    }
    const showAnime = `
        <h1>${highestAnime}</h1>
        <ul>
            <li>Tahun Rilis: ${daftarAnime[highestAnime].tahunRilis}</li>
            <li>Genre: ${daftarAnime[highestAnime].genre.join(', ')}</li>
            <li>Penjualan: ${daftarAnime[highestAnime].penjualan.join(', ')}</li>
            <li>dengan total Penjualan: ${highest}</li>
        </ul>
    `;
    document.body.innerHTML = showAnime;
}

function searchGenre() {
    let searchGen = prompt('Masukkan genre yang ingin Anda cari: ').toLowerCase();
    let matchingAnime = [];
    for (let judul in daftarAnime) {
        if (daftarAnime[judul].genre.includes(searchGen)) {
            matchingAnime.push(judul);
        }
    }
    if (matchingAnime.length > 0) {
        const showAnime = `
            <h1>Daftar anime dengan genre ${searchGen}</h1>
            <ul>
                ${matchingAnime.map(judul => `<li>${judul}</li>`).join('')}
            </ul>
        `;
        document.body.innerHTML = showAnime;
    } else {
        document.body.innerHTML = '<h1>Tidak ada anime dengan genre yang sesuai</h1>';
    }
}



if(search === 'terlaris') {
    searchHighest();
} else if(search === 'genre') {
    searchGenre();
}

else {
    searchAnime();
}
