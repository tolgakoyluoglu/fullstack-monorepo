import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { verifyEmail } from '@/lib/auth-client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

export default function VerifyEmail() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token')
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>(
    token ? 'verifying' : 'error'
  )

  useEffect(() => {
    if (!token) {
      return
    }

    const verify = async () => {
      const { error } = await verifyEmail({
        query: {
          token,
        },
      })

      if (error) {
        setStatus('error')
        return
      }

      setStatus('success')
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000)
    }

    verify()
  }, [token, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Email Verification</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4 py-8">
          {status === 'verifying' && (
            <>
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">Verifying your email...</p>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle className="h-12 w-12 text-primary" />
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Verified!</h3>
                <p className="text-muted-foreground">
                  Your email has been successfully verified. Redirecting you to dashboard...
                </p>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <XCircle className="h-12 w-12 text-red-500" />
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">Verification Failed</h3>
                <p className="text-muted-foreground">The link might be invalid or expired.</p>
                <Button onClick={() => navigate('/dashboard')} className="mt-4">
                  Go to Dashboard
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
