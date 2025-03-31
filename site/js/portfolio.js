const avatar = document.querySelector("#avatar");
avatar.addEventListener("click", () => {
    avatar.src = "image/avatar-bis.png";
});


const modification = document.querySelector(".modification");
modification.addEventListener("click", () => {
    const choice = prompt("Text or background ?");
    if (choice === "text") {
        const text = prompt("Give your firstname");
        const firstname = document.querySelector("#firstname");
        firstname.innerHTML = text;
        firstname.style.color = "white";
    }
    if (choice === "background") {
        const background = prompt("choose your color for the background");
        const description = document.querySelector(".pink-bg");
        description.style.backgroundColor = background;
    }
});



