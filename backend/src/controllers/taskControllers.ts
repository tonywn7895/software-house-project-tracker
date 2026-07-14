import {RequestHandler} from "express";
/*import {} from "../controllers/projectController";`*/
import {prisma} from "../lib/prisma"

export const getTasks: RequestHandler = async ( req , res ) => {
    const tasks = await prisma.task.findMany({include: {project: true}});
    res.json(tasks);
}

export const createTask: RequestHandler = async ( req , res ) => {
    try{
    const { title, description, status , projectId } = req.body;
    // Validation ควรอยู่ข้างบน Prisma //
    if(!title){
        return res.status(400).json({
            message: "Title is required"
        });
    }
    if(!projectId){
        return res.status(400).json({
            message: "ProjectId is required"
        });
    }
    const task = await prisma.task.create({
        data : {
            title,
            description,
            status: status || "todo",
            projectId: Number(projectId)
        }
    })
    res.status(201).json(task);
}catch(error){
    console.error("Error Creating Task:", error);
    res.status(500).json({message: "Internal Server Error"});
}
}

export const updateTask: RequestHandler = async ( req , res ) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    // Validation //
        if(isNaN(Number(id))){
        return res.status(400).json({
            message: "Invalid Task ID"
        })
    }
    const task = await prisma.task.update({
        where: { id: Number(id) },
        data: { title, description, status }
    })
    res.json(task);
}   

export const deleteTask: RequestHandler = async ( req , res) => {
    const {id} = req.params;
    const task = await prisma.task.delete({
        where: {id: Number(id)}
    })
    res.json(task);
}