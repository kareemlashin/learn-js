var newElement = document.getElementById('firstHeading');
function ok(){
     alert("ok")
}

newElement.addEventListener("click", ok);



newElement.onclick = function() {
  console.log('clicked');
};


//onclick    click
//ondblclick  dblclick
//onmousedown mousedown
//onmousemove  mousemove
//onmouseover  mouseover
//onmouseout    mouseout
//onKeyUp      keyUp
//onKeyDown   keyDown

window.onload = () => {
     //window loaded
   };