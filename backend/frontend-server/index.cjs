const http = require("http");
const fs = require("fs");
const path = require("path");
const compression = require("compression");

const PORT = process.env.PORT || 3000;
const rootDir = path.join(__dirname, "../../dist");
const mimeTypes = {
	".html": "text/html",
	".js": "text/javascript",
	".css": "text/css",
	".svg": "image/svg+xml",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".gif": "image/gif",
	".json": "application/json",
};

http
	.createServer((req, res) => {
		compression()(req, res, () => {
			let filePath = path.join(
				rootDir,
				req.url === "/" ? "index.html" : req.url
			);
			let ext = path.extname(filePath);
			let contentType = mimeTypes[ext] || "text/plain";

			fs.readFile(filePath, (err, content) => {
				if (err) {
					if (req.url !== "/" && ext === "") {
						fs.readFile(
							path.join(rootDir, "index.html"),
							(fallbackErr, fallbackContent) => {
								if (fallbackErr) {
									res.writeHead(404);
									res.end("404 Not Found");
								} else {
									res.writeHead(200, { "Content-Type": "text/html" });
									res.end(fallbackContent);
								}
							}
						);
					} else {
						res.writeHead(404);
						res.end("404 Not Found");
					}
				} else {
					res.writeHead(200, {
						"Content-Type": contentType,
						"Cache-Control": "public, max-age=31536000, immutable",
					});
					res.end(content);
				}
			});
		});
	})
	.listen(PORT, () => console.log(`Server running at port : ${PORT}`));
