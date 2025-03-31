let avatarImg = document.getElementById("avatar-bis");

avatarImg.addEventListener("click", () => { avatarImg.src = "image/avatar.svg"; });

const buttonModifyName = document.querySelector("button");
let firstName = document.getElementById("firstname");
let banner = document.querySelector(".pink-bg");

buttonModifyName.addEventListener("click", () => {
    bannerBackgroundColor = prompt("Enter a color :");
    let name = prompt("enter your name :");
    firstName.replaceWith(`${name}`) + banner.replaceWith(bannerBackgroundColor.style.backgroundColor = " #750ff7");
});