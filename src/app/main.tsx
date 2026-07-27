import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from 'react-dom/client'
import { queryClient } from "@/shared/utils";
import { StrictMode } from 'react'
import App from './App.tsx'
import '@/assets/css/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
  </StrictMode>,
)
