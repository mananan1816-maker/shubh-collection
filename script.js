// Mobile menu

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


// Product search

function searchProducts() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        let name = product
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (name.includes(input)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });
}


// WhatsApp order

function orderProduct(productName) {

    let phone = "919988223416";
<!DOCTYPE html>
<html>
<head>
    <title>Shubh Collection</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <h1>Shubh Collection</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section id="home" class="hero">
        <h2>Welcome to Shubh Collection</h2>
        <p>Style • Quality • Happiness</p>
        <a href="#products" class="button">View Collection</a>
    </section>

    <section id="products">
        <h2>Our Products</h2>

        <div class="products">

            <div class="product">
                <div class="emoji"></div>
                <h3>Elegant Dress</h3>
                <p>₹999</p>
                <button onclick="order('Elegant Dress')">
                    Order Now
                </button>
            </div>

            <div class="product">
                <div class="emoji">🥻</div>
                <h3>Designer Saree</h3>
                <p>₹1,499</p>
                <button onclick="order('Designer Saree')">
                    Order Now
                </button>
            </div>

            <div class="product">
                <div class="emoji">👚</div>
                <h3>Fashion Top</h3>
                <p>₹699</p>
                <button onclick="order('Fashion Top')">
                    Order Now
                </button>
            </div>

        </div>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>📞 +91 XXXXX XXXXX</p>
        <p>📍 Your Shop Address</p>
    </section>

    <footer>
        <p>© 2026 Shubh Collection</p>
    </footer>

    <script src="script.js"></script>

</body>
</html>function order(product) {
    alert("You selected: " + product);
}
    let message =
        "Hello Shubh Collection! I am interested in " +
        productName +
        ".";

    let url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}
