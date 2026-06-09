import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Index from './pages/Index'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import News from './pages/News'
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
              path: '/sobre',
              element: <About />,
            },
            {
              path: '/login',
              element: <Login />,
            },
            {
              path: '/servicos',
              element: <Services />,
            },
            {
              path: '/noticias',
              element: <News />,
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
  <HelmetProvider>
    <TooltipProvider>
      <RouterProvider router={router} />
    </TooltipProvider>
  </HelmetProvider>
)

export default App
