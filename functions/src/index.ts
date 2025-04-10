const functions = require("firebase-functions");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

exports.next = functions.https.onRequest((req: any, res: any) => {
    app.prepare().then(() => {
        handle(req, res);
    });
});