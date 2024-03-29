import { Request,Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";
import {z} from 'zod'

class UpdateUserController{
  async handle(req:Request,res:Response){

    const { id } = req.params;

    const UserPropsSheema = z.object({
        name:z.string(),
        email:z.string().email(),
        password:z.string()
    })

    const {email,name,password} = UserPropsSheema.parse(req.body);

    const updateUserService = new UpdateUserService()

    const updateUser = await updateUserService.execute({
        id,
        name,
        email,
        password
    })

    return res.json(updateUser);

  }
}

export {UpdateUserController}