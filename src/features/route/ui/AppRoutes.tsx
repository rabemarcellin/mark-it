import { BrowserRouter, Route, Routes } from 'react-router'
import { Toaster } from 'react-hot-toast'
import LandingPage from '@/pages/LandingPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    <Toaster />
    </BrowserRouter>
  )
}

export default AppRoutes