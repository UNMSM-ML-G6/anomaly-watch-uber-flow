
import { AlertTriangle, Clock, MoreVertical, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const alerts = [
  {
    id: 1,
    title: "Pico de cancelaciones",
    description: "85% más cancelaciones en Zona Centro",
    time: "hace 5 min",
    severity: "critical",
    status: "active",
  },
  {
    id: 2,
    title: "Tiempo de espera elevado",
    description: "Promedio 12 min vs 4 min normal",
    time: "hace 12 min",
    severity: "high",
    status: "investigating",
  },
  {
    id: 3,
    title: "Ruta inusual detectada",
    description: "Conductor tomó ruta 40% más larga",
    time: "hace 18 min",
    severity: "medium",
    status: "acknowledged",
  },
  {
    id: 4,
    title: "Fraude potencial",
    description: "Múltiples viajes cortos mismo usuario",
    time: "hace 25 min",
    severity: "critical",
    status: "active",
  },
];

const AlertsList = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-500/20 text-red-300 border-red-500/30";
      case "high": return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case "medium": return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-96">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <CardTitle className="text-lg font-semibold text-white">Alertas Activas</CardTitle>
        </div>
        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
          {alerts.filter(a => a.status === 'active').length} activas
        </Badge>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/50 hover:bg-slate-700/50 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-slate-400 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time}
                      </span>
                    </div>
                    <h4 className="font-medium text-white text-sm mb-1">
                      {alert.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {alert.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 ml-3">
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white hover:bg-slate-600/50">
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400 hover:text-white hover:bg-slate-600/50">
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AlertsList;
