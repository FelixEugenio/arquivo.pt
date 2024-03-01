import { prismaClient } from "../../config/prisma";
import { ResponseModel } from "../../models/Response/Response";

export class SaveUserResponseService {
	async execute({ link, title, trecho }: ResponseModel) {
		const saveResponse = await prismaClient.result.create({
			data: {
				link: link,
				trecho: trecho,
				title: title
			}
		})
		return saveResponse;
	}
}