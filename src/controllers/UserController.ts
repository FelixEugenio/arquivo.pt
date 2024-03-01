import { Request, Response } from "express";
import { z } from 'zod'

import { UserService } from "../services/UserService";
import Mail from "../lib/Mail";

// TODO: inject service as dependency
// TODO: move validation to DTO object
export class UserController {
	private readonly service = new UserService()

	async auth(req: Request, res: Response) {
		try {
			// TODO: move validation to a concrete DTO object
			// TODO: add validations to each prop
			// TODO: handle possible errors detected 
			// TODO: centralize error handler to prevent unnecessary try catch
			const UserProps = z.object({
				email: z.string().email(),
				password: z.string()
			})

			const { email, password } = UserProps.parse(req.body);
			const auth = await this.service.auth({ email, password })
			return res.json(auth)
		} catch (error) {
			return res.json({ error })
		}
	}

	async add(req: Request, res: Response) {
		try {
		// TODO: move validation to a concrete DTO object
		// TODO: add validations to each prop
		// TODO: handle possible errors detected 
		// TODO: centralize error handler to prevent unnecessary try catch
			const CreateUserScheema = z.object({
				name: z.string(),
				email: z.string().email(),
				password: z.string()
			})

			const { name, email, password } = CreateUserScheema.parse(req.body);
			const user = await this.service.add({ email, name, password })

			await Mail.sendMail({
				from: 'Felix mavila <queue@ArquivoGPT@gmail.com>',
				to: `${user.name} <${user.email}>`,
				subject: 'Cadastro de Usuario',
				html: `Ola ${name}, bem vindo ao arquivoGPT`
			})
			return res.json(user)
		} catch (error) {
			return res.json({ error })
		}
	}

	async update(req: Request, res: Response) {
		// TODO: move validation to a concrete DTO object
		// TODO: add validations to each prop
		// TODO: handle possible errors detected 
		const UserSchema = z.object({
			name: z.string(),
			email: z.string().email(),
			password: z.string()
		})
		
		const { email, name, password } = UserSchema.parse(req.body);
		const updatedUser = await this.service.updateById(req.params.id, {
			name,
			email,
			password
		})

		return res.json(updatedUser);
	}

	async getById(req: Request, res: Response) {
		const user = await this.service.getById(req.user_id);
		return res.json(user)
	}
}