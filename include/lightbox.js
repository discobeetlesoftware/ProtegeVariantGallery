
  function openLightbox() {
	document.getElementById("lightbox").style.display = "block";
}
  
  function closeLightbox() {
	document.getElementById("lightbox").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide");
	var dots = document.getElementsByClassName("wheel");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {
		slideIndex = 1
	}
	
	if (n < 1) {
		slideIndex = slides.length
	}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	var thumbIndex = slideIndex - 1;
	var minActive = 0;
	var maxActive = slides.length - 1;
	var isBeyondMin = thumbIndex < 3;
	var isBeyondMax = thumbIndex > slides.length - 3;
	if (isBeyondMin) {
		maxActive = 4;
	} else if (isBeyondMax) {
		minActive = maxActive - 4;
	} else {
		minActive = thumbIndex - 2;
		maxActive = thumbIndex + 2;
	}
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
		if (i >= minActive && i <= maxActive) {
			dots[i].parentElement.style.display = "block";
		} else {
			dots[i].parentElement.style.display = "none";
		}
	}
	
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}