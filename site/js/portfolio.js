const changePic = document.querySelector(".avatarPrime");

changePic.addEventListener('click', function (){ 
    changePic.src= 'image/avatar-bis.png'
    changePic.alt= 'another avatar'
});


const changeView = document.querySelector('#modify');

changeView.addEventListener('click', function(){

    let newColor = prompt ('Enter a color');

    let pinkbg = document.querySelectorAll('.pink-bg');
    for (let i = 0 ; i<pinkbg.length ; i++){
        pinkbg[i].style.backgroundColor = newColor;
    }


    
    let pinkText = document.querySelectorAll('.pink-text');
        for (let i = 0 ; i < pinkText.length; i++){
            pinkText[i].style.color = newColor
    }




    let username  = prompt('Enter Your Name');

    firstname.innerHTML = username;
    firstname.style.color = '#fff';
    
})

