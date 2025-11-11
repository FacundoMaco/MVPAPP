import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Send, AlertTriangle, ArrowLeft, MapPin, Clock, FileText } from "lucide-react";
import { toast } from "sonner";

interface Report {
  id: string;
  type: string;
  description: string;
  location: string;
  timestamp: Date;
}

export function CivilDashboard() {
  const navigate = useNavigate();
  const [reports, setReports] = useState<Report[]>([]);
  const [reportType, setReportType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSOS = () => {
    const newReport: Report = {
      id: Date.now().toString(),
      type: "SOS - Emergencia",
      description: "Botón de pánico activado",
      location: "Ubicación actual",
      timestamp: new Date(),
    };
    setReports((prev) => [newReport, ...prev]);
    toast.success("¡Alerta SOS enviada! Las autoridades han sido notificadas.", {
      duration: 4000,
    });
  };

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportType || !description || !location) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    const newReport: Report = {
      id: Date.now().toString(),
      type: reportType,
      description,
      location,
      timestamp: new Date(),
    };

    setReports((prev) => [newReport, ...prev]);
    setReportType("");
    setDescription("");
    setLocation("");
    toast.success("Reporte enviado correctamente", {
      duration: 3000,
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4 animate-in slide-in-from-top-4 duration-500">
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
              Dashboard Civil
            </h1>
            <p className="text-muted-foreground mt-1">
              Reporta incidentes y solicita ayuda
            </p>
          </div>
        </div>

        <Card className="border-destructive border-2 shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-left-4 duration-500 delay-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <div className="p-2 rounded-full bg-destructive/10">
                <AlertCircle className="h-5 w-5 animate-pulse" />
              </div>
              Botón de Pánico SOS
            </CardTitle>
            <CardDescription className="text-base">
              Activa esta alerta en caso de emergencia inmediata
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={handleSOS}
              variant="destructive"
              size="lg"
              className="w-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <AlertTriangle className="mr-2 h-5 w-5 animate-pulse" />
              ACTIVAR ALERTA SOS
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-all duration-300 animate-in slide-in-from-left-4 duration-500 delay-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Reportar Incidente
            </CardTitle>
            <CardDescription>
              Completa el formulario para reportar un incidente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReport} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Tipo de Incidente
                </label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Robo">Robo</option>
                  <option value="Asalto">Asalto</option>
                  <option value="Vandalismo">Vandalismo</option>
                  <option value="Actividad Sospechosa">Actividad Sospechosa</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Descripción
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                  placeholder="Describe el incidente..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Ubicación
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Ej: Calle Los Poetas 290 - Surco"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar Reporte
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500 delay-300">
          <h2 className="text-2xl font-semibold">Reportes Recientes</h2>
          {reports.length === 0 ? (
            <Card className="border-2 border-dashed hover:border-primary/50 transition-colors duration-300">
              <CardContent className="py-12 text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground text-lg">
                  No hay reportes enviados aún
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Completa el formulario para crear tu primer reporte
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-3">
              {reports.map((report, index) => (
                <Card 
                  key={report.id}
                  className="shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] animate-in fade-in slide-in-from-right duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-bold flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      {report.type}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-2">
                      {report.description}
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 mt-3 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span><strong>Ubicación:</strong> {report.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span><strong>Hora:</strong> {formatTime(report.timestamp)}</span>
                      </div>
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

