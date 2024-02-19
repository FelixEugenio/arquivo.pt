import { Request,Response } from "express";
import { ListUserResponseService } from "../../services/Response/ListUserResponseService";

class ListUserResponseController{
  async handle(req:Request,res:Response){

    const user_id = req.params.user_id as string;
    const listUserResponseService = new ListUserResponseService();

    const listResponses = await listUserResponseService.execute(user_id);

    return res.json(listResponses)

  }
}

export {ListUserResponseController}
