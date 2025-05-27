
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnomalyScoreGauge = () => {
  const score = 0.022;
  const percentage = score * 100;
  
  // Calculate the angle for the needle (180 degrees total, from left to right)
  const angle = (score / 0.1) * 180 - 90; // Assuming max score is 0.1, -90 to start from left
  
  // Generate tick marks
  const ticks = [];
  for (let i = 0; i <= 10; i++) {
    const tickAngle = (i / 10) * 180 - 90;
    const tickValue = (i / 100).toFixed(2);
    ticks.push(
      <g key={i}>
        <line
          x1={50 + 35 * Math.cos((tickAngle * Math.PI) / 180)}
          y1={50 + 35 * Math.sin((tickAngle * Math.PI) / 180)}
          x2={50 + 40 * Math.cos((tickAngle * Math.PI) / 180)}
          y2={50 + 40 * Math.sin((tickAngle * Math.PI) / 180)}
          stroke="#9CA3AF"
          strokeWidth="1"
        />
        <text
          x={50 + 45 * Math.cos((tickAngle * Math.PI) / 180)}
          y={50 + 45 * Math.sin((tickAngle * Math.PI) / 180)}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs fill-gray-500"
          fontSize="8"
        >
          {tickValue}
        </text>
      </g>
    );
  }

  return (
    <Card className="bg-white border border-gray-100 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-gray-900">Current Anomaly Score</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-24">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              {/* Background arc */}
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Green to red gradient arc */}
              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
              
              <path
                d="M 10 50 A 40 40 0 0 1 90 50"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Tick marks and labels */}
              {ticks}
              
              {/* Needle */}
              <line
                x1="50"
                y1="50"
                x2={50 + 32 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 32 * Math.sin((angle * Math.PI) / 180)}
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Center dot */}
              <circle cx="50" cy="50" r="3" fill="#374151" />
            </svg>
          </div>
          
          {/* Score display */}
          <div className="text-center mt-2">
            <div className="text-2xl font-bold text-gray-900">{score.toFixed(3)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnomalyScoreGauge;
