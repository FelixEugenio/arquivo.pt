import { prismaClient } from "../../config/prisma";

export class RemoveUserResponseService {
	async execute(id: string) {
		const removeiTem = await prismaClient.result.delete({ where: { id } })
		return removeiTem;
	}
}