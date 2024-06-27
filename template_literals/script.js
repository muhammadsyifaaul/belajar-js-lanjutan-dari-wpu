// string literal: string yang biasa kita pakai: 'hello wordl'
// template literal :
// menggunakan backtick
// Multi-linr string
// Embedded Expresseion
// Html Fragments
// Expression Interpolation

// `string text baris 1
// baris 2
// baris 3` //multi-line string

// `string text ${expression} string text` // embedded expression

// tag `string text ${expression} string text` // tagged template

// // multiline string (html fragments) contoh

// const mhs = {
//     nama : 'ujang',
//     umur = 23;
// }

// let elemen =  `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="umur">${mhs.umur}></span>
// </div>`;

// // embedded expression
// console.log(`Halo nama saya ${mhs.nama}, dan saya ${mhs.umur} tahun`);




// template literals / string literals

// const nama = 'ujang';
// const umur = 23;
// console.log(`Halo nama saya ${nama}, dan saya ${umur} tahun`);

// embedded expression

// console.log(`${1+1}`);
// console.log(`${alert('halo!')}`);

// const x = 10;
// console.log(`${(x%2 == 0) ? 'genap' : 'ganjil'}`);

// Html fragment
const mhs = {
    nama: 'ujang',
    umur: 23
};

const elemen = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="umur">${mhs.umur}</span>
</div>`;

