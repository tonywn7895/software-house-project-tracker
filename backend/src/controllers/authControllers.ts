import { Request, Response } from "express";
import { prisma } from "../lib/prisma";


export const register = async (
    req: Request,
    res: Response
) => {
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    });

    if(existingUser){
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    const user =
    await prisma.user.create({
            data: {
                name,
                email,
                password
            }
    })
    res.status(201).json(user);
};

export const login = async (
    req: Request,
    res: Response

) => {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(!user){
        return res.status(401).json({
            message: "Invalid Credentials"
        });
    }
    if(user.password !==password){
        return res.status(401).json({
            message: "Invalid Credentials"
        })
    }
    res.json({
        message: "Login Successful",
        user
    });
}