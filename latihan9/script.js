

// function AddNote() {
//     let title = prompt('Enter title:');
//     let content = prompt('Enter content:');
//     let date = prompt('Enter date:');
//     let newNote = {
//         title: title,
//         content: content,
//         date: date
//     };
//     note.push(newNote);
// }

// function searchNote() {
//     let search = prompt('Search note like a title/content/date:');
//     let results = ""; // Variabel untuk menyimpan catatan yang cocok dengan pencarian

//     for (let i in note) {
//         if (i.includes(search) || note[i].title.includes(search) || note[i].content.includes(search) || note[i].date.includes(search)) {
//             // Menambahkan catatan yang cocok dengan pencarian ke dalam variabel results
//             results += `
//                 <h1>Title: ${note[i].title}</h1>
//                 <p>Content: ${note[i].content}</p>
//                 <p>Date: ${note[i].date}</p>
//                 <hr>`; // Tambahkan pemisah antara catatan
//         }
//     }

//     // Mengubah isi dari body HTML dengan hasil pencarian
//     document.body.innerHTML = results;
// }

// function chooseUser() {
//     while (true) {
//         let userChoose = prompt('1. Add Note \n2. Search Note \n0. Exit');
//         if (userChoose == 1) {
//             AddNote();
//             let offer = confirm('Add another note?');
//             if (!offer) {
//                 console.log(note);
//                 break;
//             }
//         } else if (userChoose == 2) {
//             searchNote();
//         } else if (userChoose == 0) {
//             console.log(note);
//             break;
//         } else {
//             alert('Invalid choice');
//         }
//     }
// }

// // Panggil fungsi chooseUser() untuk memulai aplikasi
// chooseUser();

const note = [];

function manageNote() {
  function AddNote() {
    let title = prompt('Enter title:');
    console.log('Title:', title);
    let content = prompt('Enter content:');
    console.log('Content:', content);
    let date = prompt('Enter date:');
    console.log('Date:', date);
    let newNote = {
      title: title,
      content: content,
      date: date
    };
    console.log('New Note:', newNote);
    note.push(newNote);
  }

  function searchNote() {
    let search = prompt('Search note like a title/content/date:');
    console.log('Search:', search);
    let results = ''; // Variabel untuk menyimpan catatan yang cocok dengan pencarian

    for (let i in note) {
      if (
        i.includes(search) ||
        note[i].title.includes(search) ||
        note[i].content.includes(search) ||
        note[i].date.includes(search)
      ) {
        // Menambahkan catatan yang cocok dengan pencarian ke dalam variabel results
        results += `
                <h1>Title: ${note[i].title}</h1>
                <p>Content: ${note[i].content}</p> 
                <p>Date: ${note[i].date}</p>
                <hr>`; // Tambahkan pemisah antara catatan
      }
    }

    // Mengubah isi dari body HTML dengan hasil pencarian
    console.log('Results:', results);
    document.body.innerHTML = results;
  }

  function delNote() {
    let search = prompt('Enter title / date of note to delete:');
    note.filter(property => {
      if(property.title == search || property.date == search) {
        console.log(`Title: ${property.title} Date: ${property.date} Content: ${property.content}`);
        let ready = confirm('You want to delete this note?');
        if(ready) {
          note.splice(note.indexOf(property), 1);
          alert('Note deleted');
          console.log(note);
        } else {
          alert('Note not found or deleted');
        }
      }
      
    });
  }

  return { AddNote, searchNote , delNote }; // Mengembalikan objek dengan method AddNote dan searchNote
}

let run = manageNote();
function chooseUser() {
  let choose = prompt('1. Add Note \n2. Search Note \n3. Delete \n0. Exit');
  if (choose == 1) {
      run.AddNote();
      let offer = confirm('Add another note?');
      while (offer) {
          run.AddNote();
          offer = confirm('Add another note?');
      }
      chooseUser();
  } else if (choose == 2) {
      run.searchNote();
  } else if (choose == 3) {
      run.delNote();
  } else if (choose == 0) {
      console.log(note);
  }
  else {
      alert('Invalid choice');
  }
}


chooseUser();





