function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

function whatsapp(number) {
    const message = "Hello Shubh Collection! I would like to know about your ladies garments.";
    window.open(
        "https://wa.me/91" + number + "?text=" + encodeURIComponent(message),
        "_blank"
    );
}

function order(product) {
    const message =
        "Hello Shubh Collection! I am interested in " +
        product +
        ". Please share more details.";

    window.open(
        "https://wa.me/919988223416?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}
