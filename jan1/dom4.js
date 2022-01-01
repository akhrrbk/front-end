function iterate(){
    const saved = document.querySelectorAll('li');

    for (let i = 0; i < saved.length; i++){
        saved[i].classList.toggle('highlight')
    }
}