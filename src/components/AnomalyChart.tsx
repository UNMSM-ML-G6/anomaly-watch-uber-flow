
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AnomalyChartProps {
  timeRange: string;
}

const AnomalyChart = ({ timeRange }: AnomalyChartProps) => {
  const data = [
    { time: "00:00", normal: 120, anomalies: 5, threshold: 150 },
    { time: "04:00", normal: 80, anomalies: 8, threshold: 150 },
    { time: "08:00", normal: 220, anomalies: 12, threshold: 150 },
    { time: "12:00", normal: 180, anomalies: 7, threshold: 150 },
    { time: "16:00", normal: 280, anomalies: 15, threshold: 150 },
    { time: "20:00", normal: 250, anomalies: 18, threshold: 150 },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white">Detección de Anomalías en Tiempo Real</CardTitle>
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
              Normal
            </Badge>
            <Badge variant="secondary" className="bg-red-500/20 text-red-300">
              Anomalías
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#F3F4F6"
                }}
              />
              <ReferenceLine y={150} stroke="#EF4444" strokeDasharray="5 5" />
              <Line 
                type="monotone" 
                dataKey="normal" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="anomalies" 
                stroke="#EF4444" 
                strokeWidth={2}
                dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyChart;
