
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
      case "critical": return "border-red-200 bg-red-50";
      case "high": return "border-orange-200 bg-orange-50";
      case "medium": return "border-yellow-200 bg-yellow-50";
      default: return "border-gray-200 bg-gray-50";
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-100 text-red-800";
      case "high": return "bg-orange-100 text-orange-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-96">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <CardTitle className="text-lg font-semibold">Alertas Activas</CardTitle>
        </div>
        <Badge variant="destructive" className="text-xs">
          {alerts.filter(a => a.status === 'active').length} activas
        </Badge>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${getSeverityColor(alert.severity)} hover:shadow-sm transition-shadow duration-200`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={getSeverityBadge(alert.severity)}>
                        {alert.severity}
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.time}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm mb-1">
                      {alert.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {alert.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 ml-3">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <MoreVertical className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
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
