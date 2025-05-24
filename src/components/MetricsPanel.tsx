
import { TrendingUp, TrendingDown, AlertTriangle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MetricsPanel = () => {
  const metrics = [
    {
      title: "Anomalías Detectadas",
      value: "147",
      change: "+12%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Tiempo de Respuesta Promedio",
      value: "2.3s",
      change: "-8%",
      trend: "down",
      icon: Activity,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Viajes Anómalos",
      value: "1,247",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Precisión del Modelo",
      value: "94.7%",
      change: "+2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                {metric.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                <IconComponent className={`h-4 w-4 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="flex items-center text-sm">
                <TrendIcon className={`h-3 w-3 mr-1 ${
                  metric.trend === "up" ? "text-green-400" : "text-red-400"
                }`} />
                <span className={`${
                  metric.trend === "up" ? "text-green-400" : "text-red-400"
                }`}>
                  {metric.change}
                </span>
                <span className="text-slate-400 ml-1">desde ayer</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsPanel;
