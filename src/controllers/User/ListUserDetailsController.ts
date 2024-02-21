import { Request,Response } from "express";
import { ListUserDeatilsService } from "../../services/User/ListUserDetailsService";

class ListUserDetailsController{
  async handle(req:Request,res:Response){

    const user_id = req.user_id;

    const listUserDeatilsService = new ListUserDeatilsService();

    const user = await listUserDeatilsService.execute(user_id);

    return res.json(user)

  }
}

export {ListUserDetailsController}