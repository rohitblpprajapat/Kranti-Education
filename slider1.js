let images = [
    "/images/img.jpg",
    "/images/img-2.jpg",
    "/images/img-3.jpg",
    "/images/img-4.jpg",
  ];


  let currentImageIndex = 0;

  
  let sliderContainer = document.getElementById("slider-container");
  function slideImage() {
    console.log("slideImage");
    let imagesList = sliderContainer.getElementsByTagName("img");
  
    imagesList[currentImageIndex].style.opacity = 0;
  
    currentImageIndex++;
  
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  
    imagesList[currentImageIndex].style.opacity = 1;
  }

  let intervalId = setInterval(slideImage, 1500);

  sliderContainer.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
  });
  
  sliderContainer.addEventListener("mouseleave", function() {
    intervalId = setInterval(slideImage, 1500);
  });
  

  