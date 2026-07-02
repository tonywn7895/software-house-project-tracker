import express from "express";
import projectRoutes from "./routes/projectRoutes";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use("/projects", projectRoutes);

app.listen(3001, () => {
    console.log("Server running on port 3001");
});