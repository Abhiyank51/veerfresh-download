module.exports = {
    app: {
        name: "Veer Fresh",
        tagline: "Fresh Groceries Delivered to Your Doorstep",
        description:
            "Scan the QR code to download the Veer Fresh app on your device.",
    },

    stores: {
        playStore:
            "https://play.google.com/store/apps/details?id=com.sunrisecustomerapp&hl=en_IN",

        appStore:
            "https://apps.apple.com/in/app/veer-fresh/id6777766322",
    },

    qr: {
        redirectPath: "/download",
        size: 700,
        margin: 2,

        colors: {
            dark: "#118B50",
            light: "#FFFFFF",
        },

        output: {
            png: "./output/veerfresh_qr.png",
            svg: "./output/veerfresh_qr.svg",
        }
    },

    branding: {
        primary: "#118B50",
        secondary: "#38B000",
        background: "#FFFFFF",
        text: "#222222",
        accent: "#E8F5E9"
    },

    logo: {
        path: "./assets/logo.png"
    },

    server: {
        port: 3000
    }
};