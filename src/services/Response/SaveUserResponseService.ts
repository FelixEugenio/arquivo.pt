import { prismaClient } from "../../config/prisma";
import { ResponseModel } from "../../models/Response/Response";

class SaveUserResponseService{
    async execute({link,title, trecho,user_id}:ResponseModel){
      const saveResponse = await prismaClient.result.create({
        data:{
            link:link,
            trecho:trecho,
            user_id:user_id,
            title:title
        }
      })

      return  saveResponse;

    }

}

export {SaveUserResponseService}