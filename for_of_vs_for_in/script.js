// for of:
// array
// const mhs = ['Ahmad', 'Budi', 'Cici', 'Dedi'];

// for(let name of mhs) {
//     console.log(name);
// }

// string
// const nama = 'John Doe';

// for (let char of nama) {
//     console.log(char);
// }

// const mhs = ['Ahmad', 'Budi', 'Cici', 'Dedi'];
// mhs.forEach((name, i) => {
//   console.log(`${name} adalah mahasiswa ke -${i+1}`);

// });

// for(let [i,name] of mhs.entries) {
//     console.log(name);
// }

// node list 
// const linama = document.querySelectorAll('.nama');

// // linama.forEach(name => console.log(name))
// for(let name of linama) {
//   console.log(name);
// }


// arguments
//function jmlAngka() {
    // arguments.reduce((previous, current) => {
    //     previous + current
    // })
 //   let jumlah = 0;
   // for(let angka of arguments) {
    //    jumlah += angka;
 //   }
   // return jumlah;
    
//}

//jmlAngka(1,2,3,4,5)

// for in
const mhs = {
    nama : 'ujang',
    umur : 23
}

for(let prop in mhs) {
    console.log(mhs[prop]);
}