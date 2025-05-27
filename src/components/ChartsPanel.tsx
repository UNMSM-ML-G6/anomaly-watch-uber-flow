
import LiveAnomalyChart from "./LiveAnomalyChart";
import PredictionErrorsChart from "./PredictionErrorsChart";
import AnomalyScoreGauge from "./AnomalyScoreGauge";

const ChartsPanel = () => {
  return (
    <div className="space-y-4">
      <AnomalyScoreGauge />
      <LiveAnomalyChart />
      <PredictionErrorsChart />
    </div>
  );
};

export default ChartsPanel;
