import { Request, Response } from "express";
import { z } from "zod";

import { ArchiveService } from "../services/archiveService";

// TODO: inject service as dependency
export class ArchiveController {
	private readonly service = new ArchiveService();

	async getAll(_: Request, res: Response) {
		const listResponses = await this.service.getAll();
		return res.json(listResponses)
	}

	async removeById(req: Request, res: Response) {
		const removeItem = await this.service.removeById(req.params.id);
		return res.json(removeItem)
	}

	async add(req: Request, res: Response) {
		// TODO: move validation to a concrete DTO object
		// TODO: add validations to each prop
		const UserResponseSchema = z.object({
			title: z.string(),
			link: z.string(),
			trecho: z.string()
		})

		// TODO: handle possible errors detected 
		const { link, title, trecho } = UserResponseSchema.parse(req.body)
		const saveResponse = await this.service.add({ link, title, trecho })
		return res.json(saveResponse)
	}
}

