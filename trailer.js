/*
document.onmousemove = function(e) { 
    var x = e.clientX - trailer.offsetWidth/2; 
    var y = e.clientY - trailer.offsetHeight; 

    document.getElementById('trailer').style.marginLeft  = x+"px";
    document.getElementById('trailer').style.marginTop  = y+"px";
    document.getElementById('trailer').style.scale(interacting ? 8 : 1);
    
}
*/

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2, y = e.clientY;

    document.getElementById('trailer').style.marginLeft  = x+"px";
    document.getElementById('trailer').style.marginTop  = y+"px";
    document.getElementById('trailer').style.cursor = "none";

    const keyframes = {
        transform : `scale(${interacting ? 3 : 1})`,
        opacity : 1,
    }

    //trailer.style.transform = `translate(${x}px, ${y}px)`;

    //scale(${interacting ? 2 : 1})

    trailer.animate(keyframes, { 
        duration: 500, 
      });
}

window.onmousemove = e => {
    const interactable = e.target.closest("a"),
          interacting = interactable !== null;
    
    const icon = document.getElementById("trailer");
    
    animateTrailer(e, interacting);
  }