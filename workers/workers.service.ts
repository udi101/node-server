import { Request, Response} from 'express';

export const  getUser = (req:Request, res:Response) => {
    res.status(200).json('This is a test ' + req.params.id);
}