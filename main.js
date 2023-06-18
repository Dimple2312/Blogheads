let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener("click", function () {
	collapse.forEach((col) => col.classList.toggle("collapse-toggle"));
});

// with masonry
new Masonry("#posts .grid", {
	itemSelector: ".grid-item",
	gutter: 20,
});

// swiper libray initialization
new Swiper(".swiper-container", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 5,
	autoplay: {
		delay: 3000,
	},
	// responsive brakpoints
	breakpoints: {
		"@0": {
			slidesPerView: 2,
		},
		// 888px
		"@1.00": {
			slidesPerView: 3,
		},
		// 1110px
		"@1.25": {
			slidesPerView: 4,
		},
		// 1330px
		"@1.50": {
			slidesPerView: 5,
		},
	},
});

// Sticky Navigation
window.onscroll = function () {
	myFunction();
};

// get the current value
let navbar = document.getElementById("header");

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

// Get the modal
var modal1 = document.getElementById("myModal-1");
var modal2 = document.getElementById("myModal-2");

// Get the button that opens the modal
var btn = document.getElementById("btn-login");
var btn2 = document.getElementById("button-login");
var register = document.getElementById("signup");
var login = document.getElementById("sign-in");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal1.style.display = "block";
};
register.onclick = function () {
	modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
btn2.onclick = function () {
	modal1.style.display = "none";
};
span.onclick = function () {
	if (modal1) {
		modal1.style.display = "none";
	}
};

window.onclick = function (event) {
	if (event.target == modal1 || event.target == modal2) {
		modal1.style.display = "none";
		modal2.style.display = "none";
	}
};
