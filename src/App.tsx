import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/lib/theme-context';
import { AdminLayout } from '@/components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            } />
            <Route path="/users" element={
              <AdminLayout>
                <Users />
              </AdminLayout>
            } />
            <Route path="/reports" element={
              <AdminLayout>
                <Reports />
              </AdminLayout>
            } />
            <Route path="/documents" element={
              <AdminLayout>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dokumenty</h1>
                    <p className="text-muted-foreground">
                      Zarządzanie dokumentami i plikami systemu
                    </p>
                  </div>
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Sekcja w przygotowaniu...</p>
                  </div>
                </div>
              </AdminLayout>
            } />
            <Route path="/settings" element={
              <AdminLayout>
                <Settings />
              </AdminLayout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;