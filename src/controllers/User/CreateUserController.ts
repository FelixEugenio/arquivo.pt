import { Request,Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import {z} from 'zod'
import Mail from "../../lib/Mail";

class CreateUserController{
    async handle(req:Request,res:Response){
       try{

        const CreateUserScheema = z.object({
            name:z.string(),
            email:z.string().email(),
            password:z.string()
        })

        const {name,email,password} = CreateUserScheema.parse(req.body);

        const createUserService = new CreateUserService();

        const createUser = await createUserService.execute({
            email,
            name,
            password
        })

        Mail.sendMail({
            from:'Felix mavila <queue@ArquivoGPT@gmail.com>',
            to:`${name} <${email}>`,
            subject:'Cadastro de Usuario',
            html:`Ola ${name}, bem vindo ao sistema de arquivogpt`
        })

        return res.json(createUser)

       }catch(e){
         return res.json({error:e})
       }
    }

}

export {CreateUserController}