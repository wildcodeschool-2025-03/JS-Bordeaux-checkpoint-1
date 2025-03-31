// Step 1

const imgAvatar = document.querySelector('#img-avatar');

imgAvatar.addEventListener('click', () => {
    imgAvatar.src = 'image/avatar.svg';
})

// Step 2

const modifyTextBtn = document.querySelector('.description button');

modifyTextBtn.addEventListener('click', () => {
    const newColor = prompt('Ta couleur batard');
    const newName = prompt('Ton nom batard');

    const pinkElements = document.querySelectorAll('.pink-bg, .pink-text');

    // Modifs sur le reste
    for (pinkElement of pinkElements) {
        pinkElement.classList.contains('pink-bg') ? pinkElement.style.backgroundColor = newColor : pinkElement.style.color = newColor;
    }

    // Modifs sur le nom
    const currentName = document.querySelector('#firstname');

    currentName.innerHTML = newName;
    currentName.style.color = '#ffffff';
})
