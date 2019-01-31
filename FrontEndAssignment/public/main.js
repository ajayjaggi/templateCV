window.onload=function () {
    console.log('hi')
    let btn = document.getElementById('btn');
    let info = document.querySelector('.newInfo')

    btn.onclick = function (e) {
        e.stopPropagation()
       // let xhr = new XMLHttpRequest();

        //xhr.open('GET', 'https://api.myjson.com/bins/dswp4', true);
        //xhr.onload = function () {
          //  let data = JSON.parse(this.responseText);
            //console.log(data[0].text);
            //let ele=document.createElement('br');
            //info.appendChild(ele);

            //info.innerText+=data.section1.additional;
            //btn.classList.add('disable');
        //};
        //xhr.send();
        info.classList.add('enable');
        btn.classList.add('disable');

    };
    
    //let btn2=document.getElementById('btn2');
    //btn2.onclick=function () {
      //  window.location.href='/resume.pdf' ;
    //};


    //const carouselContainer=document.querySelector('.container7')
    const track=document.querySelector('.carouselTrack');
    const trackDiv=document.querySelector('.carousel')
    const nextButton=document.querySelector('.rightbtn');
    const prevButton=document.querySelector('.leftbtn');
    const dotsNav=document.querySelector('.carouselNav');
    myCarousel(track,trackDiv,nextButton,prevButton,dotsNav)



    function myCarousel(track,trackDiv,nextButton,prevButton,dotsNav){
        //const rightBtn=document.createElement('button');
        const slides=Array.from(track.children);

        const dots=Array.from(dotsNav.children);

        const slideWidth=trackDiv.getBoundingClientRect().width;
        slides.forEach(function (slide,index) {
            slide.style.left=slideWidth*index + 'px';
        });


        const moveToSlide=(track,currentSlide,targetSlide) =>{
            track.style.transform='translateX(-'+ targetSlide.style.left+')'
            currentSlide.classList.remove('currentSlide');
            targetSlide.classList.add('currentSlide');
        };

        const updateDots=(currentDot,targetDot) =>{
            currentDot.classList.remove('currentSlide');
            targetDot.classList.add('currentSlide');
        }


        const hideArrows=(slides,prevButton,nextButton,targetIndex) =>{
            if(targetIndex===0){
                prevButton.classList.add('isHidden');
                nextButton.classList.remove('isHidden');
            }
            else if(targetIndex=== slides.length-1){
                prevButton.classList.remove('isHidden');
                nextButton.classList.add('isHidden');
            }
            else{
                prevButton.classList.remove('isHidden');
                nextButton.classList.remove('isHidden');
            }
        }
        nextButton.addEventListener('click',function (e) {
            const currentSlide=track.querySelector('.currentSlide');
            const nextSlide=currentSlide.nextElementSibling;
            moveToSlide(track,currentSlide,nextSlide);

            const currentDot=dotsNav.querySelector('.currentSlide');
            const nextDot=currentDot.nextElementSibling;
            updateDots(currentDot,nextDot);

            const nextIndex=slides.findIndex(function (slide) {
                return slide===nextSlide
            });
            hideArrows(slides,prevButton,nextButton,nextIndex)

        })

        prevButton.addEventListener('click',function (e) {
            const currentSlide=track.querySelector('.currentSlide');
            const prevSlide=currentSlide.previousElementSibling;
            moveToSlide(track,currentSlide,prevSlide)

            const currentDot=dotsNav.querySelector('.currentSlide');
            const prevDot=currentDot.previousElementSibling;
            updateDots(currentDot,prevDot);

            const prevIndex=slides.findIndex(function (slide) {
                return slide===prevSlide
            });
            hideArrows(slides,prevButton,nextButton,prevIndex)
        })


        dotsNav.addEventListener('click',function (e) {
            const targetDot=e.target.closest('button');
            if(!targetDot) return;
            const currentSlide=track.querySelector('.currentSlide');
            const currentDot=dotsNav.querySelector('.currentSlide');
            const targetIndex=dots.findIndex(function (dot) {
                return dot===targetDot
            });

            const targetSlide=slides[targetIndex];
            moveToSlide(track,currentSlide,targetSlide);
            updateDots(currentDot,targetDot)
            hideArrows(slides,prevButton,nextButton,targetIndex)
        })
    }




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


    const submitForm=document.getElementById("btn8");

    submitForm.onclick=function () {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/resume', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


        xhr.onload = function () {
            console.log(xhr.responseText);
            let para=document.getElementById('newData')
            let response = JSON.parse(xhr.responseText);
            if (response.success === "false") {
                alert(response.error);
            } else {
                para.innerText+= "Form was sucessfully submitted"
            }
        };

        let form = "";
        form += "name=" + document.getElementById("inputname").value + "&";
        form += "email=" + document.getElementById("inputemail").value + "&";
        form += "phone=" + document.getElementById("inputphone").value + "&";
        form += "message=" + document.getElementById("inputmessage").value;

        xhr.send(form);
        clearForm();

    }
    function clearForm() {
        document.getElementById('inputname').value = "";
        document.getElementById('inputemail').value = "";
        document.getElementById('inputphone').value = "";
        document.getElementById('inputmessage').value = "";
    }



    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("newImageSlide");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 2000);
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
//https://api.myjson.com/bins/dswp4