import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { typeboxResolver } from '@hookform/resolvers/typebox'
import { SignUpSchema, type SignUpType } from '@monorepo/shared'
import { signUp, signIn, sendVerificationEmail } from '@/lib/auth-client'
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
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function SignUp() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: typeboxResolver(SignUpSchema),
  })

  const onSubmit = async (data: SignUpType) => {
    setLoading(true)
    setErrorMessage(null)

    await signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      {
        onSuccess: async () => {
          await sendVerificationEmail({
            email: data.email,
            callbackURL: '/dashboard',
          })

          const { error: signInError } = await signIn.email({
            email: data.email,
            password: data.password,
          })

          if (signInError) {
            setLoading(false)
            setErrorMessage('Account created, but auto-login failed. Please sign in.')
            navigate('/sign-in')
            return
          }

          toast.success('Account created! Please check your email to verify.')
          navigate('/dashboard')
        },
        onError: (ctx) => {
          setLoading(false)
          const message = ctx.error.message?.toLowerCase() ?? 'unknown error'
          if (message.includes('already') || message.includes('exists')) {
            setErrorMessage('An account with this email already exists')
          } else if (message.includes('invalid email')) {
            setErrorMessage('Please enter a valid email address')
          } else {
            setErrorMessage(ctx.error.message || 'An error occurred')
          }
        },
      }
    )
  }

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setErrorMessage(null)
    const { error } = await signIn.social({
      provider: 'google',
      callbackURL: `${window.location.origin}/dashboard`,
    })

    if (error) {
      setLoading(false)
      setErrorMessage('Failed to sign in with Google')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your email below to create your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              Sign up with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="John Doe" {...register('name')} />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...register('password')} />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              {errorMessage && (
                <p className="text-sm text-red-500 text-center font-medium">{errorMessage}</p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Creating account...' : 'Sign Up'}
              </Button>
            </form>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
