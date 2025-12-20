import { useLocation, Outlet } from 'react-router-dom'
import { Suspense, useState } from 'react'
import { LoadingSpinner } from './ui/loading-spinner'
import { Sidebar, SidebarContent } from './sidebar'
import { Sheet, SheetContent } from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { VerificationBanner } from './verification-banner'

const sidebarItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Projects', href: '/projects' },
  { label: 'Admin Panel', href: '/admin' },
]

export default function MainLayout() {
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const activeItem = sidebarItems.find((item) => location.pathname.startsWith(item.href))
  const pageTitle = activeItem?.label || 'Overview'

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />

      <div className="flex-1 flex flex-col md:ml-64 transition-all duration-200">
        <VerificationBanner />

        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetContent side="left" className="p-0 w-64 border-r-0" showCloseButton={false}>
            <SidebarContent onLinkClick={() => setIsMobileOpen(false)} />
          </SheetContent>
        </Sheet>

        <main className="flex-1 flex flex-col">
          <div className="md:hidden sticky top-0 z-10 flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <Button variant="ghost" size="icon-sm" onClick={() => setIsMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <span className="font-semibold text-lg">{pageTitle}</span>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-4 md:p-8 max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 hidden md:block">{pageTitle}</h2>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center p-12">
                    <LoadingSpinner size="md" />
                  </div>
                }
              >
                <Outlet />
              </Suspense>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
