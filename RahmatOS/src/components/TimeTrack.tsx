import CalHeatmap from 'cal-heatmap';
import Tooltip from 'cal-heatmap/plugins/Tooltip';
import 'cal-heatmap/cal-heatmap.css';

//how to check if astro app is running in a browser
//https://www.raulmelo.me/en/til/how-to-check-browser-astro-vite

const isBrowser = import.meta.env.SSR === false


const data = [
  { column1: '2024-04-15', column2: 3 },
{ column1: '2024-04-16', column2: 3 },
{ column1: '2024-04-17', column2: 3 },
{ column1: '2024-04-18', column2: 3 },
];

export default function Cal() {

  

  if (isBrowser) {
    console.log(data)
    const cal = new CalHeatmap();
    cal.paint( 
      {
        // data: {
        //   source: data,
        //   // type: 'json',
        //   // x: 'time',
        //   y: (datum) => +datum['column2']
        //   // groupY: 'max',
        // },
        data: { source: data,
          x: 'column1',
          y: 'column2' },
        // date: { start: new Date('2024-04-15') },
        range: 1,
        scale: {
          color: {
            type: 'threshold',
            range: ['#14432a', '#166b34', '#37a446', '#4dd05a'],
            domain: [10, 20, 30],
          },
        },

        domain: {
          type: 'month',
          gutter: 4,
          label: { text: 'MMM', textAlign: 'start', position: 'top' },
        },
        subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
        itemSelector: '#ex-ghDay',
      
      
      },
    
   
      [
        [
          Tooltip]]
  );
  }

  return (
  <div className="my-8">
   <div id="ex-ghDay"></div>
  
  </div>
  );
}