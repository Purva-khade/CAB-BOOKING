
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(function(part) {
        const item = part.split("=");
        params[decodeURIComponent(item[0])] = decodeURIComponent(item[1]);
    });
    return params;
}

document.addEventListener("DOMContentLoaded", function() {
    const params = getQueryParams();
    const cabType = params.cabType;
    const details = {
        sedan: "A sedan is a comfortable and economical choice for your journey.",
        suv: "An SUV offers more space and is perfect for families or groups.",
        luxury: "Luxury cabs provide top-notch comfort and style for special occasions."
    };

    const info = `
        Name: ${params.name} <br>
        Pickup Location: ${params.pickup} <br>
        Destination: ${params.destination} <br>
        Cab Type: ${cabType.charAt(0).toUpperCase() + cabType.slice(1)} <br>
        Details: ${details[cabType]} <br>
        Date: ${params.date} <br>
        Time: ${params.time}
    `;
    
    document.getElementById("info").innerHTML = info;
});
