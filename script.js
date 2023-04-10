const Mask = document.querySelector(".mask");

let MaskHalfWidth = Mask.offsetWidth/2;

window.addEventListener("mousemove",(e)=>{
  Mask.style.top = e.pageY - MaskHalfWidth + "px";
  Mask.style.left = e.pageX - MaskHalfWidth + "px";
});