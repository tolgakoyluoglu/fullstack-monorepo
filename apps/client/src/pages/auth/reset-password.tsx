import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { typeboxResolver } from '@hookform/resolvers/typebox'
import { Type } from '@sinclair/typebox'
import { resetPassword } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const ResetPasswordSchema = Type.Object({
  password: Type.String({ minLength: 8 }),
  confirmPassword: Type.String({ minLength: 8 }),
})

type ResetPasswordType = typeof ResetPasswordSchema.static

export default function ResetPassword() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordType>({
    resolver: typeboxResolver(ResetPasswordSchema),
  })

  const onSubmit = async (data: ResetPasswordType) => {
    setErrorMessage(null)

    if (data.password !== data.confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }

    if (!token) {
      setErrorMessage('Invalid or missing reset token')
      return
    }

    setLoading(true)
    const { error } = await resetPassword({
      newPassword: data.password,
      token,
    })

    if (error) {
      setLoading(false)
      setErrorMessage(error.message || 'Failed to reset password')
      return
    }

    toast.success('Password reset successfully. Please sign in.')
    navigate('/sign-in')
  }

  if (!token) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Invalid Link</CardTitle>
            <CardDescription>The password reset link is invalid or expired.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
          <CardDescription>Enter your new password below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500 text-center font-medium">{errorMessage}</p>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
