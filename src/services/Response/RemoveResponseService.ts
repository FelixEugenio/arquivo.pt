import { prismaClient } from "../../config/prisma";

interface RemoveResponseProps{
    response_id:string
}

class RemoveResponseService{
  async execute({response_id}:RemoveResponseProps){

    

  }
}

export {RemoveResponseProps}