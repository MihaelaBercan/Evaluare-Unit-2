let currentIndex = 0;
let images = document.querySelectorAll('.slideshow-image');
let slideshowContainer = document.getElementById('slideshow-container');
let initialImages = document.querySelectorAll('.initial-image');
let slideshowInterval;

function showImage(index){
  images.forEach(img => img.classList.remove('active'));//ascunde imagini
  images[index].classList.add('active');
}

function startSlideshow(){
  if (slideshowInterval){
    clearInterval(slideshowInterval);
  }

  initialImages.forEach(img => img.style.display = 'none');
  slideshowContainer.style.display = 'block';
  
  showImage(currentIndex);
  
  slideshowInterval = setInterval(function(){
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);//3000 ms -> 3 secunde
}

document.getElementById('slideshow-title').addEventListener('click', function(){
  console.log('Titlul a fost apăsat!');
  startSlideshow();
});