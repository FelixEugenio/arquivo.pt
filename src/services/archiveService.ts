import { prismaClient } from "../config/prisma";

type ArchiveDTO = {
	link: string,
	title: string,
	trecho: string
}

export class ArchiveService {
	async getAll() {
		const listUserResponse = await prismaClient.result.findMany()
		// TODO: return DTO instead raw result
		return listUserResponse;
	}

	async removeById(id: string) {
		const removeTem = await prismaClient.result.delete({ where: { id } })
		// TODO: handle archive not found
		return removeTem;
	}

	async add(archivePayload: ArchiveDTO) {
		const saveResponse = await prismaClient.result.create({ data: archivePayload })
		// TODO: return DTO instead raw result
		return saveResponse;
	}
}