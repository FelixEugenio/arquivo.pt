import { Request,Response } from "express";
import {z} from 'zod'
import { SaveUserResponseService } from "../../services/Response/SaveUserResponseService";

class SaveUserResponseController {
    async hadle(req:Request,res:Response){

        try{
            const user_id = req.params.user_id as string;

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
                trecho,
                user_id
            })

            return res.json(saveResponse)

            

        }catch(e){
  return res.json({error:e})
        }

    }

}

export {SaveUserResponseController}