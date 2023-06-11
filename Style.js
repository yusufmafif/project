// Mendapatkan elemen-elemen yang dibutuhkan
const slideshow = document.querySelector('.slideshow');
const slides = document.querySelector('.slides');

// Mendapatkan lebar slide
const slideWidth = slides.clientWidth;

// Mendapatkan tombol navigasi (optional)
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Mengatur event listener untuk tombol navigasi (optional)
prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

// Fungsi untuk berpindah ke slide sebelumnya
function slidePrev() {
  slides.style.transform = `translateX(-${slideWidth}px)`;
}

// Fungsi untuk berpindah ke slide berikutnya
function slideNext() {
  slides.style.transform = 'translateX(0)';
}
