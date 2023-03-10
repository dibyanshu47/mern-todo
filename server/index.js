import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import todos from "./routes/todos.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('App is running');
});

app.use("/api/todos", todos);

const CONNECTION_URL = "mongodb+srv://dibyanshujaiswal1607:B2QJB6sx2WmN9MlJ@cluster0.yrbgzbq.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`)))
    .catch((error) => console.log(error));