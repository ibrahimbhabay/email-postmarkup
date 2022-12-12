import * as dotenv from 'dotenv'

export const setupDotenv = () => {
    if(process.env.NODE_ENV !== "production")
    {
        dotenv.config();
    }  
}
