import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  Building2,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Użytkownicy',
    href: '/users',
    icon: Users,
  },
  {
    name: 'Raporty',
    href: '/reports',
    icon: BarChart3,
  },
  {
    name: 'Dokumenty',
    href: '/documents',
    icon: FileText,
  },
  {
    name: 'Ustawienia',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col bg-background border-r">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
            AdminPanel
          </span>
        </Link>
      </div>
      
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link key={item.name} to={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    isActive && "bg-purple-100 text-purple-900 dark:bg-purple-900/20 dark:text-purple-300"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
    </div>
  );
}