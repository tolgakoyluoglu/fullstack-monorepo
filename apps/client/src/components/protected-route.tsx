import { useSession } from '@/lib/auth-client'
import { Navigate, Outlet } from 'react-router-dom'
import { LoadingSpinner } from './ui/loading-spinner'

export default function ProtectedRoute() {
  const { data: session, isPending } = useSession()

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="md" />
      </div>
    )
  }
  if (!session) {
    return <Navigate to="/sign-in" replace />
  }

  return <Outlet />
}
