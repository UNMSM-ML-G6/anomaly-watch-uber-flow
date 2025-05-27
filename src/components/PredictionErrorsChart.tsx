
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PredictionErrorsChart = () => {
  const data = [
    { time: "12:00 AM", day: "Tue Sep 7", score: 6.2 },
    { time: "6:00 AM", day: "Tue Sep 7", score: 4.1 },
    { time: "12:00 PM", day: "Tue Sep 7", score: 2.8 },
    { time: "6:00 PM", day: "Tue Sep 7", score: 2.1 },
    { time: "12:00 AM", day: "Wed Sep 8", score: 1.8 },
    { time: "6:00 AM", day: "Wed Sep 8", score: 2.3 },
    { time: "12:00 PM", day: "Wed Sep 8", score: 1.2 },
    { time: "6:00 PM", day: "Wed Sep 8", score: 0.8 },
  ];

  return (
    <Card className="bg-white border border-gray-100 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-gray-900">Recent Large Prediction Errors</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis 
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 9, fill: '#6B7280' }}
                angle={-45}
                textAnchor="end"
                height={40}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: '#6B7280' }}
                domain={[0, 7]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
                formatter={(value, name, props) => [
                  `${value} Z-Score`,
                  props.payload.day
                ]}
              />
              <Bar 
                dataKey="score" 
                fill="#EF4444"
                radius={[2, 2, 0, 0]}
                maxBarSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionErrorsChart;
