const avatar = document.querySelector('.avatar')

avatar.onclick = function () {
    avatar.src= "image/avatar.svg"
}

const boutonNom = document.querySelector('.boutonprenom')
const firstName = document.querySelector('#firstname')
const background = document.querySelector('.pink-bg')

boutonNom.onclick = function () {
    background.style.backgroundColor = prompt("Enter the color")
    firstName.textContent = prompt("Enter your name:")
    firstName.style.color = 'white'
    
}