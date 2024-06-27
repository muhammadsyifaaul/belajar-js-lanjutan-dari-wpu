// function declaration


const methodMahasiswa = {
    makan : function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    },

    main : function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

function Mahasiswa(nama,energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    

    return Mahasiswa;
}

let ujang = Mahasiswa("Ujang",20);