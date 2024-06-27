// rest parameter: merepresentasikan argument pada func
// dgn jumlah tak terbatas menjadi sebuah array

//function myFunc() {//a,b, ...myArgsr) { // ...myargs akan menyimpan sisa dari parameter yang dikirimkan
    // return `a = ${a} b = ${b}, myargs = ${myArgsr} `
    // return [...arguments];
//}

//console.log(myFunc(1,2,3,4,5)); // atau bisa juga menangkap semua parameternya

//function jumlahkan(...angka) {
    // let total = 0;
    // for(const a of angka) {
    //     total += a;
    // }
    // return total;
   // return angka.reduce((total, num) => total + num, 0);
//}

//console.log(jumlahkan(1,2,3,4,5));

// array destructuring

// const kelompok1 = ['ujang','joko','ahmad'];
// const[ketua,wakil,...anggota] = kelompok1;

// object destructuing

// const team = {
//     pm: 'ujang',
//     frontend: 'samsul',
//     fontend2: 'tuti',
//     backend: 'budi',
//     uiux: 'cici',
//     devops: 'dedi'
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam);

// filltering

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type
    );
}

console.log(filterBy('string',1,2,'ujang',true,false,3));