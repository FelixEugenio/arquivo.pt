import { Request,Response } from "express";
import { ListUserResponseService } from "../../services/Response/ListUserResponseService";

class ListUserResponseController{
  async handle(req:Request,res:Response){
    const listUserResponseService = new ListUserResponseService();

    const listResponses = await listUserResponseService.execute();

    return res.json(listResponses)

  }
}

export {ListUserResponseController}
