import { Request,Response } from "express";
import { SaveResponseService } from "../../services/Response/SaveResponseService";
import {z} from 'zod'

class SaveResponseController{
  async handle(req:Request,res:Response){

    try{

     const CreateResponseSheema = z.object({
        title:z.string(),
        link:z.string(),
        trecho:z.string(),
        user_id:z.string()
     })

     const {title,link,trecho,user_id} = CreateResponseSheema.parse(req.body);

     const saveResponseService = new SaveResponseService();

     const saveResponse = await saveResponseService.execute({
        link,
        trecho,
        title,
        user_id
     })

     return res.json(saveResponse)

    }catch(e){
        return res.json({error:e})
    }

  }
}

export {SaveResponseController}