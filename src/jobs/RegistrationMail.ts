import Mail from "../lib/Mail";

export default {
	key: 'RegistrationMail',

	async handle({ data }) {
		const { user } = data;
		await Mail.sendMail({
			from: 'Felix mavila <queue@ArquivoGPT@gmail.com>',
			to: `${user.name} <${user.email}>`,
			subject: 'Cadastro de Usuario',
			html: `Ola ${user.name}, bem vindo ao sistema de arquivogpt`
		})
	}
}