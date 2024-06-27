//  lexical scope
// closure : inner function bisa memiliki akses ke parent variabel, artinnya
// jika ada function didalam function(inner func) maka function itu bisa memiliki
// akses ke variabel parentnya(pembungkusnya), bahkan sampai ke object window/global

// function init() {
//     let nama = 'ujang';
//     function tampilNama() {
//         console.log('halo ' + nama);
//     }
//     return tampilNama; // tidak akan tampil apa apa karena functionnnya baru jalan setengah
// }

// let panggilNama = init();
// panggilNama(); // baru func diatas akan menamplkan nama ujang

// function init() {
// let nama = 'ujang';
// function tampilNama(nama) {
//     console.log('halo ' + nama);
// }
// return tampilNama;
//     return function(nama) {
//         console.log('halo ' + nama);
//     }
// }

// let panggilNama = init();
// panggilNama('ujang');

// kenapa menggunakan function didalam function/closure ?

// utk membuat function factory

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`halo ${waktu}, ${nama}`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('ujang');
// selamatSiang('ujang');
// selamatMalam('ujang');

// untuk private method

// let counter = 0;
// let add = function() {
//     return ++counter;
// }

// console.log(add());

// let add = function () {
//   let counter = 0
//   return ++counter
// }

// console.log(add())

// let add = function () {
//     let counter = 0
//     return function() {
//        return ++counter;
//     }
//   }
  
//   let a = add();

//   console.log(a());
//   console.log(a());
//   console.log(a());


// let add = (function () {
//     let counter = 0
//     return function() {
//        return ++counter;
//     }
//   })();
  


//   console.log(add());
//   console.log(add());
//   console.log(add());



// let buku = {
//    genre: 'horror',
//    halaman: 200
// }



// function Add(buku) {
//    this.judul = this.judul;
// }

// let add = new Add('Ujang balap');
// console.log(add);

// Add.prototype.penerbit = 'samsul';
// console.log(add);

