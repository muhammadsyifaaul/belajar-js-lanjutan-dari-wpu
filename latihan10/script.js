const barang = {
    1: {
        nama: 'playstation 4',
        stok: 10,
        harga: 4000000,
        kategori: ['elektronik', 'game', 'hobby']
    },
    2: {
        nama: 'xbox one',
        stok: 5,
        harga: 3000000,
        type: 'console',
        kategori: ['elektronik', 'game', 'hobby']
    },
    3: {
        nama: 'nintendo switch',
        stok: 8,
        harga: 2000000,
        type: 'gamepad',
        kategori: ['elektronik', 'game', 'hobby','premium']
    },
    4: {
        nama: 'macbook pro',
        stok: 3,
        harga: 10000000,
        type: 'laptop',
        kategori: ['elektronik', 'game', 'hobby']
    }
}

let show = ``;
let detailBarang = [];
for (let id in barang) {
    const { nama, stok, harga, type, kategori } = barang[id];
    detailBarang.push({
        nama,
        stok,
        harga,
        type,
        kategori
    });
    show += `<h1>${nama}</h1>
    <p>Stok: ${stok}</p>
    <p>Harga: ${harga}</p>`;
    if (type) {
        show += `<p>Type: ${type}</p>`;
    }
    show += `<p>Kategori: ${kategori.join(', ')}</p>`
}

document.body.innerHTML = show;

let itemFound = ``;

function chooseUser() {
    let choose = prompt('1. Search by name \n2. Search by category \n3. type \n4. Price  \n0. Exit');
    if (choose == 1) {
        searchName();
    } else if (choose == 2) {
        searchCategory();
    } else if (choose == 3) {
        searchType();
    } else if (choose == 4) {
        searchPrice();
    } else if (choose == 5) {
        searchType();
    } else if (choose == 0) {
        console.log(barang);
    }
}
function searchName() {
    let search = prompt('Enter your search:');
    let foundItems = [];
    for (let id in barang) {
        if (barang[id].nama === search) {
            foundItems.push(barang[id]);
        }
    }
    if (foundItems.length > 0) {
        // Reset show
        show = ``;
        for (let item of foundItems) {
            itemFound += `<h1>${item.nama}</h1>
            <p>Stok: ${item.stok}</p>
            <p>Harga: ${item.harga}</p>`;
            if (item.type) {
                itemFound += `<p>Type: ${item.type}</p>`;
            }
            itemFound += `<p>Kategori: ${item.kategori.join(', ')}</p>`;
        }
        // Update body HTML with itemFound
        document.body.innerHTML = itemFound;
    } else {
        itemFound = `<p>No items found for '${search}'</p>`;
        // Update body HTML with itemFound
        document.body.innerHTML = itemFound;
    }
}

function searchCategory() {
    let search = prompt('Enter your search :');
    let foundItems = [];
    for (let id in barang) {
        // if(barang[id].kategori === search) {
        //     foundItems.push(barang[id]);
        // }
        barang[id].kategori.filter(e => {
            if(e === search) {
                foundItems.push(barang[id]);
            }
        });
    }
    show=``;
    if (foundItems.length > 0) {
        // Reset show
        show = ``;
        for (let item of foundItems) {
            itemFound += `<h1>${item.nama}</h1>
            <p>Stok: ${item.stok}</p>
            <p>Harga: ${item.harga}</p>`;
            if (item.type) {
                itemFound += `<p>Type: ${item.type}</p>`;
            }
            itemFound += `<p>Kategori: ${item.kategori.join(', ')}</p>`;
        }
        // Update body HTML with itemFound
        document.body.innerHTML = itemFound;
    } else {
        itemFound = `<p>No items found for '${search}'</p>`;
        // Update body HTML with itemFound
        document.body.innerHTML = itemFound;
    }
}
function searchType() {
    let search = prompt('Enter your search :');
    for (let i in barang) {
        if(barang[i].type == search) {
            console.log(barang[i]);
        }
    }
    
}
function searchPrice() {
    let search = parseInt(prompt('Enter your search :'));
    for (let i in barang) {
        if(barang[i].harga <= search) {
            console.log(barang[i]);
        }
    }
}


console.log(detailBarang);
chooseUser();
