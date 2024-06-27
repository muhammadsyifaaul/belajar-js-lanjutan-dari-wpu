// const dataPenjualan = {
//     'kimi no nawa' : {
//         penjualanPertahun: {
//             2020 : [1,2,3,4,5,6,7,7,5,8,9,10],
//             2021 : [1,2,3,4,5,7,8,3,1,1,1],
//             2022 : [1,2,3,4,5,6,3,4,6,8,9,11]
//         },
//         genre : 'romance'
//     },
//     'fullmetal alchemist' : {
//         penjualanPertahun: {
//             2020 : [1,2,3,4,5,6,7,8,9,10,11,12],
//             2021 : [1,2,3,4,5,6,7,8,9,9,12,14],
//             2022 : [1,2,3,4,5,6,7,8,9,8,11,12]
//         },
//         genre : 'action'
//     }
// }

// let judulTerbanyak = '';
// let maxPenjualan = 0;

// for (let judul in dataPenjualan) {
//     let totalPenjualan = Object.keys(dataPenjualan[judul].penjualanPertahun).reduce((acc, tahun) => {
//         return acc + dataPenjualan[judul].penjualanPertahun[tahun].reduce((acc, val) => acc + val, 0);
//     }, 0);

//     if (totalPenjualan > maxPenjualan) {
//         maxPenjualan = totalPenjualan;
//         judulTerbanyak = judul;
//     }
// }

// console.log("Judul dengan penjualan terbanyak:", judulTerbanyak);
// console.log("Jumlah penjualan terbanyak:", maxPenjualan);


const dataPenjualanBuku = {
    'Kimi no nawa' : {
        genre : 'romance',
        penjualanPertoko: {
            'Tokopedia' : {
                2020 : [8,2,3,5,5,6,2,6,9,10,13,12],
                2021 : [1,8,5,4,5,6,5,10,10,1,12,15],
                2022 : [1,9,3,10,5,20,10,8,1,2,13,12]
            },
            'Bukalapak' : {
                2020 : [1,2,3,18,5,16,1,8,19,1,1,3],
                2021 : [1,1,3,9,5,7,7,8,1,9,14,14],
                2022 : [4,2,3,4,8,6,1,8,1,8,13,12]
            }
        }
    },
    'nisekoi' : {
        genre : 'romance',
        penjualanPertoko : {
            'Blibli' : {
                2020 : [8,1,3,2,5,8,9,6,2,11,13,12],
                2021 : [1,7,5,2,5,9,11,10,10,2,11,13],
                2022 : [1,9,3,11,2,2,13,6,11,12,5,9]
            },
            'Shopee' : {
                2020 : [9,3,1,17,15,11,11,3,15,11,7,2],
                2021 : [3,5,1,11,7,1,9,9,2,9,11,12],
                2022 : [6,1,8,8,1,9,4,9,2,7,11,14]
            }
        }
    }
}

// tangkap semua judul
let judulTerbanyak = '';
let maxpenjulan = 0;
let totalPadaTahun = 0;
let diToko = ''
for(let judul in dataPenjualanBuku) {
    let totalPenjualanPerTahun = 0;
    let totalPerbulan = 0;

    // Lakukan iterasi untuk setiap toko dalam penjualanPertoko
    for(let toko in dataPenjualanBuku[judul].penjualanPertoko) {
        // Lakukan iterasi untuk setiap tahun penjualan
        for(let tahun in dataPenjualanBuku[judul].penjualanPertoko[toko]) {
            // Reduksi array penjualan untuk tahun tersebut dan tambahkan ke totalPenjualanPerTahun
            totalPenjualanPerTahun += dataPenjualanBuku[judul].penjualanPertoko[toko][tahun].reduce((acc, val) => acc + val, 0);
            totalPerbulan += dataPenjualanBuku[judul].penjualanPertoko[toko][tahun].reduce((acc, val) => acc > val, 0);
            if(totalPenjualanPerTahun > maxpenjulan) {
                maxpenjulan = totalPenjualanPerTahun;
                judulTerbanyak = judul;
                totalPadaTahun = tahun;
                diToko = toko;
            }
        }
    }
}

console.log(`Buku dengan penjualan terbanyak adalah ${judulTerbanyak} dengan total penjualan ${maxpenjulan} pada ${totalPadaTahun} di toko ${diToko}`);

