import { Request, Response } from "express";

export const getProjects = (
    req: Request,
    res: Response
) => {
    res.json([
        {
            id: 1,
            name: "Software House Tracker",
            description: "Track Software projects"
        }
    ]);
};

export const createProject = (
    req : Request, 
    res : Response
) => {

    const { name, description } = req.body;
    res.json({
        message: "Project Created",
        project: {
            name,
            description
        }
    });
};

export const updateProject = (
    req : Request, 
    res : Response
) => {
    const { id } = req.params;
    res.json({
        message: `Project ID ${id} was Updated with name ${req.body.name}`,
        project: {
            name: req.body.name
        }
    });
};

export const deleteProject = (
    req : Request, 
    res : Response
) => {
    const {id} = req.params;
    res.json({
        message: `Project ID ${id} was Deleted`
    });
};