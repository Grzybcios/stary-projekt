import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Łączna liczba użytkowników',
      value: '2,847',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Users,
    },
    {
      title: 'Miesięczny przychód',
      value: '€45,231',
      change: '+8.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
    },
    {
      title: 'Współczynnik konwersji',
      value: '3.24%',
      change: '-2.1%',
      changeType: 'negative' as const,
      icon: TrendingUp,
    },
    {
      title: 'Aktywne sesje',
      value: '573',
      change: '+5.4%',
      changeType: 'positive' as const,
      icon: Activity,
    },
  ];

  const recentActivity = [
    { user: 'Jan Kowalski', action: 'Utworzył nowe konto', time: '2 min temu' },
    { user: 'Anna Nowak', action: 'Zaktualizowała profil', time: '5 min temu' },
    { user: 'Piotr Wiśniewski', action: 'Dokonał zakupu', time: '12 min temu' },
    { user: 'Maria Dąbrowska', action: 'Wylogowała się', time: '18 min temu' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Przegląd kluczowych wskaźników i aktywności systemu
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Badge
                  variant={stat.changeType === 'positive' ? 'default' : 'destructive'}
                  className={
                    stat.changeType === 'positive'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : ''
                  }
                >
                  {stat.change}
                </Badge>
                <span>od ostatniego miesiąca</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Przegląd wydajności</CardTitle>
            <CardDescription>
              Miesięczne statystyki systemu
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Wykorzystanie serwera</span>
                <span>72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Wykorzystanie bazy danych</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Przepustowość sieci</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Ostatnia aktywność</CardTitle>
            <CardDescription>
              Najnowsze działania użytkowników
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.user}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.action}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}