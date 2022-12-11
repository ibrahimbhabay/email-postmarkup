import express, {Application} from 'express'
import { routes } from './routes';

const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use('/api', routes)

app.listen(PORT, (): void => {
    console.log(`Application is runnig on port: ${PORT}`)
})