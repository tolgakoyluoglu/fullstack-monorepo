import { useSession } from '@/lib/auth-client'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  const { data: session, isPending } = useSession()

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  if (!session) {
    return <Navigate to="/sign-in" replace />
  }

  return <Outlet />
}
