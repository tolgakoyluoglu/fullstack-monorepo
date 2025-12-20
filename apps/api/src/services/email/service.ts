import { emailTransport } from '@api/services/email/client'
import { env } from '@api/config/env'
import { escapeHtml } from '@api/lib/html-escape'

const getBaseStyles = () => `
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
  .button { display: inline-block; padding: 12px 24px; background-color: #000; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 500; }
  h1 { font-size: 24px; font-weight: 600; margin-bottom: 24px; }
  p { margin-bottom: 16px; font-size: 16px; }
  .footer { margin-top: 32px; font-size: 14px; color: #666; }
`

export async function sendVerificationEmail(to: string, verificationUrl: string) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${getBaseStyles()}</style>
      </head>
      <body>
        <div class="container">
          <h1>Verify your email</h1>
          <p>Click the button below to verify your email address.</p>
          <a href="${verificationUrl}" class="button">Verify Email</a>
          <p class="footer">If you didn't request this, you can safely ignore this email.</p>
        </div>
      </body>
    </html>
  `

  await emailTransport.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Verify Your Email Address',
    html,
  })
}

export async function sendPasswordResetEmail(to: string, resetUrl: string) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${getBaseStyles()}</style>
      </head>
      <body>
        <div class="container">
          <h1>Reset your password</h1>
          <p>Click the button below to reset your password.</p>
          <a href="${resetUrl}" class="button">Reset Password</a>
          <p class="footer">If you didn't request this, you can safely ignore this email.</p>
        </div>
      </body>
    </html>
  `

  await emailTransport.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Reset Your Password',
    html,
  })
}

export async function sendWelcomeEmail(to: string, userName: string) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${getBaseStyles()}</style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to our platform!</h1>
          <p>Hi ${escapeHtml(userName)},</p>
          <p>We're excited to have you on board. Get started by exploring your dashboard.</p>
          <a href="${env.CLIENT_URL}/dashboard" class="button">Go to Dashboard</a>
        </div>
      </body>
    </html>
  `

  await emailTransport.sendMail({
    from: env.SMTP_FROM,
    to,
    subject: 'Welcome to Our Platform!',
    html,
  })
}
