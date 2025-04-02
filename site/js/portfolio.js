document.addEventListener("DOMContentLoaded", () => {
  // Step 1: As a user I can change the avatar image when I click on it
  const avatarImg = document.querySelector(".avatar");

  avatarImg.addEventListener("click", () => {
    avatarImg.src = "./../../site/image/avatar.svg";
  });

  // Step 2 : As a user I can replace the text Matt on the paragraphe with your name and it's color with the color white
  const firstnameSpan = document.querySelector("#firstname");
  const changeNameBtn = document.querySelector("#changeNameBtn");
  const pinkBg = document.querySelectorAll(".pink-bg");
  const pinkText = document.querySelectorAll(".pink-text");
  const newColor = "#750ff7";

  changeNameBtn.addEventListener("click", () => {
    const userName = prompt("Please enter your name:");

    if (userName) {
      firstnameSpan.textContent = userName;
      firstnameSpan.style.color = "white";

      //   Step 3 : As a user I can replace the background color in pink by the color: #750ff7 with the same prompt and button.
      pinkBg.forEach((element) => {
        element.style.backgroundColor = newColor;
      });

      //  Step 4 : As a user I can replace all the elements in pink by the color: #750ff7.
      pinkText.forEach((element) => {
        element.style.color = newColor;
      });
    }
  });

  //  Step 5 : Bonus: As a user I can change the color of all the html links (a) by #750ff7

  const links = document.querySelectorAll("a");

  for (let i = 0; i < links.length; i++) {
    if (window.getComputedStyle(links[i]).color === "rgb(0, 0, 0)") {
      links[i].style.color = "#750ff7";
    }
  }

  //   Step 6 : Bonus: As a user I can change all li elements in the list dev tool front (ul) with a simple button.

  const modifyBtn = document.querySelector(".modify-skills");
  const devToolsList = document.querySelectorAll("#front-dev-tools li");
  const newDevTools = ["VSCode", "Github", "Terminal"];

  modifyBtn.addEventListener("click", () => {
    for (let i = 0; i < devToolsList.length; i++) {
      devToolsList[i].textContent = newDevTools[i];
    }
  });

  //   Step 7 : Super Bonus: As a user I can with a button and an input, add a new li element to the dev tool list back.

  const backDevToolsList = document.querySelector("#back-dev-tools");
  const form = document.querySelector(".form-skills");
  const input = document.querySelector(".devToolInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBackDevTools = input.value.trim();
    if (newBackDevTools) {
      const newLi = document.createElement("li");
      newLi.innerHTML = newBackDevTools;
      backDevToolsList.appendChild(newLi);

      input.value = "";
    }
  });
});
