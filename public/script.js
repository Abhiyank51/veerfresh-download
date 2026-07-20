document.addEventListener("DOMContentLoaded", () => {

    console.log("Veer Fresh Loaded 🚀");

    // ==========================
    // Fade-in animation
    // ==========================

    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition = "all .8s ease";

        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, 200);

    // ==========================
    // Device Detection
    // ==========================

    const ua = navigator.userAgent;

    let device = "Desktop";

    if (/Android/i.test(ua)) {

        device = "Android";

    }

    else if (/iPhone|iPad|iPod/i.test(ua)) {

        device = "iPhone";

    }

    console.log("Device:", device);

    // ==========================
    // Mouse Tilt Effect
    // ==========================

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 40;

        const y = (window.innerHeight / 2 - e.clientY) / 40;

        card.style.transform =
            `rotateY(${x}deg) rotateX(${-y}deg)`;

    });

    document.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

    // ==========================
    // Button Hover Effect
    // ==========================

    document.querySelectorAll(".store-buttons a")
        .forEach(button => {

            button.addEventListener("mouseenter", () => {

                button.style.transform = "scale(1.05)";

            });

            button.addEventListener("mouseleave", () => {

                button.style.transform = "scale(1)";

            });

        });

    // ==========================
    // Feature Animation
    // ==========================

    document.querySelectorAll(".feature")
        .forEach((feature, index) => {

            feature.style.opacity = "0";

            feature.style.transform = "translateY(20px)";

            setTimeout(() => {

                feature.style.transition = ".6s";

                feature.style.opacity = "1";

                feature.style.transform = "translateY(0)";

            }, 500 + index * 150);

        });

    // ==========================
    // Smooth Scroll
    // ==========================

    document.documentElement.style.scrollBehavior = "smooth";

});