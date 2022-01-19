const images = document.querySelectorAll('#roadmap');

observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      animate();
    } else {
      return;
    }
  });
});

images.forEach(image => {
  observer1.observe(image);
});



// Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("line");
var length = line.getTotalLength();

// The start position of the drawing
line.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
line.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled

function animate(){

window.addEventListener("scroll", myFunction);

function myFunction() {
var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent*5;
  
  // Reverse the drawing (when scrolling upwards)
  line.style.strokeDashoffset = length - draw;
}
}


