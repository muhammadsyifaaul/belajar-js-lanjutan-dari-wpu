let ask = confirm("Apakah anda admin?");


if(ask) {
    let title = prompt('Enter title :');
    let genre = prompt('Enter Genre:')
    let release = prompt('Enter Release Date:')
    let addBook = new AddBook(title,genre,release);
    bookData.push(addBook);
    let addAgain = confirm("Apakah Anda ingin menambahkan data lagi?");
        if (addAgain) {
            addBook();
        }
}

let bookData = [];

function AddBook(title,genre,release) {
    this[title] = {
        genre: genre,
        release: release,
        available: true
    }
}

function search() {
    let search = prompt('Enter your search :');
    for(i in bookData) {
        if(i.includes(search) || bookData[i].genre.includes(search) || bookData[i].release.includes(search)) {
            alert(`Judul:` + i + ` Genre:` + bookData[i].genre + ` Tahun Rilis:` + bookData[i].release);
        }
        else {
            alert('Book not found');
        }
    }
}


