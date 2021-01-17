const imgModal = document.getElementsByClassName('image-modal');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');


for(let i =0; i<13; i++) {

    imgModal[i].addEventListener('click', () => {
        overlay.classList.add('active');
        popup.innerHTML = `<img src="` + imgModal[i].src + `">`;
    })

    close.addEventListener('click', () => {
        overlay.classList.remove('active');
    })

}



