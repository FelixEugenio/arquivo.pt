import { Request, Response } from "express";
import { RemoveUserResponseService } from "../../services/Response/RemoveUserResponse";

class RemoveUserResponseController{
  async handle(req:Request,res:Response){

    const { id } = req.params;

    const removeUserResponseService = new RemoveUserResponseService()

    const removeItem = await removeUserResponseService.execute(id);

    return res.json(removeItem)

  }
}

export {RemoveUserResponseController}