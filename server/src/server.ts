import dotenv from "dotenv";
import { createServer } from "http";
import { env } from "./config/env";
import app from "./app";
import { logger } from "./utils/logger";
import { initializeSocket } from "./socket";

const PORT = env.PORT;

const server = createServer(app);

initializeSocket(server);

server.listen(PORT, () => {
  logger.info(`🚀 WorldConnect API running at http://localhost:${PORT}`);
});

/*
|--------------------------------------------------------------------------
| Graceful Shutdown
|--------------------------------------------------------------------------
*/

process.on("SIGINT", () => {
  logger.info("Stopping server...");

  server.close(() => {
    logger.info("Server stopped.");
    process.exit(0);
  });
});