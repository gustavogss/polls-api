import fastfi from "fastify";
import websocket from "@fastify/websocket";
import cookie from "@fastify/cookie";
import { createPoll } from "../routes/create-poll";
import { getPoll } from "../routes/get-poll";
import { voteOnPoll } from "../routes/vote-on-poll";
import { pollResults } from "./ws/poll-results";



const app = fastfi();

//Registro das rotas
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll);
app.register(cookie, {
  secret: "qualquer-string-123",
  hook: "onRequest",  
});

app.register(websocket);

app.register(pollResults);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server listening on port!");
});
