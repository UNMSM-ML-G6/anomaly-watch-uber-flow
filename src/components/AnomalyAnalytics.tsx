
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp } from "lucide-react";

interface AnomalyAnalyticsProps {
  timeRange: string;
}

const timeSeriesData = [
  { time: "00:00", anomalies: 5, normal: 120 },
  { time: "04:00", anomalies: 8, normal: 80 },
  { time: "08:00", anomalies: 12, normal: 220 },
  { time: "12:00", anomalies: 7, normal: 180 },
  { time: "16:00", anomalies: 15, normal: 280 },
  { time: "20:00", anomalies: 18, normal: 250 },
];

const categoryData = [
  { category: "Cancelaciones", count: 45, percentage: 35 },
  { category: "Tiempo Espera", count: 32, percentage: 25 },
  { category: "Rutas", count: 28, percentage: 22 },
  { category: "Fraude", count: 23, percentage: 18 },
];

const AnomalyAnalytics = ({ timeRange }: AnomalyAnalyticsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Tendencias */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <CardTitle className="text-lg font-semibold text-white">Tendencias</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" fontSize={12} stroke="#9CA3AF" />
                <YAxis fontSize={12} stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#F3F4F6"
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="anomalies" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  dot={{ fill: "#ef4444", strokeWidth: 2, r: 4 }}
                  name="Anomalías"
                />
                <Line 
                  type="monotone" 
                  dataKey="normal" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                  name="Normal"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Categorías */}
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-green-400" />
            <CardTitle className="text-lg font-semibold text-white">Por Categoría</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" fontSize={12} stroke="#9CA3AF" />
                <YAxis dataKey="category" type="category" fontSize={12} width={80} stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#F3F4F6"
                  }}
                />
                <Bar 
                  dataKey="count" 
                  fill="#3b82f6" 
                  radius={[0, 4, 4, 0]}
                  name="Cantidad"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnomalyAnalytics;
