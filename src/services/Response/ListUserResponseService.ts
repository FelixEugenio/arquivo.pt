import { prismaClient } from "../../config/prisma";

class ListUserResponseService{
   async execute(user_id:string){

    const listUserResponse = await prismaClient.result.findMany({
        where:{
            user_id:user_id
        }
    })

    return listUserResponse;

   }
}

export {ListUserResponseService}