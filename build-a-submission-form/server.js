import express from "express";
import apiRouter from "./routes/api.routes.js";
import { notFoundHandler, finalErrorHandler } from "./middleware/error.middleware.js";
const app = express();

app.use("/api", apiRouter);

app.use(notFoundHandler);

app.use(finalErrorHandler);

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(`Method: ${req.method}, URL:${req.url}`);
    next();
});

app.listen(3000, (req, res) => {
    console.log(`Server is running on http://localhost:3000`);
});
