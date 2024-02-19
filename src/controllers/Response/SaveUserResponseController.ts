import { Request,Response } from "express";
import {z} from 'zod'
import { SaveUserResponseService } from "../../services/Response/SaveUserResponseService";

class SaveUserResponseController {
    async hadle(req:Request,res:Response){

            const UserResponseSheema = z.object({
                title:z.string(),
                link:z.string(),
                trecho:z.string()
            })

            const {link,title,trecho} = UserResponseSheema.parse(req.body)

            const saveUserResponseService = new SaveUserResponseService();

            const saveResponse = await saveUserResponseService.execute({
                link,
                title,
                trecho
            })

            return res.json(saveResponse)

    }

}

export {SaveUserResponseController}