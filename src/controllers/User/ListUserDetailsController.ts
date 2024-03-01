import { Request, Response } from "express";

import { ListUserDetailsService } from "../../services/User/ListUserDetailsService";

export class ListUserDetailsController {
	async handle(req: Request, res: Response) {
		const listUserDetailsService = new ListUserDetailsService();
		const user = await listUserDetailsService.execute(req.user_id);
		return res.json(user)
	}
}