// Array holding paths to your drone images
let images = [
  "images/drone1.jpg",
  "images/drone2.jpg",
  "images/drone3.jpg",
  "images/drone4.jpg"
];

let current = 0; // Track current image index
let slideshow = document.getElementById("slideshow");

// Function to update the displayed image
function showImage() {
  slideshow.src = images[current];
  current = (current + 1) % images.length; // Loop back to first image
}

// Call showImage every 3 seconds
setInterval(showImage, 3000);
showImage(); // Show first image immediately
