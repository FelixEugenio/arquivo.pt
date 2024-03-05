import 'dotenv/config';
import { Request,Response } from "express";
import { CreateUserService } from "../../services/User/CreateUserService";
import {z} from 'zod'
import Queue from '../../lib/Queue'
import Mail from "../../lib/Mail";
import {MailerSend,EmailParams,Sender,Recipient} from 'mailersend'






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

        const user = await createUserService.execute({
            email,
            name,
            password
        })

        const mailerSend = new MailerSend({
            apiKey: process.env.API_KEY,
          });

          const sentFrom = new Sender("ArquivoGPT<@ArquivoGPT@gmail.com>", user.name);

          const recipients = [
            new Recipient(user.email, user.name)
          ];

          const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setReplyTo(sentFrom)
          .setSubject("Cadastro de Usuario")
          .setHtml("<strong>Ola Bem Vindo ao ArquivoGPT</strong>")
          .setText("Obrigado Por Fazer Parte desta Familia");

          await mailerSend.email.send(emailParams);

          /*
        await Mail.sendMail({
            from:'ArquivoGPT<@ArquivoGPT@gmail.com>',
            to:`${user.name} <${user.email}>`,
            subject:'Cadastro de Usuario',
            html:`Ola ${name}, bem vindo ao arquivoGPT`
        })

        */

        return res.json(user)

       }catch(e){
         return res.json({error:e})
       }
    }

}

export {CreateUserController}