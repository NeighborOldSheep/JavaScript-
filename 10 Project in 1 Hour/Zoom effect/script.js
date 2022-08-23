const container = document.getElementById("container");
const img = document.querySelector("img")

container.addEventListener("mousemove", (event) =>{
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    // x + 'px' + '' + y + 'px'
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(3)";

})

container.addEventListener("mouseleave", (event) =>{
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
})