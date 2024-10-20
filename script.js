
document.getElementById("cabForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const pickup = document.getElementById("pickup").value;
    const destination = document.getElementById("destination").value;
    const cabType = document.getElementById("cabType").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (cabType) {
        // Redirect to details page with query parameters
        window.location.href = `details.html?name=${encodeURIComponent(name)}&pickup=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(destination)}&cabType=${encodeURIComponent(cabType)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}`;
    }
});
