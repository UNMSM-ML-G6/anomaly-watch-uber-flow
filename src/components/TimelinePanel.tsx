
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

const TimelinePanel = () => {
  const events = [
    {
      id: 1,
      time: "14:32",
      type: "detection",
      title: "Anomalía detectada",
      description: "Patrón inusual en zona aeropuerto",
      status: "active",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      id: 2,
      time: "14:28",
      type: "resolved",
      title: "Incidente resuelto",
      description: "Congestión en centro comercial normalizada",
      status: "resolved",
      icon: CheckCircle,
      color: "text-green-400"
    },
    {
      id: 3,
      time: "14:15",
      type: "alert",
      title: "Alerta generada",
      description: "Tiempo de espera superior a 10 minutos",
      status: "acknowledged",
      icon: Clock,
      color: "text-yellow-400"
    },
    {
      id: 4,
      time: "14:05",
      type: "false_positive",
      title: "Falso positivo",
      description: "Evento de tráfico normal marcado como anomalía",
      status: "dismissed",
      icon: XCircle,
      color: "text-slate-400"
    },
    {
      id: 5,
      time: "13:58",
      type: "detection",
      title: "Múltiples cancelaciones",
      description: "Incremento del 200% en cancelaciones zona sur",
      status: "investigating",
      icon: AlertTriangle,
      color: "text-red-400"
    },
    {
      id: 6,
      time: "13:45",
      type: "resolved",
      title: "Sistema restaurado",
      description: "Conectividad GPS normalizada",
      status: "resolved",
      icon: CheckCircle,
      color: "text-green-400"
    }
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-400" />
          Timeline de Eventos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-64">
          <div className="space-y-4">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              return (
                <div key={event.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`p-2 rounded-full bg-slate-700/50 border border-slate-600/50`}>
                      <IconComponent className={`h-4 w-4 ${event.color}`} />
                    </div>
                    {index < events.length - 1 && (
                      <div className="w-px h-8 bg-slate-600/50 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-white font-medium text-sm">{event.title}</h4>
                      <span className="text-slate-400 text-xs">{event.time}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TimelinePanel;
