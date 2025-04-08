import WebSocket, {WebSocketServer} from "ws";
import { prismaClient } from "@repo/db/prismaClient";

const wss = new WebSocketServer({port: 8080});

wss.on("connection",  async (ws) => {
    
    const newUser = await prismaClient.user.create({
        data: {
            email: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    ws.send(JSON.stringify(`new user id : ${newUser.id}`));
});
