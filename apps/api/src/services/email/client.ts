import nodemailer from 'nodemailer'
import { env } from '@api/config/env'

export const emailTransport = nodemailer.createTransport({
  host: env.SMTP_HOST === 'localhost' ? '127.0.0.1' : env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: env.SMTP_PORT === 465,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
  tls: { rejectUnauthorized: false },
})
