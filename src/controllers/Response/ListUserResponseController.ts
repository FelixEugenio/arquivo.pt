import { Request, Response } from "express";
import { ListUserResponseService } from "../../services/Response/ListUserResponseService";

export class ListUserResponseController {
	async handle(_: Request, res: Response) {
		const listUserResponseService = new ListUserResponseService();
		const listResponses = await listUserResponseService.execute();
		return res.json(listResponses)
	}
}

