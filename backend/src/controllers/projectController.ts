import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
// export const getProjects = (
//     req: Request,
//     res: Response
// ) => {
//     res.json([
//         {
//             id: 1,
//             name: "Software House Tracker",
//             description: "Track Software projects"
//         }
//     ]);
// };

export const getProjects = async (
    req: Request,
    res: Response
) => {
    const projects = await prisma.project.findMany();
    res.json(projects);
};

export const createProject = async (
    req : Request, 
    res : Response
) => {

    const { name, description } = req.body;
    
    const project = 
        await prisma.project.create({
            data: {
                name,
                description,
                userId: 1
            }
    });
    res.status(201).json(project);
};

export const updateProject = async (
    req : Request, 
    res : Response
) => {
    const { id } = req.params;
    const { name, description } = req.body;

    const project = await prisma.project.update({
        where: { 
            id: Number(id) },
        data: { name, description }
    });

    res.json(project);
};

export const deleteProject = async (
    req : Request, 
    res : Response
) => {
    const {id} = req.params;
    
    await prisma.project.delete({
        where: { id: Number(id) }
    });

    res.json({
        message: `Project ID ${id} was Deleted`
    });
};