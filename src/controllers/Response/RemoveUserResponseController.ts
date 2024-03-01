import { Request, Response } from "express";
import { RemoveUserResponseService } from "../../services/Response/RemoveUserResponse";

export class RemoveUserResponseController {
	async handle(req: Request, res: Response) {
		const removeUserResponseService = new RemoveUserResponseService()
		const removeItem = await removeUserResponseService.execute(req.params.id);
		return res.json(removeItem)
	}
}