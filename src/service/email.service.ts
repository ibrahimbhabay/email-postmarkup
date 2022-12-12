import {ServerClient} from 'postmark'
import { MessageDTO } from '../dto/message.dto';
import { add, browseMessagesFromFolder } from '../repository/message.repository'

export const sendEmail = async (messageData: MessageDTO): Promise<string> => {

    const postmarkClient= new ServerClient(process.env.POSTMARK_SERVER_TOKEN);
    let response = await postmarkClient.sendEmail({
        "From": messageData.From,
        "To": messageData.To,
        "Subject": messageData.Subject,
        "TextBody": messageData.TextBody,
        "MessageStream": process.env.OUTBOUND_MESSAGE_STREAM
      });

      if(response.ErrorCode === 0 && response.Message === 'OK') {
        console.log(`Message sent succesfully. Message ID: ${response.MessageID}`)
        messageData.Folder = messageData.Folder ? messageData.Folder : 'sent';
        messageData.MessageID = response.MessageID;
        messageData.MessageStream = process.env.OUTBOUND_MESSAGE_STREAM;
        await add(messageData)
        return `Message sent successfully.`
      } else {
        return `Message not sent.`
      }

}

export const saveInboundEmail = async (data: any): Promise<string> => {

  const { From, To, Subject, TextBody, MessageStream} = data;
  let inboundMessage: MessageDTO = {};
  inboundMessage.From = data.From;
  inboundMessage.To = data.To;
  inboundMessage.Subject = data.Subject;
  inboundMessage.TextBody = data.TextBody;
  inboundMessage.Folder = 'inbox';
  inboundMessage.MessageStream = data.MessageStream;
  await add(inboundMessage);
  return `Inbound message recieved`

}

export const getEmails = async(folder) : Promise<MessageDTO[]> => {
  let emails = await browseMessagesFromFolder(folder);
  return emails;
}

