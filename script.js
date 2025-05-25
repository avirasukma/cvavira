const images = ["porto1.png", "porto2.png", "porto3.jpg"];
let currentIndex = 0;

function showImage(index) {
  const img = document.getElementById("portfolioImage");
  img.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
