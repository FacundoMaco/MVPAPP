import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, X, Bell, ArrowLeft, MapPin, Clock } from "lucide-react";

interface Alert {
  id: string;
  title: string;
  message: string;
  location: string;
  timestamp: Date;
}

export function AuthorityDashboard() {
  const navigate = useNavigate();
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Ubicaciones reales en Lima, Perú
  const locations = [
    "Av. Javier Prado Este 4200 - San Borja",
    "Calle Los Poetas 290 - Surco",
    "Av. Arequipa 2300 - Lince",
    "Jr. de la Unión 500 - Cercado de Lima",
    "Av. Larco 1200 - Miraflores",
    "Av. Brasil 2000 - Magdalena",
    "Av. Universitaria 1800 - San Miguel",
    "Jr. Ucayali 300 - Cercado de Lima",
    "Av. Angamos Este 1800 - Surquillo",
    "Av. La Marina 2500 - San Miguel",
    "Av. Benavides 2000 - Surco",
    "Av. Garcilaso de la Vega 1200 - Cercado de Lima",
    "Av. República de Panamá 3500 - San Isidro",
    "Av. Salaverry 2000 - Jesús María",
    "Av. Alfonso Ugarte 1000 - Cercado de Lima",
    "Av. Petit Thouars 2000 - San Isidro",
    "Av. El Sol 500 - La Molina",
    "Av. Circunvalación 1500 - San Borja",
    "Av. Túpac Amaru 2000 - Comas",
    "Av. Próceres de la Independencia 1500 - San Juan de Lurigancho",
  ];

  // Mensajes variados para las alertas
  const alertMessages = [
    "Actividad sospechosa detectada en el área restringida",
    "Persona no autorizada intentando acceder a zona privada",
    "Movimiento inusual detectado por cámaras de seguridad",
    "Alerta de seguridad activada por sensor de movimiento",
    "Vehículo sospechoso estacionado en zona prohibida",
    "Ruido anormal detectado en el perímetro",
    "Intento de acceso no autorizado bloqueado",
    "Actividad fuera de horario detectada",
    "Alerta de seguridad por comportamiento sospechoso",
    "Sensor de intrusión activado en el área",
  ];

  // Títulos variados para las alertas
  const alertTitles = [
    "Alerta de Seguridad",
    "Intrusión Detectada",
    "Actividad Sospechosa",
    "Alerta de Perímetro",
    "Acceso No Autorizado",
    "Movimiento Detectado",
    "Alerta de Seguridad Ciudadana",
    "Incidente de Seguridad",
  ];

  const handleSimulateAlert = () => {
    // Seleccionar aleatoriamente ubicación, mensaje y título
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomMessage = alertMessages[Math.floor(Math.random() * alertMessages.length)];
    const randomTitle = alertTitles[Math.floor(Math.random() * alertTitles.length)];

    const newAlert: Alert = {
      id: Date.now().toString(),
      title: randomTitle,
      message: randomMessage,
      location: randomLocation,
      timestamp: new Date(),
    };

    setAlerts((prev) => [newAlert, ...prev]);
  };

  const handleCloseAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const activeAlertsCount = alerts.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between animate-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="hover:bg-primary/10 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dashboard de Autoridades
              </h1>
              <p className="text-muted-foreground mt-1">
                Gestión de alertas de seguridad ciudadana
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 animate-in slide-in-from-left-4 duration-500 delay-100">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Alertas Activas
              </CardTitle>
              <div className="p-2 rounded-full bg-primary/10">
                <Bell className="h-5 w-5 text-primary animate-pulse" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary transition-all duration-300">
                {activeAlertsCount}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Alertas en tiempo real
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 animate-in slide-in-from-left-4 duration-500 delay-200">
          <Button 
            onClick={handleSimulateAlert} 
            className="w-full md:w-auto shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <AlertTriangle className="mr-2 h-4 w-4 animate-pulse" />
            Simular Alerta
          </Button>
        </div>

        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500 delay-300">
          <h2 className="text-2xl font-semibold">Alertas Recientes</h2>
          {alerts.length === 0 ? (
            <Card className="border-2 border-dashed hover:border-primary/50 transition-colors duration-300">
              <CardContent className="py-12 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg">
                  No hay alertas activas
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Haz clic en "Simular Alerta" para crear una
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <Card
                  key={alert.id}
                  className="border-l-4 border-l-destructive shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-right duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-lg font-bold">{alert.title}</CardTitle>
                          <Badge variant="destructive" className="animate-pulse">Activa</Badge>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {alert.message}
                        </CardDescription>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 border-t">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span><strong>Ubicación:</strong> {alert.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            <span><strong>Hora:</strong> {formatTime(alert.timestamp)}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleCloseAlert(alert.id)}
                        className="ml-4 hover:bg-destructive/10 hover:text-destructive transition-all duration-200 shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

