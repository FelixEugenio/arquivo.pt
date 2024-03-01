import { sign } from "jsonwebtoken";
import { compare, hash } from "bcryptjs";

import { prismaClient } from "../config/prisma";

type UserDTO = {
	name: string
	email: string
	password: string
}

type AuthDTO = Pick<UserDTO, 'email' | 'password'>

export class UserService {
	async auth({ email, password }: AuthDTO) {
		const user = await prismaClient.user.findFirst({ where: { email } })
		if (!user) throw new Error("Usuario ou senha incorrecta")

		if (!await compare(password, user.password)) throw new Error("Usuario ou senha incorrecta")

		const token = sign(
			{ name: user.name, email: user.email },
			process.env.SECRET_JWT,
			{ subject: user.id, expiresIn: '1h' }
		)

		return {
			id: user.id,
			name: user.name,
			email: user.email,
			token: token
		}
	}

	async add({ email, name, password }: UserDTO) {
		const userExisting = await prismaClient.user.findFirst({ where: { email } })
		if (userExisting) throw new Error("Usuario ja Existe")

		const PasswordHash = await hash(password, 8);

		return prismaClient.user.create({
			data: { name, email, password: PasswordHash },
			select: { id: true, name: true, email: true }
		})
	}

	getById(id: string) {
		return prismaClient.user.findFirst({
			where: { id },
			select: { id: true, email: true, name: true }
		})
	}

	async updateById(id: string, { email, name, password }: UserDTO) {
		const userExisting = await prismaClient.user.findFirst({ where: { email } })
		if (userExisting) throw new Error("Usuario Nao Existe")

		const passwordHash = await hash(password, 8);
		return prismaClient.user.update({
			where: { id },
			data: { name, email, password: passwordHash }
		})
	}
}