


// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//        console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }
// function Mahasiswa(nama,nim,energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.nim = nim;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa('ujang',67,20);



// function Mahasiswa(nama,energi) {

//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return 'halo ${this.nama}, selamat makan';
// }

// let sandhika = new Mahasiswa("Udin", 20);



// function Mahasiswa(nama,nim,energi) {
//     this.nama = nama;
//     this.nim = nim;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
// }

// let sandhika = new Mahasiswa('ujang',67,20);



// function Mahasiswa(nama,nim,energi) {
//     this.nama = nama;
//     this.nim = nim;
//     this.energi = energi;

     

    
// }

// let sandhika = new Mahasiswa('ujang',67,20);




// class Mahasiswa {
//     constructor(nama,energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return 'Halo ${this.nama}. selamat makan';
//     }
// }

// let sandhika = new Mahasiswa("udin",10);



 

// function declaration
// function Mahasiswa(nama,energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//     }

//     return Mahasiswa;
// }

// let ujang = Mahasiswa("Ujang",20);

// constructor function

// function Mahasiswa(nama,energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//     }

// }

// let ujang = Mahasiswa("Ujang",20);


//  latihan

// let animalName = {
//     name: '',
//     species: '',
//     group: [],
//     food: [],
// }


// function Animal(name,species,group,food) {
//     this.name = name;
//     this.species = species;
//     this.group = group;
//     this.food = food;

//     animalName.name += this.name;
//     animalName.species += this.species;
//     animalName.group.push(this.group);
//     animalName.food.push(this.food);

//     console.log(animalName);
// }

// let lion = new Animal('Lion','Cat','Animal','Meat');
// let zebra = new Animal('Zebra','Horse','Animal','Grass');
// let rabbit = new Animal('Rabbit','Mamsl','Animal','Carrot');


// function Title(name) {
//     this[name] = {};
// }

// function addSubTitle(title, subTitle, subName) {
//     title[subTitle] = { subTitle: subName };
// }

// let title = new Title('wpu');
// addSubTitle(title, 'wpu', 'sub-wpu');

// console.log(title.wpu.subTitle); // Output: 'sub-wpu'


