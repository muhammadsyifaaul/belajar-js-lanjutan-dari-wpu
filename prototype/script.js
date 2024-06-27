// function declaration

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },

//     main : function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// }

// function Mahasiswa(nama,energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return Mahasiswa;
// }

// let ujang = Mahasiswa("Ujang",20);

// function Mahasiswa(nama,energi) {
// let mahasiswa = Object.create(methodMahasiswa);
// let this = Object.create(Mahasiswa.prototype)
//     this.nama = nama;
//     this.energi = energi;

// return Mahasiswa;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain`;
// }

// let ujang = Mahasiswa("Ujang",20);

// class Mahasiswa {
//   constructor (nama, energi) {
//     this.nama = nama
//     this.energi = energi
//   }
//   makan (porsi) {
//     this.energi += porsi
//     return `Halo ${this.nama}, selamat makan`
//   }
//   main (jam) {
//     this.energi -= jam
//     return `Halo ${this.nama}, selamat bermain`
//   }
// }


// let angka = [1,2,3];
// angka.reverse();
// let angka = new Array();

// function Buku(judul,genre) {
//     this.judul = judul;
//     this.genre = genre;
// }

// let add = new Buku('Ujang', 'balap');
// console.log(add);

// Buku.prototype.penerbit = 'samsul';
// console.log(add);