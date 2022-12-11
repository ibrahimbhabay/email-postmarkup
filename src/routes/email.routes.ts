import {Router, Request, Response} from 'express';


export const emailRoutes = Router();

emailRoutes.get('/all', (request: Request, response: Response) => {
    return response.json({
        message: "All emails"
    })
} )