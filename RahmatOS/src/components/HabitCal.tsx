import CalHeatmap from 'cal-heatmap';
// import Tooltip from 'cal-heatmap/plugins/Tooltip';
import 'cal-heatmap/cal-heatmap.css';

export default function HabitCal() {

    const cal = new CalHeatmap();
    cal.paint({ theme: 'dark' });
  

  return <div id="cal-heatmap"></div>;
}


