const imgAvatar = document.querySelector('.avatar-perso > img');
console.log(imgAvatar)
imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "image/avatar.svg";
    imgAvatar.alt = "mieux mieux";
});

