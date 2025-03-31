// Step 1

const imgAvatar = document.querySelector('#img-avatar');

imgAvatar.addEventListener('click', () => {
    imgAvatar.src = 'image/avatar.svg';
})

// Step 2

const modifyTextBtn = document.querySelector('.description button');

modifyTextBtn.addEventListener('click', () => {
    const newName = prompt('Ton nom batard');
    const currentName = document.querySelector('#firstname');
    currentName.innerHTML = newName;
    currentName.style.color = '#ffffff';
})
