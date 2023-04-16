var currentImageIndex1 = 0;
var intervalId1 = setInterval(slideImage1, 3000);

function slideImage1() {
  var sliderImages = document.getElementById("slider-images");
  var imageWidth = document.querySelector("#slider-container1").offsetWidth;

  currentImageIndex1++;
  if (currentImageIndex1 >= sliderImages.children.length) {
    currentImageIndex1 = 0;
  }

  var translateX = -1 * currentImageIndex1 * imageWidth;
  sliderImages.style.transform = `translateX(${translateX}px)`;
}


var sliderContainer1 = document.getElementById("slider-container1");

sliderContainer1.addEventListener("mouseenter", function() {
  clearInterval(intervalId1);
});

sliderContainer1.addEventListener("mouseleave", function() {
  intervalId1 = setInterval(slideImage1, 3000);
});
