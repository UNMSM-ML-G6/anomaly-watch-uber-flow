
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const LiveAnomalyChart = () => {
  const data = [
    { time: "2 Aug", count: 6.5, anomalies: 0.5 },
    { time: "9 Aug", count: 5.2, anomalies: 1.2 },
    { time: "16 Aug", count: 4.8, anomalies: 0.8 },
    { time: "23 Aug", count: 3.2, anomalies: 0.4 },
    { time: "30 Aug", count: 2.8, anomalies: 0.3 },
    { time: "6 Sep", count: 4.5, anomalies: 2.1 },
  ];

  return (
    <Card className="bg-white border border-gray-100 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-gray-900">Live Anomaly Detection</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs bg-orange-50 text-orange-700 border-orange-200">
              20 outliers
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280' }}
                domain={[-2, 8]}
                tickFormatter={(value) => `${value}M`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
              />
              <Area
                type="monotone"
                dataKey="count"
                stroke="#3B82F6"
                strokeWidth={2}
                fill="url(#areaGradient)"
              />
              <Line 
                type="monotone" 
                dataKey="anomalies" 
                stroke="#F59E0B" 
                strokeWidth={2}
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveAnomalyChart;
