import { readFile } from 'fs/promises'
import { join } from 'path'
import { emailTransport } from './client'
import { env } from '../env'

async function loadTemplate(templateName: string, variables: Record<string, string>) {
  const templatePath = join(__dirname, 'templates', `${templateName}.html`)
  let html = await readFile(templatePath, 'utf-8')

  for (const [key, value] of Object.entries(variables)) {
    html = html.replaceAll(`{{${key}}}`, value)
  }

  return html
}

export async function sendVerificationEmail(to: string, verificationUrl: string) {
  const html = await loadTemplate('verify-email', { verificationUrl })

  await emailTransport.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Verify Your Email Address',
    html,
  })
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  const html = await loadTemplate('reset-password', { resetUrl })

  await emailTransport.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Reset Your Password',
    html,
  })
}

export async function sendWelcomeEmail(to: string, userName: string) {
  const html = await loadTemplate('welcome', { userName })

  await emailTransport.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Welcome to Our Platform!',
    html,
  })
}
