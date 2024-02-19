import { prismaClient } from "../../config/prisma";
import { ResponseModel } from "../../models/Response/Response";

class SaveResponseService{
   async execute({link,title,trecho,user_id}:ResponseModel){

    const SaveResponse = await prismaClient.result.create({
        data:{
            link:link,
            title:title,
            user_id:user_id,
            trecho:trecho
        }
    })

    return SaveResponse;

   }
}

export {SaveResponseService}