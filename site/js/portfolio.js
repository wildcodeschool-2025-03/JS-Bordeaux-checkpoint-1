document.addEventListener('DOMContentLoaded', function() {
  const avatarImage = document.querySelector('img[src="image/avatar-bis.png"]');

  let isOriginalImage = true;

  avatarImage.addEventListener('click', function() {
    if (isOriginalImage) {
      avatarImage.src = 'image/avatar.svg';
    } else {
      avatarImage.src = 'image/avatar-bis.png';
    }
    isOriginalImage = !isOriginalImage;
  });

  const changeNameBtn = document.getElementById('changeNameBtn');
  const firstnameSpan = document.getElementById('firstname');
  const changeToolsBtn = document.getElementById('changeToolsBtn');
  const toolsList = document.getElementById('front-dev-tools');
  const addToolBtn = document.getElementById('addToolBtn');
  const newToolInput = document.getElementById('newToolInput');
  const backToolsList = document.querySelector('.column:first-of-type ul');

  changeNameBtn.addEventListener('click', function() {
    const newColor = prompt('Enter color');
    const newName = prompt('Enter a new name:');
    if (newName) {
      firstnameSpan.textContent = newName;
      firstnameSpan.style.color = 'white';
    }
    if (newColor) {
      const pinkBackground = document.querySelectorAll('.pink-bg');
      pinkBackground.forEach(element => {
        element.style.backgroundColor = newColor;
      });
      const pinkTexts = document.querySelectorAll('.pink-text');
      pinkTexts.forEach(element => {
        element.style.color = newColor;
      });
      const links = document.querySelectorAll('a');
      links.forEach(element => {
        element.style.color = newColor;
      });
    }
  });

  changeToolsBtn.addEventListener('click', function() {
    toolsList.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const newTool = prompt(`Enter a new tool #${i + 1}:`);
      if (newTool) {
        const li = document.createElement('li');
        li.textContent = newTool;
        frontToolsList.appendChild(li);
      }
    }
  });
  addToolBtn.addEventListener('click', function() {
    const newToolText = newToolInput.value.trim();
    if (newToolText) {
      const li = document.createElement('li');
      li.textContent = newToolText;
      backToolsList.appendChild(li);

      newToolInput.value = '';
    }
  });

  newToolInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addToolBtn.click();
    }
  });
});

