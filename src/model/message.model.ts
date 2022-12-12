import { prop, getModelForClass } from '@typegoose/typegoose';

export class Message {

    @prop({required: true, unique: true})
    _id: string;

    @prop({required: false})
    From: string;

    @prop({required: false})
    To: string;

    @prop({required: false})
    Subject: string;

    @prop({required: false})
    TextBody: string;

    @prop({required: true})
    Folder: string;

    @prop()
    MessageID: string;

    @prop()
    MessageStream: string;

    @prop()
    CreatedAt: number;

}

export const MessageModel = getModelForClass(Message)