const avatar = document.querySelector('.img-avatar');

avatar.addEventListener('click', () => {
    avatar.src = "image/avatar.svg";
});

const buttonTextColor = document.querySelector('.modifyTextColor');
const firstName = document.querySelector('#firstname');
const descriptions = document.querySelectorAll('.description');
const pinkText = document.querySelectorAll('.pink-text');

buttonTextColor.addEventListener('click', () => {
    const newFirstName = prompt('Enter your name');
    firstName.textContent = newFirstName;
    firstName.style.color = "black"; 
    const newDescriptionColor = prompt('Enter a color for descriptions');
    for (const description of descriptions){
        description.style.background = newDescriptionColor;
    }
    for(const pink of pinkText){
        pink.style.color = newDescriptionColor;
    }
});

