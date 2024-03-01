import { Request, Response } from "express";
import { z } from 'zod'

import { AuthUserService } from "../../services/User/AuthUserService";

export class AuthUserController {
	async handle(req: Request, res: Response) {
		try {
			const UserProps = z.object({
				email: z.string().email(),
				password: z.string()
			})

			const { email, password } = UserProps.parse(req.body);
			const authUseService = new AuthUserService()
			const auth = await authUseService.execute({ email, password })

			return res.json(auth)
		} catch (e) {
			return res.json({ error: e })
		}
	}
}