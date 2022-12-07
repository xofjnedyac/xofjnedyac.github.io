function navToggle() {
    document.getElementById("mobileNav").classList.toggle("open");
}

const hamBone = document.getElementById('hamBone')

hamBone.onclick = navToggle;
