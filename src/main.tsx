import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from '@/features/route/ui/AppRoutes.tsx'
import '@/features/translation/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
