// 1. HTML fragments

// const mhs = {
//   nama: 'ujang',
//   umur: 23
// }

// const elemen = `<div class="mhs">
//     <h2>${mhs.nama}</h2> 
//     <span> ${mhs.umur}</span>
// </div>`

// 2. Looping

// const mhs = [
//     {
//         nama : 'ujang',
//         umur : 23
//     },
//     {
//         nama : 'ujang',
//         umur : 23
//     },
//     {
//         nama : 'ujang',
//         umur : 23
//     }
// ]

// const elemen = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.umur}</li>
//     </ul>`).join('')}
// </div>`


// 3. Conditionals
// ternary operation
// const lagu = {
//     judul : 'hikaru nara',
//     penyanyi : 'orange',
//     feat : 'ujang'
// }

// const elemen = `<div class="lagu">
//     <h2>${lagu.judul}</h2> 
//     <span>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})`: ''}</span>
//     </div>`


//  4. Nested
// Html frgaments bersarang

const mhs = {
    nama : 'ujang',
    semester : 5,
    matakuliah: ['pemrograman web', 'pemrograman mobile']
}

function cetakMatkul(matakuliah) {
    return `
    <ol>
    ${matakuliah.map(m => `<li>${m}</li>`).join('')}
    </ol>
    `
}

const elemen = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester ${mhs.semester}</span>
    <h4>Mata kuliah</h4>
    ${cetakMatkul(mhs.matakuliah)}
</div>`


document.body.innerHTML = elemen;