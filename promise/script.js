// promise
// $.ajax({
//     url: 'http://www.omdbapi.com/?i=tt3896198&apikey=95d1dc3d=avengers',
//     succes: movies => console.log(movies)
// });

// fetch
// const movies = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=95d1dc3d')
//  .then(response => response.json())
//  .then(response => console.log(response));

// promise
// object yg mereperesentasikan keberhasilan / kegagalan
// sebuah event yg asynchronus yg  akan datang
// janji (terpenuhi/ tidak terpenuhi)
// states(keadaan) (fullfield / rejected / pending)
// callback(resolve(terpenuhi) / reject(tidak terpenuhi) / finally(waktu tunggu selesai baik terpnuhi mauoun tidak))
// aksi (then(terpenuhi) / catch(tdk terpenuhi))

// contoh
// let ditepati = false
// const janji1 = new Promise((resolver,reject) => {
//     if(ditepati) {
//         resolver('janji ditepati')
//     } else {
//         reject('janji ditolak')
//     }
// });
// janji1
// .then(response => console.log('OK : ' + response))
// .catch(response => console.log('Not OK : ' + response));

// contoh 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('ditepati setelah beberapa waktu')
//         },2000)
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa Waktu')
//         },2000)
//     }
// });

// console.log('mulai');
// console.log(janji2.then(() => console.log(janji2)));
// janji2
// .finally(() => console.log('selesai menunggu')) // fonally digunakan ketika then atau catch siap dieksekusi
// .then(response => console.log('OK : ' + response))
// .catch(response => console.log('Not OK : ' + response));
// console.log('selesai');

// promise.all() digunakan ketika punya banyak promse
// dan dijalankan sekaligus

// const film = new Promise(resolver => {
//   setTimeout(() => {
//     resolver([
//       {
//         judul: 'avengers',
//         sutradara: 'marvel'
//       }
//     ])
//   }, 1000)
// })

const cuaca = new Promise(resolve => {
  setTimeout(() => {
      resolve([{
        kota: 'bandung',
        cuaca: 'cerah'
      }]);
  })
})

film.then(response => {
  console.log(response)
});
cuaca.then(response => {
  console.log(response)
});

Promise.all([film, cuaca])
.then(response => {
//   console.log(response)
const [film,cuaca] = response
console.log(film);
console.log(cuaca);
});