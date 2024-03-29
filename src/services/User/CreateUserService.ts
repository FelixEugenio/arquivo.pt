import { prismaClient } from "../../config/prisma";
import { UserModel } from "../../models/User/User";
import { hash } from "bcryptjs";

class CreateUserService {
    async execute({email,name,password}:UserModel){
       const checkIfUserAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email:email
        }
       })

       if(checkIfUserAlreadyExists){
        throw new Error("Usuario ja Existe")
       }

       const PasswordHash = await hash(password,8);

       const CreateUser = await prismaClient.user.create({
        data:{
            name,
            email,
            password:PasswordHash
        },

        select:{
            id:true,
            name:true,
            email:true
        }
       })

       return CreateUser;
    }
}

export {CreateUserService}