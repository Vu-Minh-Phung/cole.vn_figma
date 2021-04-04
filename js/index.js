var slideIndex = 1;
tranformSlides(1);

function plusSlide(n = 1) {
	tranformSlides(slideIndex += n);
}
function tranformSlides(n) {
	var slides = document.querySelectorAll(".homebanner_slideshow div.column")
	if(n > slides.length) slideIndex = 1;
	if(n <= 0) slideIndex = slides.length;
	console.log(slides);
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.opacity = '0.4';
		slides[i].style.left = (i + 1 - slideIndex)*105.555 + "%";
	}
	if(slideIndex == slides.length) slides[0].style.left = "105.555%";
	if(slideIndex == 1) slides[slides.length - 1].style.left = "-105.555%";
	slides[(slideIndex-1 + slides.length)%slides.length].style.opacity = '1';
	slides[(slideIndex-2 + slides.length)%slides.length].style.opacity = '1';
	slides[(slideIndex + slides.length)%slides.length].style.opacity = '1';
	setTimeout(plusSlide, 5000);
}