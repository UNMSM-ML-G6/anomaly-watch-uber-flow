
import LiveAnomalyChart from "./LiveAnomalyChart";
import PredictionErrorsChart from "./PredictionErrorsChart";

const ChartsPanel = () => {
  return (
    <div className="space-y-4">
      <LiveAnomalyChart />
      <PredictionErrorsChart />
    </div>
  );
};

export default ChartsPanel;
