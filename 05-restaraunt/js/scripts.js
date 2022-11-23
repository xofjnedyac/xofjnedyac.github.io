
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamBone").classList.toggle("open");
}

const x = document.getElementById("hamBone");

x.onclick = toggleMenu; 
