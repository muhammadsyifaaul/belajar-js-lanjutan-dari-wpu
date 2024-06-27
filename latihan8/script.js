let dataBuku = {
    'atomic habit' : {
        genre : ['science','biography','habit'],
        penjualan : {
            'tokopedia' : [8,2,3,5,5,6,2,6,9,10,13,12],
            'bukalapak' : [1,8,5,4,5,6,5,10,10,1,12,15],
            'shopee' : [1,9,3,10,5,20,10,8,1,2,13,12]
        }
    },
    'mein kampf' : {
        genre : ['biography','manipulation','war','politic'],
        penjualan : {
            'tokopedia' : [1,2,3,4,5,6,7,8,9,10,11,12],
            'bukalapak' : [1,2,3,4,5,6,7,8,9,10,11,12],
            'shopee' : [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    }
}

let judulTerbanyak = '';
let tokoTerbanyak = '';
let maxPenjualan = 0;

for(let judul in dataBuku) {
    let totalPenjualan = 0;
    for(let toko in dataBuku[judul].penjualan) {
        totalPenjualan += dataBuku[judul].penjualan[toko].reduce((acc, val) => acc + val, 0);
        if(totalPenjualan > maxPenjualan) {
            maxPenjualan = totalPenjualan;
            judulTerbanyak = judul;
            tokoTerbanyak = toko;
        }
    }
    
}

document.body.innerHTML = `<h1>Buku dengan penjualan terbanyak adalah ${judulTerbanyak} di toko ${tokoTerbanyak}</h1>`