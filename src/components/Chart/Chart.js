import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(data => data.value);
    const totalAmt = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map(dataPoint => (
            <ChartBar
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalAmt}
                label={dataPoint.label}
            />
        ))}
    </div>
};

export default Chart;