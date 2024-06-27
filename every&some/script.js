// every memeriksa setiap array apakah semua elemen memiliki kriteria yang sama. jika sama akan true dan false jika sebaliknya
const kataKata = ['aku','dia','man']
// kataKata.every(kata => {
//     return kata.length === 4
// }) // true

// some sama seperti every tapi masih bisa true walau hanya salah satu dari isi array sesuai kriteria
// const kataKataKata = ['aku','dia','man']
// kataKataKata.some(kata => {
//     return kata.length === 4
// })


// const examScore = [80,89,80,5,86];
// const isGraduate = examScore.every(score => score>= 70)
const examScore = [80,89,80,5,86];
const isGraduate = examScore.some(score => score>= 70)