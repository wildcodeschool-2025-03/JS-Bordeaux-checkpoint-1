const avatar = document.querySelector('.avatar')

avatar.onclick = function () {
    avatar.src= "image/avatar.svg"
}

const boutonNom = document.querySelector('.boutonprenom')
const firstName = document.querySelector('#firstname')
const background = document.querySelector('.pink-bg')
const pinkText = document.querySelectorAll('.pink-text')

boutonNom.onclick = function () {
    const theColor = prompt("Enter the color")
    background.style.backgroundColor = theColor
    firstName.textContent = prompt("Enter your name:")
    firstName.style.color = 'white'
    pinkText.forEach(function(element){
        element.style.color = theColor;
    });

}