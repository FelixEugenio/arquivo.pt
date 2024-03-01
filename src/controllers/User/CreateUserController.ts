import { Request, Response } from "express";
import { z } from 'zod'

import { CreateUserService } from "../../services/User/CreateUserService";
import Mail from "../../lib/Mail";

export class CreateUserController {
	async handle(req: Request, res: Response) {
		try {
			const CreateUserScheema = z.object({
				name: z.string(),
				email: z.string().email(),
				password: z.string()
			})

			const { name, email, password } = CreateUserScheema.parse(req.body);
			const createUserService = new CreateUserService();
			const user = await createUserService.execute({
				email,
				name,
				password
			})

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
}

