let heroCover = document.getElementById('hero-cover')
let blur = 1

document.addEventListener("scroll", () => {
    let value = window.scrollY
    heroCover.style.backdropFilter = `blur(${value * 0.03}px)`
});

