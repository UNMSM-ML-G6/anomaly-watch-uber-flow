
import { AlertTriangle, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: "crítica",
      title: "Pico de cancelaciones",
      description: "85% más cancelaciones en Zona Centro",
      time: "hace 5 min",
      location: "Ciudad de México, Centro",
      severity: "high"
    },
    {
      id: 2,
      type: "media",
      title: "Tiempo de espera elevado",
      description: "Promedio 12 min vs 4 min normal",
      time: "hace 12 min",
      location: "São Paulo, Vila Madalena",
      severity: "medium"
    },
    {
      id: 3,
      type: "baja",
      title: "Ruta inusual detectada",
      description: "Conductor tomó ruta 40% más larga",
      time: "hace 18 min",
      location: "Bogotá, Chapinero",
      severity: "low"
    },
    {
      id: 4,
      type: "crítica",
      title: "Fraude potencial",
      description: "Múltiples viajes cortos mismo usuario",
      time: "hace 25 min",
      location: "Lima, Miraflores",
      severity: "high"
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "medium": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "low": return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          Alertas Recientes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:bg-slate-700/50 transition-colors duration-200">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getSeverityColor(alert.severity)}>
                    {alert.type}
                  </Badge>
                  <div className="flex items-center text-slate-400 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {alert.time}
                  </div>
                </div>
                <h4 className="text-white font-medium mb-1">{alert.title}</h4>
                <p className="text-slate-300 text-sm mb-2">{alert.description}</p>
                <div className="flex items-center text-slate-400 text-xs">
                  <MapPin className="h-3 w-3 mr-1" />
                  {alert.location}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
