import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// db.json path
const router = jsonServer.router(
  path.join(__dirname, "./db/db.json")
);

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Optional middleware
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = new Date().toISOString();
  }
  next();
});

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
