import { prismaClient } from "../../config/prisma";

export class ListUserDetailsService {
	async execute(id: string) {
		const user = await prismaClient.user.findFirst({
			where: { id },
			select: {
				id: true,
				email: true,
				name: true
			}
		})

		return user;
	}
}
