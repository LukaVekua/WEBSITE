const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth")

const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5")


c1.addEventListener('click', () =>{
    first.classList.add('active');
    second.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.remove('active');
    fifth.classList.remove('active');
    c1.classList.add('active');
    c2.classList.remove('active');
    c3.classList.remove('active')
    c4.classList.remove('active');
    c5.classList.remove('active');
})

c2.addEventListener('click',() =>{
    first.classList.remove('active');
    second.classList.add('active');
    third.classList.remove('active');
    fourth.classList.remove('active');
    fifth.classList.remove('active');
    c1.classList.remove('active');
    c2.classList.add('active');
    c3.classList.remove('active')
    c4.classList.remove('active');
    c5.classList.remove('active');
})

c3.addEventListener('click',() =>{
    first.classList.remove('active');
    second.classList.remove('active');
    third.classList.add('active');
    fourth.classList.remove('active');
    fifth.classList.remove('active');
    c1.classList.remove('active');
    c2.classList.remove('active');
    c3.classList.add('active')
    c4.classList.remove('active');
    c5.classList.remove('active');
})

c4.addEventListener('click',() =>{
    first.classList.remove('active');
    second.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.add('active');
    fifth.classList.remove('active');
    c1.classList.remove('active');
    c2.classList.remove('active');
    c3.classList.remove('active');
    c4.classList.add('active');
    c5.classList.remove('active');
})

c5.addEventListener('click',() =>{
    second.classList.remove('active');
    first.classList.remove('active');
    third.classList.remove('active');
    fourth.classList.remove('active');
    fifth.classList.add('active');
    c2.classList.remove('active');
    c1.classList.remove('active');
    c3.classList.remove('active');
    c4.classList.remove('active');
    c5.classList.add('active');
})





