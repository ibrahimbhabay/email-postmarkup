import {Router, Request, Response} from 'express';
import { MessageDTO } from 'src/dto/message.dto';
import { sendEmail, saveInboundEmail, getEmails, getAllEmails } from '../service/email.service';

export const emailRoutes = Router();

emailRoutes.get('/healthcheck', (request: Request, response: Response) => {
    return response.status(200).json({
        message: "API healthy!"
    })
} )

emailRoutes.get('/fetch',async (request: Request, response: Response) => {
    const folder = request.query.folder;
    if(folder){
        let emails = await getEmails(folder);
        response.status(200).json(emails);  
    }else {
        response.status(400).send(`Invalid request.`)
    }
} )

emailRoutes.get('/fetch-all',async (request: Request, response: Response) => {
    let emails = await getAllEmails();
    response.status(200).json(emails);  
} )

emailRoutes.post('/send', async (request: Request, response: Response) => { 
    const messageData : MessageDTO = request.body;
    if(messageData){
        const status = await sendEmail(messageData);
        return response.status(201).json({
            status: status
        })
    }else {
        response.status(400).send(`Invalid request.`)
    }
} )

emailRoutes.post('/webhooks/inbound', async (request: Request, response: Response) => {
    const incomingEmail = request.body;
    if(incomingEmail){
        await saveInboundEmail(incomingEmail);
        return response.status(201).send(`Inbound email recived with messagedID: ${incomingEmail.MessageID}`)
    }else {
        response.status(400).send(`Invalid request.`)
    }
} )