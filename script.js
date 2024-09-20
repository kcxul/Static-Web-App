
document.getElementById('current-year').textContent = new Date().getFullYear();
function updateDateTime() {
	const now = new Date();
	const dateTimeString = now.toLocaleString();
	document.getElementById('current-date-time').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();