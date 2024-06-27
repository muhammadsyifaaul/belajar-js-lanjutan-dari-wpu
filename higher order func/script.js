// highorder function adalah apabila susatu function memiliki argumen atau return value sebuah function
// contoh :

function count (n) {
    return function() {
        console.log(n+n);
    }
}
let hitung = count(2);
hitung()