import { prismaClient } from "../../config/prisma";

export class ListUserResponseService {
	async execute() {
		const listUserResponse = await prismaClient.result.findMany()
		return listUserResponse;
	}
}