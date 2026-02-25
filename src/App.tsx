import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import Services from './pages/Services'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

const router = createBrowserRouter(
  [
    {
      element: (
        <>
          <Toaster />
          <Sonner />
          <Outlet />
        </>
      ),
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Index />,
            },
            {
              path: '/servicos',
              element: <Services />,
            },
            {
              path: '/contato',
              element: <Contact />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  },
)

const App = () => (
  <TooltipProvider>
    <RouterProvider router={router} />
  </TooltipProvider>
)

export default App
