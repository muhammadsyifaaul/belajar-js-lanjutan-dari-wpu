// memecah iterable menjadi single element
// array
// const mhs = ['Ahmad', 'Budi', 'Cici', 'Dedi'];

// console.log(...mhs);

// menggabungkan 2 / lrbih array
// const dosen = ['lalu','siti'];
// const orang = [...mhs,'aji',...dosen];

// copy array
// const mhs = ['Ahmad', 'Budi', 'Cici', 'Dedi'];
// // const mhs1 = mhs;

// const mhs1 = [...mhs];
// console.log(mhs, mhs1);


// const limhs = document.querySelectorAll('li');
// console.log(limhs[0].textContent);
// const mhs = [];
// for(let i = 0 ;i<limhs.length;i++){
//     mhs.push(limhs[i].textContent);
// }
// const mhs1 = [...limhs];

// const mhs = [...limhs].map(m => m.textContent);


const nama = document.querySelector('.nama');

const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
console.log(huruf);