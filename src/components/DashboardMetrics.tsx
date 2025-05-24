
import { TrendingUp, TrendingDown, AlertTriangle, Activity, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Anomalías Activas",
    value: "23",
    change: "+12%",
    trend: "up",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Tiempo Respuesta",
    value: "1.8s",
    change: "-15%",
    trend: "down",
    icon: Clock,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Viajes Monitoreados",
    value: "15,247",
    change: "+8%",
    trend: "up",
    icon: Activity,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Zonas Afectadas",
    value: "7",
    change: "+2",
    trend: "up",
    icon: MapPin,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        
        return (
          <Card key={index} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {metric.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {metric.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendIcon className={`h-3 w-3 mr-1 ${
                      metric.trend === "up" ? "text-green-500" : "text-red-500"
                    }`} />
                    <span className={`text-xs font-medium ${
                      metric.trend === "up" ? "text-green-600" : "text-red-600"
                    }`}>
                      {metric.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">vs ayer</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                  <IconComponent className={`h-6 w-6 ${metric.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardMetrics;
