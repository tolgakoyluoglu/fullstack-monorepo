import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSession, signOut } from '@/lib/auth-client'
import { cn } from '@/lib/utils'
import { LayoutDashboard, Folder, LogOut, User, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { type UserRole, hasRole } from '@monorepo/shared'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Folder, label: 'Projects', href: '/projects' },
  { icon: ShieldCheck, label: 'Admin Panel', href: '/admin', requiredRole: 'admin' as UserRole },
]

interface SidebarContentProps {
  className?: string
  onLinkClick?: () => void
}

export function SidebarContent({ className, onLinkClick }: SidebarContentProps) {
  const { data: session } = useSession()
  const location = useLocation()
  const navigate = useNavigate()

  const filteredSidebarItems = sidebarItems.filter((item) => {
    if (!item.requiredRole) return true
    const userRole = session?.user?.role as UserRole | undefined
    if (!userRole) return false
    return hasRole(userRole, item.requiredRole)
  })

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate('/sign-in')
          onLinkClick?.()
        },
      },
    })
  }

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-950 flex flex-col h-full border-r border-gray-200 dark:border-gray-800',
        className
      )}
    >
      <div className="p-6 border-b border-gray-100 dark:border-gray-800/50">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 font-bold text-xl tracking-tight"
          onClick={onLinkClick}
        >
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            A
          </span>
          App
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {filteredSidebarItems.map((item) => {
          const isActive = location.pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onLinkClick}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-900/50'
              )}
            >
              <item.icon className={cn('w-4 h-4', isActive ? 'text-primary' : 'text-gray-400')} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-100 dark:border-gray-800/50">
        <div className="flex items-center gap-3 px-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500">
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name}
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <User className="w-4 h-4" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate text-gray-900 dark:text-gray-100">
              {session?.user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate dark:text-gray-500">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground hover:text-foreground border-gray-200 dark:border-gray-800"
          onClick={handleSignOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Log out
        </Button>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="w-64 hidden md:flex flex-col fixed h-full z-10">
      <SidebarContent className="border-none" />
    </aside>
  )
}
