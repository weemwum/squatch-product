/*
    Change Active Image in Product Gallery
*/
const activeImage = document.querySelector(".product-image .active");
const video = document.querySelector(".embed-responsive-item")
const productImages = document.querySelectorAll(".image-list img");

function changeImage(e) {
    if (this.alt === 'video') {
        // load video iframe instead of photo!
        activeImage.style.display = 'none';
        video.style.display = 'block'
    } else {
        activeImage.src = e.target.src;
        activeImage.style.display = '';
        video.style.display = 'none'
    }
}

productImages.forEach(image => image.addEventListener("click", changeImage));

/*
  Horizontal Scrolling for 'You Might Also Like' Section
*/

const slider = document.querySelector('.scroll-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});