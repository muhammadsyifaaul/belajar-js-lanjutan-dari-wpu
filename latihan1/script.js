// function Task(id,title) {
//     this.id = id;
//     this.title = title;
//     this.selesai = false;
// }

// let daftarTugas = [];

// function AddTask () {
//     let id = daftarTugas.length + 1
//     let newTask = new Task(id,prompt('Enter your task :'));
//     daftarTugas.push(newTask);
// }

// function solveTask() {
//     let search = prompt('Enter your task :');
//     for (let i = 0; i < daftarTugas.length; i++) {
//         if (daftarTugas[i].title == search) {
//             daftarTugas[i].selesai = true;
//         } else {
//             alert('Task not found');
//         }
//         break;
//     }
// }

// Task(AddTask());
// console.log(daftarTugas);
// solveTask();

// function AddBook (title, genre, author) {
//   this[title] = {
//     genre: genre,
//     author: author
//   }
// }

// let book = []

// let addTitle = prompt('Input tile book')
// let addGenre = prompt('Input Genre Book')
// let addAuthor = prompt('Input Author Name')

// let addBook = new AddBook(addTitle, addGenre, addAuthor)
// book.push(addBook)
// addBook.available = 'tersedia'
// console.log(book)


// let book = {
//   'Harry Potter' : {
//     genre: 'magic',
//     release: 2002,
//     avaible: true
//   },
//   'Lord of the Rings' : {
//     genre: 'adventure',
//     release: 2001,
//     avaible: true
//   }
// }

// function search () {
//   let search = prompt('Input title book');
//   for(i in book) {
//     if (i == search || book[i].title == search || book[i].genre == search || book[i].release == search) {
      
//       let choose = confirm('apakah anda ingin membeli buku ini?');
//       if(choose) {
//         book[i].avaible = false;
//         alert('anda membeli buku ini');
//         console.log(book);
//       }
      
//     }
//   }
// }

// search();

