
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, TrendingUp } from "lucide-react";

interface HeatMapProps {
  region: string;
}

const HeatMap = ({ region }: HeatMapProps) => {
  const zones = [
    { name: "Centro", anomalies: 89, intensity: "high", x: 45, y: 30 },
    { name: "Norte", anomalies: 34, intensity: "medium", x: 50, y: 15 },
    { name: "Sur", anomalies: 67, intensity: "high", x: 55, y: 70 },
    { name: "Este", anomalies: 23, intensity: "low", x: 75, y: 45 },
    { name: "Oeste", anomalies: 45, intensity: "medium", x: 20, y: 50 },
    { name: "Aeropuerto", anomalies: 156, intensity: "critical", x: 80, y: 20 },
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "critical": return "bg-red-500";
      case "high": return "bg-red-400";
      case "medium": return "bg-yellow-400";
      case "low": return "bg-green-400";
      default: return "bg-blue-400";
    }
  };

  const getIntensitySize = (intensity: string) => {
    switch (intensity) {
      case "critical": return "w-6 h-6";
      case "high": return "w-5 h-5";
      case "medium": return "w-4 h-4";
      case "low": return "w-3 h-3";
      default: return "w-3 h-3";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-400" />
          Mapa de Calor - Anomalías por Zona
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Mapa base simulado */}
          <div className="w-full h-64 bg-slate-700/30 rounded-lg border border-slate-600/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-800/40"></div>
            
            {/* Puntos de anomalías */}
            {zones.map((zone, index) => (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
              >
                <div className={`${getIntensityColor(zone.intensity)} ${getIntensitySize(zone.intensity)} rounded-full opacity-80 animate-pulse`}></div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                  <div className="font-medium">{zone.name}</div>
                  <div className="text-slate-300">{zone.anomalies} anomalías</div>
                </div>
              </div>
            ))}
          </div>

          {/* Leyenda */}
          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-slate-300">Crítico</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="text-slate-300">Alto</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <span className="text-slate-300">Medio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-slate-300">Bajo</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeatMap;
