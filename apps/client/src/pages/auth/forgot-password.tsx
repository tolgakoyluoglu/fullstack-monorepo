import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { typeboxResolver } from '@hookform/resolvers/typebox'
import { Type } from '@sinclair/typebox'
import { requestPasswordReset } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const ForgotPasswordSchema = Type.Object({
  email: Type.String({ format: 'email' }),
})

type ForgotPasswordType = typeof ForgotPasswordSchema.static

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordType>({
    resolver: typeboxResolver(ForgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordType) => {
    setLoading(true)
    setErrorMessage(null)

    const result = await requestPasswordReset({
      email: data.email,
      redirectTo: '/reset-password',
    })

    if (result?.error) {
      setLoading(false)
      setErrorMessage('Failed to send reset email')
      return
    }

    setLoading(false)
    toast.success('If an account exists, a reset email has been sent.')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
          <CardDescription>Enter your email to receive a password reset link.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500 text-center font-medium">{errorMessage}</p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/sign-in" className="text-sm text-primary hover:underline">
            Back to Sign In
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
