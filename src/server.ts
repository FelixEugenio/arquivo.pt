import express,{Request,Response,NextFunction} from 'express'
import { CelebrateError } from 'celebrate'
import cors from 'cors'
import { router } from './routes/routes';

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof CelebrateError){
        return res.status(400).json({
            message:err.details.get('body')
        })
    }

    return res.status(500).json({
        status:'Error',
        message: `Internal Server Error:${err.message}`
    })
})

app.listen(5000,()=>{
    console.log("server is running")
})