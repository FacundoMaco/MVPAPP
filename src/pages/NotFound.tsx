import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-md shadow-xl border-2 animate-in fade-in zoom-in-95 duration-500">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-destructive/10 animate-pulse">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-6xl font-bold bg-gradient-to-r from-destructive to-destructive/70 bg-clip-text text-transparent">
            404
          </CardTitle>
          <CardDescription className="text-lg">
            Página no encontrada
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            La página que buscas no existe o ha sido movida.
          </p>
          <Button asChild className="shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

