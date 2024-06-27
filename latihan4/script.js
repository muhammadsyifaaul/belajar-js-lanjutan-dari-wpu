let book = {
    'harry potter' : {
        genre : ['fantasy','magic'],
        release : '1997',
        price: 100000
    },
    'Kimi no nawa' : {
        genre: ['fantasy', 'romance'],
        release : '2020',
        price: 200000
    },
    'Naruto' : {
        genre : ['fantasy', 'action'],
        release : '2002',
        price: 150000
    }
}

alert("Selamat datang di Toko Buku KIMIE");

function manage() {
    const searchAndAddToCart = () => {
        const searching = prompt('Masukkan judul buku yang ingin Anda cari :');
        let found = false;

        for (let title in book) {
            if (title.toLowerCase().includes(searching.toLowerCase())) {
                found = true;
                const choice = confirm(`Apakah Anda ingin menambahkan buku "${title}" ke dalam troli?`);
                if (choice) {
                    addToCart(title);
                    console.log(cart);
                }
            }
        }

        if (!found) {
            alert('Buku tidak ditemukan.');
        }
    }

    const addToCart = (title) => {
        cart.push(title);
        alert(`Buku "${title}" telah ditambahkan ke dalam troli.`);
    }

    const checkout = () => {
        let total = 0;

        if (cart.length === 0) {
            alert('Troli kosong. Silakan tambahkan buku terlebih dahulu.');
            return;
        }

        for (let i = 0; i < cart.length; i++) {
            total += book[cart[i]].price;
        }

        alert(`Total harga belanja: Rp${total}`);
    }

    const cart = [];

    return {
        searchAndAddToCart,
        checkout
    }
}

const pilihan = manage();
pilihan.searchAndAddToCart();
pilihan.checkout();
