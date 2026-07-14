import express from "express";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API is Running");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
app.listen(3001, () => {
    console.log("Server running on port 3001");
});