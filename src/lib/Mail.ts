import nodemailer from 'nodemailer'
import { mailConfig} from '../config/mail/mail'

export default nodemailer.createTransport(mailConfig)