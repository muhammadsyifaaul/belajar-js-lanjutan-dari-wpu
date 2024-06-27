// callback :function yg dikirim sebagai parameter
// pada functiion yang lain
// pengertian lain: callback adalah function yang dieksekusi 
// setelah fungsi lain selesai dijalankan


// stnchronus callback
// function halo(nama) {
//     alert(`halo ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('siapa namamu?');
//     callback(nama);
// }

// // tampilkanPesan(halo);

// tampilkanPesan((nama) => alert(`halo ${nama}`));

// callback synchrounus

// const mhs = [
//     {
//         "nama" : 'ujang',
//         "umur" : 23,
//         "email": 'ujang.com',
//         "idDosenWali": 1
//     },
//     {
//         "nama" : 'samsul',
//         "umur" : 21,
//         "email": 'samsul.com',
//         "idDosenWali": 2
//     }  
// ];
// console.log('mulai');
// mhs.forEach(m => {
//     for(let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// }
    
// );
// console.log('selesai');

// asynchrounus

// function getDataMahasiswa(url,succes,error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 succes(xhr.response);
//             } else if (xhr.status == 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }   
// console.log('mulai');

// // getDataMahasiswa('WPU JS LANJUTAN/mahasiswa.json', succes,error); // jika seperti ini, harus deklarasi function succes dan errornya
// getDataMahasiswa('mahasiswa.json', (result) => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// },() => {

// });



// JQuery

console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: mhs => {
        console.log(mhs)
    },
    error: (e) => {
        console.log(e.responseText)
    }
});

console.log('selesai');