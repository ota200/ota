

function show_hide() {
	var m = document.getElementById("menu");
	var back = document.getElementById("back");


	if (m.style.display === "inline-block") {
		m.style.display = "none";
	}

	if (back.style.display === "inline-block") {
		back.style.display = "none";
	}

	else {
		m.style.display = "inline-block";
		back.style.display = "inline-block";

	}
}

