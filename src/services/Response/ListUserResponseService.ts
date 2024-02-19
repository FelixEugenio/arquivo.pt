import { prismaClient } from "../../config/prisma";

class ListUserResponseService{
   async execute(){

    const listUserResponse = await prismaClient.result.findMany()

    return listUserResponse;

   }
}

export {ListUserResponseService}