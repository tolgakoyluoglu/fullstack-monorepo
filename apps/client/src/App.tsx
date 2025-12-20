import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/protected-route'
import SignIn from './pages/auth/sign-in'
import SignUp from './pages/auth/sign-up'
import ForgotPassword from './pages/auth/forgot-password'
import ResetPassword from './pages/auth/reset-password'
import VerifyEmail from './pages/auth/verify-email'
import Dashboard from './pages/dashboard/dashboard'
import AdminPanel from './pages/admin/admin-panel'
import MainLayout from './components/main-layout'
import { ErrorBoundary } from './components/error-boundary'

export function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Route>
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}

export default App
