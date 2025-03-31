function changeImage() {
    var img = document.getElementById("myImage");
    if (img.src.includes("site/image/avatar-bis.png")) {
        img.src = "site/image/avatar.svg.jpg";
    } else {
        img.src = "site/image/avatar-bis.png";
    }
}