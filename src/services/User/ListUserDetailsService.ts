import { prismaClient } from "../../config/prisma";

class ListUserDeatilsService{
     async execute(user_id:string){
        const user = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            select:{
                id:true,
                email:true,
                name:true
            }
        })

        return user;
     }
}

export {ListUserDeatilsService}