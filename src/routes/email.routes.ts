import {Router, Request, Response} from 'express';
import { MessageDTO } from 'src/dto/message.dto';
import { sendEmail, saveInboundEmail, getEmails } from '../service/email.service';

export const emailRoutes = Router();

emailRoutes.get('/healthcheck', (request: Request, response: Response) => {
    return response.status(200).json({
        message: "API healthy!"
    })
} )

emailRoutes.get('/fetch',async (request: Request, response: Response) => {
    const folder = request.query.folder;
    let emails = await getEmails(folder);
    response.status(200).send(emails);  
} )

emailRoutes.post('/send', async (request: Request, response: Response) => {
    const messageData : MessageDTO = request.body;
    const status = await sendEmail(messageData);
    return response.json({
        status: status
    })
} )

emailRoutes.post('/webhooks/inbound', async (request: Request, response: Response) => {

    const incomingEmail = request.body;
    await saveInboundEmail(incomingEmail);
    return response.status(201).send(`Inbound email recived with messagedID: ${incomingEmail.MessageID}`)

} )