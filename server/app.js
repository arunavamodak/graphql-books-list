const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(
  "mongodb+srv://arunava:HrKfZyY2AaZu40pz@graphql.saiuh.mongodb.net/GraphQL?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("App started at port 4000");
});
