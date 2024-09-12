const images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
  ];
  
  let currentIndex = 0;
  
  function changeImage() {
    const imageElement = document.getElementById("rouletteImage");
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }
  
  setInterval(changeImage, 2000);