// tagged template

// const nama = 'ujang';
// const umur = 22;

// function coba() {
//     return 'coba';
// }
//function coba(strings, ...values) { // rest parameter bisa menampung semua expression pada template literalsnya
    // return values; // rest param akan menjadi array yg berisi semua expression
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str} ${values[i] || ''}`;
    // });
    // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, umur saya ${umur} tahun`;
// console.log(str);
// expression akan menjadi paramater


// highlight

const nama = 'ujang';
const umur = 22;
const email = 'ujang@gmail.com'

function highlight(strings, ...values) { // parameter pertama yaitu string, akan mengambil string literals dan menyimoannya dalam array, tanpa mengambil expressionnya
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, ''); // sementara untuk parameter kedua akan mengambil expressionnya
}

const str = highlight`Halo, nama saya ${nama}, umur saya ${umur} tahun dan email saya adalah : ${email}`;


document.body.innerHTML = str;

// penggunaan lain tagged template
// 1. escaping html tags: untuk menghindari script atau karakter yang tidak diinginkan pada halaman
// 2. Translasi & Internalization : alih bahasa untuk website
// 3. Styled component: biasa digunakan ketika menggunakan framework
