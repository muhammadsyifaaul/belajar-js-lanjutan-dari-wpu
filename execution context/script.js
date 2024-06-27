// execution context 


function hello() {
    console.log('hello');
    function hola() {
        console.log('hola');
    }
    hola();
}

function halo() {
    console.log('halo');
}

function aloha() {
    console.log(salam);
}


let salam = 'salam';
aloha('salam');
aloha();
hello();
halo();

// prediksi output
// salam
// salam
// hello
// hola
// halo
