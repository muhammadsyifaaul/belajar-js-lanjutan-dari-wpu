const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';
    this.classList.toggle(satu);
    setTimeout(/*function*/ () => {
        this.classList.toggle('caption');
    }, 600);
});