// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const gProject = document.querySelectorAll(".gproject");
    const indiPro = document.querySelector(".indipro");
    const cert = document.querySelector(".cert");
    const btnGroupProject = document.getElementById("one");
    const btnIndiProject = document.getElementById("two");
    const btnViewCert = document.querySelector(".project-btn3");
    const btnHideCert = document.querySelector(".project-btn4");
    const btnHideGProject = document.getElementById("hide-gproject");
    const btnHideIndi = document.getElementById("hide-indipro");
    gProject.forEach(el => el.classList.add("hidden"));
    indiPro.classList.add("hidden");
    cert.classList.add("hidden");
    btnGroupProject.addEventListener("click", () => {
        gProject.forEach(el => {
            el.classList.remove("hidden");
            el.classList.add("fade-show");
        });
        indiPro.classList.add("hidden");
    });
    btnIndiProject.addEventListener("click", () => {
        indiPro.classList.remove("hidden");
        indiPro.classList.add("fade-show");
        gProject.forEach(el => el.classList.add("hidden"));
    });
    btnViewCert.addEventListener("click", () => {
        cert.classList.remove("hidden");
        cert.classList.add("fade-show");
    });
    btnHideCert.addEventListener("click", () => {
        cert.classList.add("hidden");
    });
    btnHideGProject.addEventListener("click", () => {
        gProject.forEach(el => el.classList.add("hidden"));
    });
    btnHideIndi.addEventListener("click", () => {
        indiPro.classList.add("hidden");
    });
});
