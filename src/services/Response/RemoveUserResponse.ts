import { prismaClient } from "../../config/prisma";

class RemoveUserResponseService{
   async execute(id:string){

    const removeiTem = await prismaClient.result.delete({
        where:{
            id:id
        }
    })

    return removeiTem;

   }
}

export {RemoveUserResponseService}