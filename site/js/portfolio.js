const image = document.querySelector('.imageAvatar');

image.addEventListener('click', function () {
    image.src = 'image/avatar.svg';
});

const changeName = document.querySelector('.buttonprompt');

changeName.addEventListener('click', function () {
    const yourname = prompt("Enter your name");
    if (yourname) {
        const nameSpan = document.querySelector('firstname');
        firstname.textContent = yourname;
    }
});





