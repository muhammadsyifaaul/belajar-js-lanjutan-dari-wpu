// const tampilNama1 = (nama) => {
//     return `halo, ${nama}`;
// }
// console.log('BUdi');

// const tampilnama = nama => {return `halo ,${nama} selamat malam`;}
// const tampilnama = nama => return `halo ,${nama} selamat malam`;
// const tampilnama = nama =>  `halo ,${nama} selamat malam`;

// const tampilNama = (nama,waktu) => {
//     return `halo, ${nama}, selamat ${waktu}`;
// }
// console.log(tampilNama('budi','malam'));


// const tampil = () => "Hello"; // jika tidak ada parameter harus ditulis tanda () nya

// let mahasiswa = ['budi','ujang','samsul'];

// let jmlHuruf = mahasiswa.map(function(mahasiswa){
//     return mahasiswa.length;
// });
// console.log(jmlHuruf);

// let jmlHuruf = mahasiswa.map(mahasiswa => mahasiswa.length);
// console.log(jmlHuruf);

// let jmlHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
// console.log(jmlHuruf);
// let jmlHuruf = mahasiswa.map(nama => ({nama /*jika ingin mengembalikan properti yg sma dgn nilainya, hany ditulis satu saja*/ , jmlHuruf: nama.length}));
// console.log(jmlHuruf);








// konsep this pada arrow func

// Constructor func
// arrow function tidak mengenal this, tapi jika arrow function pada method,
// bisa menggunakan arrow function, dan this nya akan mengacu ke lexical scope nya
// atau var di dalam func diluarnya
// const Mahasiswa = function () {
//     this.nama = 'ujang';
//     this.umur =  21;
//     this.sayHello = function () {
//         console.log(`Halo, saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const ujang = new Mahasiswa(); 
// const Mahasiswa = function () {
//     this.nama = 'ujang';
//     this.umur =  21;
//     this.sayHello = () => {
//         console.log(`Halo, saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const ujang = new Mahasiswa(); 


// object literal
// this pada arrow func dalam method yg dibuat dalam 
// object literal, maka this akan mengacu ke global
// karena dalam object literal tidak ada lexical scope/ konsep this
// const mhs1 = {
//     nama : 'ujang',
//     umur : 21,
//     sayHello : function () {
//         console.log(`Halo, saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }




const Mahasiswa = function () {
    this.nama = 'ujang';
    this.umur =  21;
    this.sayHello = function () {
        console.log(`Halo, saya ${this.nama}, dan saya ${this.umur} tahun`);
    }

    setInterval(function() {
        console.log(this);
    }, 500);
    setInterval(() => {
        console.log(this.umur++);
    }, 500)
}