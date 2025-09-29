import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, TrendingUp, Users, DollarSign, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Reports() {
  const monthlyData = [
    { month: 'Sty', users: 1200, revenue: 24000, conversion: 3.2 },
    { month: 'Lut', users: 1350, revenue: 27000, conversion: 3.5 },
    { month: 'Mar', users: 1180, revenue: 23600, conversion: 2.9 },
    { month: 'Kwi', users: 1420, revenue: 28400, conversion: 3.8 },
    { month: 'Maj', users: 1650, revenue: 33000, conversion: 4.1 },
    { month: 'Cze', users: 1580, revenue: 31600, conversion: 3.9 },
  ];

  const topPages = [
    { page: '/dashboard', views: 15420, bounce: 23 },
    { page: '/products', views: 12350, bounce: 31 },
    { page: '/about', views: 8920, bounce: 18 },
    { page: '/contact', views: 6780, bounce: 42 },
    { page: '/blog', views: 5640, bounce: 28 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Raporty i analityka</h1>
          <p className="text-muted-foreground">
            Szczegółowe analizy wydajności i statystyki systemu
          </p>
        </div>
        <Button variant="outline" className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-900/20">
          <Download className="mr-2 h-4 w-4" />
          Eksportuj raport
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Przegląd</TabsTrigger>
          <TabsTrigger value="users">Użytkownicy</TabsTrigger>
          <TabsTrigger value="revenue">Przychody</TabsTrigger>
          <TabsTrigger value="performance">Wydajność</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Całkowity ruch</CardTitle>
                <BarChart3 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <p className="text-xs text-muted-foreground">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    +20.1%
                  </Badge>
                  {' '}od ostatniego miesiąca
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nowi użytkownicy</CardTitle>
                <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    +180.1%
                  </Badge>
                  {' '}od ostatniego miesiąca
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Przychód</CardTitle>
                <DollarSign className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€12,234</div>
                <p className="text-xs text-muted-foreground">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    +19%
                  </Badge>
                  {' '}od ostatniego miesiąca
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Konwersja</CardTitle>
                <TrendingUp className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.24%</div>
                <p className="text-xs text-muted-foreground">
                  <Badge variant="destructive">-2.1%</Badge>
                  {' '}od ostatniego miesiąca
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Miesięczne trendy</CardTitle>
                <CardDescription>
                  Porównanie kluczowych wskaźników w ostatnich 6 miesiącach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((data, index) => (
                    <div key={data.month} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium">{data.month}</div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Użytkownicy: {data.users}</span>
                          <span>Przychód: €{data.revenue}</span>
                        </div>
                        <Progress value={(data.users / 2000) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Najpopularniejsze strony</CardTitle>
                <CardDescription>
                  Ranking najczęściej odwiedzanych stron
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center space-x-4">
                      <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-xs font-medium text-purple-700 dark:text-purple-300">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{page.page}</div>
                        <div className="text-xs text-muted-foreground">
                          {page.views.toLocaleString()} wyświetleń • {page.bounce}% bounce rate
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analiza użytkowników</CardTitle>
              <CardDescription>Szczegółowe statystyki dotyczące użytkowników</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Aktywni użytkownicy (30 dni)</div>
                    <div className="text-2xl font-bold">8,547</div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Nowi użytkownicy</div>
                    <div className="text-2xl font-bold">1,234</div>
                    <Progress value={62} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Powracający użytkownicy</div>
                    <div className="text-2xl font-bold">7,313</div>
                    <Progress value={91} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analiza przychodów</CardTitle>
              <CardDescription>Szczegółowe dane finansowe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Miesięczny przychód</div>
                    <div className="text-3xl font-bold">€31,600</div>
                    <div className="text-sm text-muted-foreground">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        +12.5%
                      </Badge>
                      {' '}wzrost miesiąc do miesiąca
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Średnia wartość zamówienia</div>
                    <div className="text-3xl font-bold">€89.50</div>
                    <div className="text-sm text-muted-foreground">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        +3.2%
                      </Badge>
                      {' '}wzrost miesiąc do miesiąca
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Wydajność systemu</CardTitle>
              <CardDescription>Metryki techniczne i wydajnościowe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Czas ładowania strony</span>
                        <span>1.2s</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Dostępność serwera</span>
                        <span>99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Wykorzystanie CPU</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Wykorzystanie pamięci</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}