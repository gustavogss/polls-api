import fastfi from "fastify";
import { createPoll } from "../routes/create-poll";


const app = fastfi();

app.register(createPoll)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server listening on port!");
});
