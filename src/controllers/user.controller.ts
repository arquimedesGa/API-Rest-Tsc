import { Request, Response } from "express";

export class userController {
    getUsers(req: Request, res: Response) {
        res.status(200).json({ message: "soy los Usuarios" });
    }
}