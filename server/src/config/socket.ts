import { ServerOptions } from "socket.io";
import { env } from "./env";

export const socketConfig: Partial<ServerOptions> = {
	cors: {
		origin: env.CLIENT_URL,
		credentials: true,
	},
	transports: ["websocket", "polling"],
};
