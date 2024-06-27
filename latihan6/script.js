
let penjualanBluray = {
    'Gintama' : {
        genre : ['comedy,','action','parody'],
        penjualan : {
            'Blibli' : {
                2020 : [8,2,3,5,5,6,2,6,9,10,13,12],
                2021 : [1,8,5,4,5,6,5,10,10,1,12,15],
                2022 : [1,9,3,10,5,20,10,8,1,2,13,12]
            }
        }
    },
    'Sousou no frieren' : {
        genre : ['fantasy,','action'],
        penjualan : {
            'Blibli' : {
                2020 : [8,2,3,5,5,6,2,6,9,10,13,12],
                2021 : [1,8,5,4,5,6,5,10,10,1,12,15],
                2022 : [1,9,3,10,5,20,10,8,1,2,13,12]
            }
        }
    }
}

let judulTerbanyak = '';
let maxPenjualan = 0;
let padaTahun = 0;


for(let judul in penjualanBluray) {
    let totalPenjualan = 0;

    for(let toko in penjualanBluray[judul].penjualan){
        for(let tahun in penjualanBluray[judul].penjualan[toko]){
            totalPenjualan += penjualanBluray[judul].penjualan[toko][tahun].reduce((acc, val) => acc + val, 0);
            
            if(totalPenjualan > maxPenjualan) {
                maxPenjualan = totalPenjualan;
                judulTerbanyak = judul;
                padaTahun = tahun;
            }
        };
    }
}

function iterasiJudul() {
    let hasil = '<ul>';
    for(let judul in penjualanBluray) {
        hasil += `<li>${judul}</li>`;
    }
    hasil += '</ul>';
    return hasil;
}

const elemen = `<div>${iterasiJudul()}</div>`;
document.body.innerHTML = elemen;
