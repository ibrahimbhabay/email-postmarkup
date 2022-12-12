import { MessageModel } from "../model/message.model";
import {nanoid} from 'nanoid'
import { MessageDTO } from "../dto/message.dto";

export const add = async (message: MessageDTO) => {
   try{
    message._id = nanoid();
    message.CreatedAt = Date.now();
    await MessageModel.create(message)
   }
   catch(error){
    console.log(error);
    console.log(`Failed to save message send to ${message.To} with MessageID: ${message.MessageID}`)
   }
}

export const browseMessagesFromFolder = async (folder: string) => {
    try{
        const messages = await MessageModel.find({
            Folder: folder,
        })
        return messages;
    }
    catch(error){
        console.log(error)
        console.log(`Failed to read messages from folder ${folder}`)
    }

}

export const browseAllMessages= async () => {
    try{
        const messages = await MessageModel.find();
        return messages;
    }
    catch(error){
        console.log(error)
        console.log(`Failed to read messages.`)
    }

}