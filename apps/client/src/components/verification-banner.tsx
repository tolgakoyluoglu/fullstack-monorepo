import { useState } from 'react'
import { AlertCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSession, sendVerificationEmail } from '@/lib/auth-client'
import { toast } from 'react-hot-toast'

export function VerificationBanner() {
  const { data: session } = useSession()
  const [sending, setSending] = useState(false)

  if (!session?.user || session.user.emailVerified) {
    return null
  }

  const handleResend = async () => {
    setSending(true)
    const promise = sendVerificationEmail({
      email: session.user.email,
      callbackURL: window.location.origin + '/dashboard',
    })

    await toast.promise(promise, {
      loading: 'Sending verification email...',
      success: 'Verification email sent!',
      error: 'Failed to send verification email',
    })

    setSending(false)
  }

  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm font-medium">
            Your email address is not verified. Please check your inbox.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleResend}
          disabled={sending}
          className="border-yellow-200 hover:bg-yellow-100 hover:text-yellow-900 dark:border-yellow-800 dark:hover:bg-yellow-900 dark:hover:text-yellow-100"
        >
          {sending ? (
            'Sending...'
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Resend Email
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
