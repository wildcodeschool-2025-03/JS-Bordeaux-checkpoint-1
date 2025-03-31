/*const currentImg = document.getElementById("avatar");

avatar.addEventListener("click", () => {
	element.innerHTML = image / avatar - bis.png;
});*/

/*first step*/
const avatar = document.getElementById("avatar");
avatar.addEventListener("click", () => {
	avatar.src = "image/avatar-bis.png";
});

/*second step*/
const button = document.getElementById("modify");
button.addEventListener("click", onButtonClick);
function onButtonClick(event) {
	const enterYourName = prompt("enter your name");
	if (enterYourName !== null && enterYourName !== "") {
		const firstName = document.getElementById("firstname");
		firstName.innerHTML = enterYourName;
	}
}
