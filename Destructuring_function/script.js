// Destructuring

// function kalkulasi(a,b) {
//     return [a+b, a*b, a-b , a/b];
// }

// const jumlah = kalkulasi(2,3)[0];
// console.log(jumlah); // [5, 6] // 5

// const [jumlah,kali] = kalkulasi(2,3);

// const [jumlah, kali, kurang, bagi] = kalkulasi(2,3);
// console.log(`Jumlah : ${jumlah}`);

// function kalkulasi(a,b) {
//     return {
//         tambah: a + b ,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bago,kali,kurang,tambah} = kalkulasi(2,3);

// destructur function argumen

// const mhs1 = {
//     name: 'John',
//   age: 20,
//   city: 'New York'
// }

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.name} , umur saya ${mhs.age}`
// }

// console.log(cetakMhs(mhs1));

// destructuiring

// function cetakMhs({name, age}) {
//     return `Halo, nama saya ${name} , umur saya ${age}`
// }

// console.log(cetakMhs(mhs1));

const mhs1 = {
  name: 'John',
  age: 20,
  city: 'New York',
  nilai: {
    tugas:80,
    uts:85,
    uas:90
  }
}

function cetakMhs({name, age, nilai:{tugas,uts,uas}}) {
    return `Halo, nama saya ${name} , umur saya ${age},dan nilai uas saya ${uas} `
}
