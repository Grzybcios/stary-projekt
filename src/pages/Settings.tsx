import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Save, Shield, Bell, Database, Globe, Users } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ustawienia systemu</h1>
        <p className="text-muted-foreground">
          Zarządzaj konfiguracją systemu i preferencjami
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">Ogólne</TabsTrigger>
          <TabsTrigger value="security">Bezpieczeństwo</TabsTrigger>
          <TabsTrigger value="notifications">Powiadomienia</TabsTrigger>
          <TabsTrigger value="database">Baza danych</TabsTrigger>
          <TabsTrigger value="integrations">Integracje</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>Ustawienia ogólne</span>
              </CardTitle>
              <CardDescription>
                Podstawowa konfiguracja systemu i firmy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nazwa firmy</Label>
                  <Input id="company-name" defaultValue="Moja Firma Sp. z o.o." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email kontaktowy</Label>
                  <Input id="company-email" type="email" defaultValue="kontakt@mojafirma.pl" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company-address">Adres firmy</Label>
                <Textarea 
                  id="company-address" 
                  defaultValue="ul. Przykładowa 123&#10;00-001 Warszawa&#10;Polska"
                  rows={3}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Strefa czasowa</Label>
                  <Select defaultValue="europe/warsaw">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="europe/warsaw">Europa/Warszawa</SelectItem>
                      <SelectItem value="europe/london">Europa/Londyn</SelectItem>
                      <SelectItem value="america/new_york">Ameryka/Nowy Jork</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Język systemu</Label>
                  <Select defaultValue="pl">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pl">Polski</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />
              
              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                  <Save className="mr-2 h-4 w-4" />
                  Zapisz zmiany
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>Bezpieczeństwo</span>
              </CardTitle>
              <CardDescription>
                Zarządzaj ustawieniami bezpieczeństwa i dostępu
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Uwierzytelnianie dwuskładnikowe (2FA)</Label>
                  <p className="text-sm text-muted-foreground">
                    Dodatkowa warstwa bezpieczeństwa dla kont administratorów
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatyczne wylogowanie</Label>
                  <p className="text-sm text-muted-foreground">
                    Wyloguj użytkowników po okresie nieaktywności
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="session-timeout">Czas sesji (minuty)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" className="w-32" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Logowanie prób logowania</Label>
                  <p className="text-sm text-muted-foreground">
                    Zapisuj wszystkie próby logowania do systemu
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label>Dozwolone adresy IP</Label>
                <Textarea 
                  placeholder="192.168.1.0/24&#10;10.0.0.0/8"
                  className="h-20"
                />
                <p className="text-sm text-muted-foreground">
                  Pozostaw puste, aby zezwolić na dostęp z wszystkich adresów IP
                </p>
              </div>

              <Separator />
              
              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                  <Save className="mr-2 h-4 w-4" />
                  Zapisz ustawienia
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>Powiadomienia</span>
              </CardTitle>
              <CardDescription>
                Skonfiguruj sposób otrzymywania powiadomień
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Powiadomienia email</Label>
                    <p className="text-sm text-muted-foreground">
                      Otrzymuj powiadomienia na adres email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Powiadomienia push</Label>
                    <p className="text-sm text-muted-foreground">
                      Powiadomienia w przeglądarce
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Powiadomienia o nowych użytkownikach</Label>
                    <p className="text-sm text-muted-foreground">
                      Informuj o rejestracji nowych kont
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Powiadomienia o błędach systemu</Label>
                    <p className="text-sm text-muted-foreground">
                      Natychmiastowe powiadomienia o problemach
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Cotygodniowe raporty</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatyczne raporty o aktywności systemu
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Separator />
              
              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                  <Save className="mr-2 h-4 w-4" />
                  Zapisz preferencje
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>Baza danych</span>
              </CardTitle>
              <CardDescription>
                Zarządzanie bazą danych i kopiami zapasowymi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Status bazy danych</Label>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      Połączono
                    </Badge>
                    <span className="text-sm text-muted-foreground">Ostatnia aktualizacja: 2 min temu</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Rozmiar bazy danych</Label>
                  <div className="text-lg font-semibold">2.4 GB</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatyczne kopie zapasowe</Label>
                  <p className="text-sm text-muted-foreground">
                    Codzienne kopie zapasowe o 2:00
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-retention">Przechowywanie kopii (dni)</Label>
                <Input id="backup-retention" type="number" defaultValue="30" className="w-32" />
              </div>

              <div className="flex space-x-2">
                <Button variant="outline">Utwórz kopię zapasową</Button>
                <Button variant="outline">Przywróć z kopii</Button>
              </div>

              <Separator />
              
              <div className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800">
                  <Save className="mr-2 h-4 w-4" />
                  Zapisz konfigurację
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span>Integracje</span>
              </CardTitle>
              <CardDescription>
                Zarządzaj integracjami z zewnętrznymi usługami
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">Google Analytics</div>
                    <div className="text-sm text-muted-foreground">Śledzenie ruchu na stronie</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      Połączone
                    </Badge>
                    <Button variant="outline" size="sm">Konfiguruj</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">Slack</div>
                    <div className="text-sm text-muted-foreground">Powiadomienia zespołu</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Niepołączone</Badge>
                    <Button variant="outline" size="sm">Połącz</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">Mailchimp</div>
                    <div className="text-sm text-muted-foreground">Marketing emailowy</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Niepołączone</Badge>
                    <Button variant="outline" size="sm">Połącz</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="space-y-1">
                    <div className="font-medium">Stripe</div>
                    <div className="text-sm text-muted-foreground">Płatności online</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                      Połączone
                    </Badge>
                    <Button variant="outline" size="sm">Konfiguruj</Button>
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