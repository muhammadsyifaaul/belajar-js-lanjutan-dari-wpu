// destructuring variabels/assignment : membongkar isi array / proepti object

// destructuring array

//const perkenalan = ['halo','nama','saya','ujang'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];

// const [salam,satu,dua,tiga] = perkenalan; 
//console.log(salam); // halo
//console.log(satu);   // nama


// skip items
//const [salam, , , nama] = perkenalan; // jika ingin melompati index tertentu tinggal hapus saja tapi komanya jangan
//console.log(salam); // halo
//console.log(nama); // ujang

// swap / menukar isi items

// let a =1;
// let b = 2

// [a,b] = [b,a];


// return value pada function

// function coba() {
//     return [1,2];
// }

// const a = coba();
// console.log(a)

// const [a , b ] = coba();
// console.log(a);
// console.log(b);


// rest parameter
// const [a, ...values] = [1,2,3,4,5,6]; //angak 1 masuk ke a sisanya ke values
// console.log(a);
// console.log(b);




// destructuring object

// const mhs = {
//     nama : 'ujang',
//     umur : 28
// }

// const {nama, umur} = mhs; //namanya harus sama dgn propertinya
// console.log(nama);


// assignment tanpa deklarasi object

// const mhs = {
//     nama : 'ujang',
//     umur : 28
// }

// ({nama, umur}) = {
//     nama : 'ujang',
//     umur : 28
// }; //namanya harus sama dgn propertinya
// console.log(nama);

// assign ke variabel baru

// const mhs = {
//     nama : 'ujang',
//     umur : 28
// }

// const {nama: n , umur: u} = mhs;
// console.log(n);
// console.log(u);


// memberikan default value
// const mhs = {
//     nama : 'ujang',
//     umur : 28
// }

// const {nama , umur ,email = 'email.com'} = mhs;
// console.log(email);


//memberi nilai default dan assign ke variabel bari
// const mhs = {
//     nama : 'ujang',
//     umur : 28,
//     email: 'ujang.com'
// }

// const {nama: n , umur : u ,email : e = 'email.com'} = mhs;
// console.log(e);


// rest parameter
// const mhs = {
//     nama : 'ujang',
//     umur : 28,
//     email: 'ujang.com'
// }

// const {nama, ...values} = mhs;
// console.log(values);

// mengambil field pd object, 
// setelah dikirim sebagai parameter untuk func
const mhs = {
    id: 123,
    nama : 'ujang',
    umur : 28,
    email: 'ujang.com'
}

function getIdMhs({id}) {
    return id;
}

console.log(getIdMhs(mhs)); // mengirmkan seluruh object tapi bisa mengambil filed tertentu
