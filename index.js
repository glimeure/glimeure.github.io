const swiper = new Swiper("swiper-container");

function checkViewportWidth() {
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	var wrappers = document.querySelectorAll("wrapper");
	var viewportAlerts = document.querySelectorAll("viewport-alert");
	if (viewportWidth < 360) {
		wrappers.forEach((wrapper) => {
			wrapper.style.display = "none";
		});
		viewportAlerts.forEach((viewportAlert) => {
			viewportAlert.style.display = "flex";
		});
	} else {
		wrappers.forEach((wrapper) => {
			wrapper.style.display = "";
		});
		viewportAlerts.forEach((viewportAlert) => {
			viewportAlert.style.display = "none";
		});
	}
}

checkViewportWidth();
window.addEventListener("resize", function () {
	checkViewportWidth();
});
