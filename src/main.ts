import express, {Application} from 'express'
import {routes} from './routes';
import { setupDotenv } from './config/dotenv.setup';
import mongoose from 'mongoose';
import cors from 'cors';

const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use('/api', routes)
setupDotenv();
const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, () => {
            console.log(`Database connection successfully established`)
        } ) 
    }
    catch(error){
        console.log(error)
    }
}

connectDatabase();

app.listen(PORT, (): void => {
    console.log(`Application is runnig on port: ${PORT}`)
})
