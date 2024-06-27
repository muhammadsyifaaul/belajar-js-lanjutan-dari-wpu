const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// mencari ngka>=3

// const newAngka = [];

// for(let i = 0; i <=angka.length; i++){
//     if(angka[i]>=3){
//         newAngka.push(angka[i]);
//     }
// }

// filter

//const newAngka = angka.filter(function (angka) {
  //parameter pada func yakni angka, itu merepresentasikan setiap data pada array angka
  //return angka >= 3
//})

// const newAngka = angka.filter(angka => angka >= 3)


// console.log(newAngka);

// map : memetakan tiap elemen dalam array dengan fungsi baru
// kalikan setiap ngka dengan 2

// const newAngka = angka.map(angka => angka*2);

// console.log(newAngka);

// reduce : melakukan sesuatu terhadap seluruh elemen pada array
// jumlahkan seluruh elemen pada array
// -1+  8+  9+  1+  4+  -5+  -4+  3+  2+  9
// diatas adalah prosesnya
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue );
//  current value : elemen array yang sedang di looping, misalkan sekarang lagi looping di elemen yang mana
// accumulator : hasil dari prosesnya
// setelah currentValue yg didlm func(bukan parameter) sebenarnya ada lagi yakni nilai awal yg dipisah dengan tanda(,) contoh ,5 maka 5 akan ditambah dengan nilai index pertama dulu
// console.log(newAngka);

// method chaining : menggabungkan semua fungsi dalam satu eksekusi
// cari angka > 5
// kalikan 3
// jumlahkan

// const hasil = angka.filter(angka => angka > 5)
// .map(angka => angka * 3) // 24,27,27
// .reduce((acc,curr) => acc + curr) // 81

const hasil = angka.filter(angka => angka > 5);
console.log(hasil);