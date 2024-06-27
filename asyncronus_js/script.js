// single thread
// thread: utrutan eksekusi kode,dpt dilakukan secara
// bebas/independent satu sama lain
// javascript cuma bisa eksekusi satu task pada satu waktu
// karena single thread

// blocking : jika suatu task lama eksekusinya
// maka task-task selanjutnya akan menunggu untuk dieksekusi

// non-blocking : jika suatu task eksekusinya lama
// dan meskipun belum selesai,bisa melanjutkan task-task
// selanjutnya

// synchronus :eksekusi task seperti biasa secara berurutan dan saling menunggu

// asynchronus: eksekusi task secara berurutan namun tidak perlu menunggu
// task sebelumnya selesai,bisa langsung eksekusi selanjutnya(jika single thread)

// v8 Engine: untuk eksekusi jjavscript
// heap: alokasi memori,tempat penyimpanan variabel,
// function,ada hubungan dengan hoisting juga,

// stack: pemanggilan function dan execution context

// event loop
