const express = require("express");
const path = require("path");
const UAParser = require("ua-parser-js");

const config = require("./config");

const app = express();

// Serve everything inside public/
app.use(express.static(path.join(__dirname, "public")));

// Redirect endpoint
app.get(config.qr.redirectPath, (req, res) => {

    const parser = new UAParser(req.headers["user-agent"]);
    const os = parser.getOS().name || "";

    console.log("Visitor OS:", os);

    // Android
    if (os.toLowerCase().includes("android")) {
        return res.redirect(config.stores.playStore);
    }

    // iPhone / iPad / iOS
    if (
        os.toLowerCase().includes("ios") ||
        os.toLowerCase().includes("iphone") ||
        os.toLowerCase().includes("ipad")
    ) {
        return res.redirect(config.stores.appStore);
    }

    // Desktop (Windows, macOS, Linux)
    return res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Home Route
app.get("/", (req, res) => {
    res.redirect(config.qr.redirectPath);
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send(`
        <h2>404 - Page Not Found</h2>
        <p>The requested page does not exist.</p>
    `);
});

if (process.env.VERCEL) {
    module.exports = app;
} else {
    app.listen(config.server.port, () => {

        console.log("=================================");
        console.log(`${config.app.name} Server Running`);
        console.log("=================================");

        console.log(
            `Local URL : http://localhost:${config.server.port}`
        );

        console.log(
            `Download URL : http://localhost:${config.server.port}${config.qr.redirectPath}`
        );

        console.log("=================================");
    });
}