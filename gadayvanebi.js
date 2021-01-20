const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");


c1.addEventListener('click', () =>{
    first.classList.add('active');
    second.classList.remove('active');
    third.classList.remove('active');
    c1.classList.add('active');
    c2.classList.remove('active');
    c3.classList.remove('active')
})

c2.addEventListener('click',() =>{
    second.classList.add('active');
    first.classList.remove('active');
    third.classList.remove('active');
    c2.classList.add('active');
    c1.classList.remove('active');
    c3.classList.remove('active')
})

c3.addEventListener('click',() =>{
    second.classList.remove('active');
    first.classList.remove('active');
    third.classList.add('active');
    c2.classList.remove('active');
    c1.classList.remove('active');
    c3.classList.add('active')
})




