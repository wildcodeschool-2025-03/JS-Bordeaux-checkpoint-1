const avatar = document.querySelector('.img-avatar');

avatar.addEventListener('click', () => {
    avatar.src = "image/avatar.svg";
});

const buttonTextColor = document.querySelector('.modifyTextColor');
const firstName = document.querySelector('#firstname');

buttonTextColor.addEventListener('click', () => {
    const newFirstName =prompt('Enter your name');
    firstName.textContent = newFirstName;
    firstName.style.color="black";
})