import { TransportOptions } from "nodemailer";

interface MyTransportOptions extends TransportOptions {
	host: string;
	port: string;
	auth: {
		user: string;
		pass: string;
	};
}

const mailConfig: MyTransportOptions = {
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASS
	}
}

export { mailConfig }