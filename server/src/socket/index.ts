import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { socketConfig } from "../config/socket";
import { logger } from "../utils/logger";

let io: Server;

export function initializeSocket(server: HttpServer) {
	io = new Server(server, socketConfig);

	io.on("connection", (socket) => {
		logger.info(`Socket connected: ${socket.id}`);

		socket.on("disconnect", () => {
			logger.info(`Socket disconnected: ${socket.id}`);
		});
	});

	return io;
}

export function getIO() {
	if (!io) {
		throw new Error("Socket.IO has not been initialized.");
	}

	return io;
}
