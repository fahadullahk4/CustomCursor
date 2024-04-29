var text = document.querySelector("h1");
var mouse = document.querySelector(".cursor");
var main = document.querySelector(".main");

main.addEventListener("mousemove", (dets) => {
	mouse.style.top = dets.clientY + "px";
	mouse.style.left = dets.clientX + "px";
});
text.addEventListener("mousemove", () => {
	mouse.style.transform = "scale(4)";
    mouse.style.color = "transparent"
    mouse.style.transition = "all linear 0.3s"
});

text.addEventListener("mouseleave", () => {
	mouse.style.transform = "scale(1)";
});
