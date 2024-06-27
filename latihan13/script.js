let gameData = [
    {
        name: 'call of duty',
        price: 300000,
        platform: ['ps4', 'xbox', 'pc'],
    },
    {
        name: 'call of duty modern warfare',
        price: 300000,
        platform: ['ps4', 'xbox', 'pc'],
    }
];

let items = [];
let show = ``;
const date = new Date();
for (let item of gameData) {
    const { name, price, platform } = item;
    let discountedPrice = price; // Inisialisasi dengan harga asli
    if (date.getDate() % 2 !== 0) { // Memeriksa apakah tanggal saat ini adalah genap
        discountedPrice = price * 0.5; // Menghitung harga diskon
    }
    items.push({ name, price: discountedPrice, platform }); // Memasukkan data permainan ke dalam array items dengan harga diskon jika ada
    show += `
    <h3>${name}</h3>
    <p>Original Price: ${price}</p>
    ${date.getDate() % 2 !== 0 ? `<p>Discounted Price: ${discountedPrice}</p>` : `<p>No Discount</p>`}
    <p>Platform : ${platform.join(',')}</p>
    `;
}
console.log(items);

document.body.innerHTML = show; // Menambahkan konten ke dalam body


function searchByName() {
    const seacrh = prompt('search name of game :').toLowerCase();
    let itemFounds = [];
    show = ``
    for(let item of items) {
        itemFounds.push(item);
    }
    console.log(itemFounds);
    if(itemFounds.length > 0) {
        for(let item of itemFounds) {
            if(item.name == seacrh) {
                show += `
                <h3>${item.name}</h3>
                <p>Price : ${item.price}</p>
                <p>Platform : ${item.platform.join(',')}</p>
                `
            }
        }
    }
    
}

searchByName();