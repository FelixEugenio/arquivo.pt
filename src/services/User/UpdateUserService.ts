import { prismaClient } from "../../config/prisma";
import { hash } from "bcryptjs";

interface UserProps{
    id:string
    name:string
    email:string
    password:string
}

class UpdateUserService{
  async execute({email,id,name,password}:UserProps){

    const CheckIfUserAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })

    if(!CheckIfUserAlreadyExists){
       throw new Error("Usuario Nao Existe")
    }

    const passwordHash = await hash(password,8);

    const UpdateUser = await prismaClient.user.update({
        where:{
            id:id
        },
        data:{
            name:name,
            email:email,
            password:passwordHash
        }
    })

    return UpdateUser;

  }
}

export {UpdateUserService}