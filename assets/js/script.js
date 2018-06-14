function chopac(id) {
		document.getElementById(id).style.opacity = 0.85;
	}
	function reopac(id) {
		document.getElementById(id).style.opacity = 1;
	}
	function toggle_nav() {
		var x = document.getElementById("nav-bar");
	    if (x.className === "innactive") {
	        x.className = "active";
	        document.getElementById("nav-icon").className += " clicked";
	    } else {
	        x.className = "innactive";
	        document.getElementById("nav-icon").className = " nav-icon";
		}
	}
	
// 	var bar = document.querySelector("nav-bar");

/*
	document.addEventListener("click", function(click) {
		if (click.target.closest("#nav-icon")) return;
			icon.classList.add("js-hide");
		});
*/
		
/*
	document.addEventListener("click", function(event) {
		if (event.target.closest(".nav-bar")) return;
			bar.classList.add("js-hide");
		});
*/
		
/*
		var box = document.querySelector(".box");

// Detect all clicks on the document
document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest(".box")) return;

	// If user clicks outside the element, hide it!
	box.classList.add("js-is-hidden");
});
*/
/*
var bar = document.getElementById("nav-bar");

// Detect all clicks on the document
document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (bar.className === "innactive") {
	if (event.target.closest(".nav-bar")) return;

	// If user clicks outside the element, hide it!
	bar.className += " js-hide";
}});
*/



var nav = document.querySelector(".innactive");

// Detect all clicks on the document
document.addEventListener("click", function(event) {
	
	if (document.getElementById("nav-bar").className === "active") {
	// If user clicks inside the element, do nothing
	if (event.target.closest(".active") || event.target.closest(".nav-icon")) return;

	// If user clicks outside the element, hide it!
	nav.className = "innactive";
// } else {
// 	document.getElementById.className = "innactive"
}
}
						  
);


/*

function toggle() {
	if(document.getElementById("box").className === "innactive") {
		document.getElementById("box").className = "js-active"
	} else {
		document.getElementById("box").className = "innactive"
	}
}
*/
