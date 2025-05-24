
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
      color: "text-orange-400",
      bgColor: "bg-gradient-to-br from-orange-400/20 to-red-400/10",
      borderColor: "border-orange-400/30",
    },
    {
      title: "Tiempo de Respuesta Promedio",
      value: "2.3s",
      change: "-8%",
      trend: "down",
      icon: Activity,
      color: "text-emerald-400",
      bgColor: "bg-gradient-to-br from-emerald-400/20 to-teal-400/10",
      borderColor: "border-emerald-400/30",
    },
    {
      title: "Viajes Anómalos",
      value: "1,247",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      color: "text-amber-400",
      bgColor: "bg-gradient-to-br from-amber-400/20 to-yellow-400/10",
      borderColor: "border-amber-400/30",
    },
    {
      title: "Precisión del Modelo",
      value: "94.7%",
      change: "+2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-sky-400",
      bgColor: "bg-gradient-to-br from-sky-400/20 to-blue-400/10",
      borderColor: "border-sky-400/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={index} className={`relative overflow-hidden backdrop-blur-xl bg-white/5 border ${metric.borderColor} hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
            <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-white/90 tracking-wide">
                {metric.title}
              </CardTitle>
              <div className={`p-3 rounded-xl ${metric.bgColor} backdrop-blur-sm border border-white/10 shadow-lg`}>
                <IconComponent className={`h-5 w-5 ${metric.color}`} />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="text-3xl font-bold text-white mb-2 tracking-tight">
                {metric.value}
              </div>
              <div className="flex items-center text-sm">
                <div className={`flex items-center px-2 py-1 rounded-full ${
                  metric.trend === "up" ? "bg-emerald-500/20" : "bg-red-500/20"
                } backdrop-blur-sm`}>
                  <TrendIcon className={`h-3 w-3 mr-1 ${
                    metric.trend === "up" ? "text-emerald-400" : "text-red-400"
                  }`} />
                  <span className={`${
                    metric.trend === "up" ? "text-emerald-400" : "text-red-400"
                  } font-medium`}>
                    {metric.change}
                  </span>
                </div>
                <span className="text-white/60 ml-2 text-xs">desde ayer</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsPanel;
