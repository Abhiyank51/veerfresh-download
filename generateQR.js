const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");

const config = require("./config");

const OUTPUT_DIR = path.join(__dirname, "output");

// Create output folder if missing
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// IMPORTANT:
// Change this after deployment.
const BASE_URL = `http://localhost:${config.server.port}${config.qr.redirectPath}`;

async function generate() {

    try {

        console.log("Generating QR Code...");

        // PNG
        await QRCode.toFile(
            config.qr.output.png,
            BASE_URL,
            {
                width: config.qr.size,
                margin: config.qr.margin,
                errorCorrectionLevel: "H",

                color: {
                    dark: config.qr.colors.dark,
                    light: config.qr.colors.light
                }
            }
        );

        console.log("PNG Generated");

        // SVG
        const svg = await QRCode.toString(
            BASE_URL,
            {
                type: "svg",

                width: config.qr.size,

                margin: config.qr.margin,

                errorCorrectionLevel: "H",

                color: {
                    dark: config.qr.colors.dark,
                    light: config.qr.colors.light
                }
            }
        );

        fs.writeFileSync(config.qr.output.svg, svg);

        console.log("SVG Generated");

        console.log("--------------------------------");
        console.log("QR Generation Complete");
        console.log(BASE_URL);
        console.log("--------------------------------");

    }

    catch (err) {

        console.error(err);

    }

}

generate();