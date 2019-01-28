window.onload=function () {
    console.log('hi')
    let btn = document.getElementById('btn');
    let info = document.getElementById('info');

    btn.onclick = function () {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.myjson.com/bins/1aghoo', true);
        xhr.onload = function () {
            let data = JSON.parse(this.responseText);
            //console.log(data[0].text);
            let ele=document.createElement('br');
            info.appendChild(ele);
            info.innerText+=data.section1.additional;
            btn.classList.add('disable');
        };
        xhr.send();
    };
    
    let btn2=document.getElementById('btn2');
    btn2.onclick=function () {
        window.location.href='https://stackoverflow.com/questions/2906582/how-to-create-an-html-button-that-acts-like-a-link';
    };

    const track=document.querySelector('.carouselTrack');
    const carouselTrack=document.querySelector('.carousel')
    //console.log(track);
    const slides=Array.from(track.children);
    console.log(slides);

    const nextButton=document.querySelector('.rightbtn');
    const prevButton=document.querySelector('.leftbtn');

    const dotsNav=document.querySelector('.carouselNav');
    const dots=Array.from(dotsNav.children);


    const slideWidth=carouselTrack.getBoundingClientRect().width;
    console.log(slideWidth)
    slides.forEach(function (slide,index) {
        slide.style.left=slideWidth*index + 'px';
    })

    nextButton.addEventListener('click',function (e) {
        const currentSlide=track.querySelector('.currentSlide');
        //console.log(currentSlide)
        const nextSlide=currentSlide.nextElementSibling;
        //console.log(nextSlide);
        const amountToMove=nextSlide.style.left;
        //console.log(amountToMove)

        track.style.transform='translateX(-'+ amountToMove +')'
        currentSlide.classList.remove('currentSlide');
        nextSlide.classList.add('currentSlide');
        //const mydiv=document.querySelector('.carouselSlideDiv');
        //para.width='102px';

        const currentDot=dotsNav.querySelector('.currentSlide');
        const nextDot=currentDot.nextElementSibling;
        currentDot.classList.remove('currentSlide');
        nextDot.classList.add('currentSlide');

    })

    prevButton.addEventListener('click',function (e) {
        const currentSlide=track.querySelector('.currentSlide');
        //console.log(currentSlide)
        const nextSlide=currentSlide.previousElementSibling;
        //console.log(nextSlide);
        const amountToMove=nextSlide.style.left;
        //console.log(amountToMove)

        track.style.transform='translateX(-'+ amountToMove +')'
        currentSlide.classList.remove('currentSlide');
        nextSlide.classList.add('currentSlide');
        //const para=currentSlide.querySelector('.p');
        //para.width='102px';
        const currentDot=dotsNav.querySelector('.currentSlide');
        const prevDot=currentDot.previousElementSibling;
        currentDot.classList.remove('currentSlide');
        prevDot.classList.add('currentSlide');
    })


    dotsNav.addEventListener('click',function (e) {
        const targetDot=e.target.closest('button');
        if(!targetDot) return;

        const currentSlide=track.querySelector('.currentSlide');
        const currentDot=dotsNav.querySelector('.currentSlide');
        const targetIndex=dots.findIndex(function (dot) {
            return dot===targetDot
        })

        const targetSlide=slides[targetIndex];
        const amountToMove=targetSlide.style.left;
        track.style.transform='translateX(-'+ amountToMove +')'
        currentSlide.classList.remove('currentSlide');
        targetSlide.classList.add('currentSlide');

        currentDot.classList.remove('currentSlide');
        targetDot.classList.add('currentSlide');

    })

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    }
    let scrollBtn=document.getElementById('scrollTop');
    scrollBtn.onclick=function () {
        document.documentElement.scrollTop = 0;
    }


    const modal=document.getElementById('simpleModal');
    const modalBtn=document.getElementById('modalBtn');
    const closeBtn=document.getElementById('closeBtn');


    modalBtn.addEventListener('click',openModal);

    function openModal() {
        modal.style.display='block';
    }

    closeBtn.addEventListener('click',closeModal);

    function closeModal(e) {
        e.stopPropagation()
        console.log('close')
        modal.style.display='none';
    }


    
}






//https://api.myjson.com/bins/1aven8
//https://api.myjson.com/bins/thzzg
//https://api.myjson.com/bins/18zhfg
//https://api.myjson.com/bins/lomfk
//https://api.myjson.com/bins/94la8
//https://api.myjson.com/bins/l5jpc
//https://api.myjson.com/bins/1bj1sw
//https://api.myjson.com/bins/1d2zow
//https://api.myjson.com/bins/g4ncw
//https://api.myjson.com/bins/yn89s
//https://api.myjson.com/bins/xcb88
//https://api.myjson.com/bins/1aghoo