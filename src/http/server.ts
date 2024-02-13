import fastfi from "fastify";
import { createPoll } from "../routes/create-poll";
import cookie from "@fastify/cookie";
import { getPoll } from "../routes/get-poll";
import { voteOnPoll } from "../routes/vote-on-poll";


const app = fastfi();

//Registro das rotas
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll);
app.register(cookie, {
  secret: "qualquer-string-123",
  hook: "onRequest",  
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server listening on port!");
});
