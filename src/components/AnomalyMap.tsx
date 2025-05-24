
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Maximize2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AnomalyMapProps {
  region: string;
}

const anomalyData = [
  { id: 1, lat: 40.7128, lng: -74.0060, severity: "high", count: 12, area: "Manhattan" },
  { id: 2, lat: 40.6892, lng: -74.0445, severity: "medium", count: 7, area: "Brooklyn" },
  { id: 3, lat: 40.7580, lng: -73.9855, severity: "low", count: 3, area: "Queens" },
  { id: 4, lat: 40.8176, lng: -73.9482, severity: "critical", count: 18, area: "Bronx" },
];

const AnomalyMap = ({ region }: AnomalyMapProps) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-96">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-lg font-semibold text-white">Mapa de Anomalías</CardTitle>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Mapa simulado */}
        <div className="relative w-full h-64 bg-slate-700/30 rounded-lg overflow-hidden border border-slate-600/50">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-600/20 to-slate-800/40"></div>
          
          {/* Puntos de anomalías */}
          {anomalyData.map((point) => (
            <div
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ 
                left: `${30 + (point.id * 15)}%`, 
                top: `${25 + (point.id * 10)}%` 
              }}
            >
              <div className={`w-4 h-4 ${getSeverityColor(point.severity)} rounded-full shadow-lg animate-pulse relative`}>
                <div className={`absolute inset-0 ${getSeverityColor(point.severity)} rounded-full animate-ping opacity-75`}></div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <div className="bg-slate-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap border border-slate-700">
                  <div className="font-medium">{point.area}</div>
                  <div>{point.count} anomalías</div>
                  <Badge variant="outline" className="mt-1 border-white/20 text-white">
                    {point.severity}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Leyenda */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-slate-300">Crítico</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-slate-300">Alto</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-slate-300">Medio</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-300">Bajo</span>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
            Actualizado: hace 2 min
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyMap;
