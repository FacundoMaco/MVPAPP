import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Sparkles } from "lucide-react";

export function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelect = (role: "authority" | "civil") => {
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Card className="shadow-xl border-2 hover:shadow-2xl transition-all duration-300">
          <CardHeader className="text-center space-y-3 pb-6">
            <div className="flex justify-center mb-2">
              <div className="p-3 rounded-full bg-primary/10 animate-pulse">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Sistema de Alertas de Seguridad
            </CardTitle>
            <CardDescription className="text-base">
              Selecciona tu rol para continuar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={() => handleRoleSelect("authority")}
              className="w-full h-auto py-8 flex flex-col items-center gap-3 group hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              size="lg"
            >
              <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                <Shield className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-lg font-semibold">Soy Serenazgo</span>
            </Button>
            <Button
              onClick={() => handleRoleSelect("civil")}
              variant="outline"
              className="w-full h-auto py-8 flex flex-col items-center gap-3 group hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 hover:bg-primary/5"
              size="lg"
            >
              <div className="p-2 rounded-full bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
                <Users className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-lg font-semibold">Soy Civil</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

