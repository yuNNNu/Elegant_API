const express = require("express");
const parser = require("body-parser");
const services = require("./services");
const handlify = require("./handlers");
const app = express();
const port = 4000;

/////////////
const usersHandler = handlify("users");
const postsHandler = handlify("posts");
////////////

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

//// User Handler
app.get("/", usersHandler(services).get);
app.post("/", usersHandler(services).post);
app.put("/:id", usersHandler(services).put);
app.delete("/:id", usersHandler(services).delete);

//// Post Handler
app.get("/posts", postsHandler(services).get);
app.post("/posts", postsHandler(services).post);
app.put("/posts/:id", postsHandler(services).put);
app.delete("/posts/:id", postsHandler(services).delete);

app.listen(port, () => console.log(`On port ${port}`));
