function changeImage() {
    if (document.getElementById("myImage").src == "\site\image\avatar-bis.png") {
        document.getElementById("myImage").src = "\site\image\avatar.svg";
    } else {
        document.getElementById("myImage").src = "\site\image\avatar-bis.png";
    }
}