import fastfi from "fastify";
import {z} from 'zod';
import {Poll, PrismaClient} from '@prisma/client';

const app = fastfi();

const prisma = new PrismaClient();


app.get("/", (_req, res) => {
  return res.send({msg:"Hello World!"});
});

app.post("/polls", async(req, res) => {
  const creatPollBody = z.object({
    title: z.string()
  })
  const {title} = creatPollBody.parse(req.body)

  const poll = await prisma.poll.create({
    data: {
      title,
    }
  })

  return res.status(201).send({pollId: poll.id})
  
});

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server listening on port!");
});
