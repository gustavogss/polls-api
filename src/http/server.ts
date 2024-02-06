import fastfi from "fastify";

const app = fastfi();

app.get("/", (req, res) => {
  res.send({msg:"Hello World!"});
});



app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server listening on port!");
});
