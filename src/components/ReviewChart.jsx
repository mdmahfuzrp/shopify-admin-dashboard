import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ReviewChart = () => {
  const data = [
    [1486684800000, 30],
    [1486771200000, 40],
    [1486857600000, 35],
    [1486944000000, 50],
    [1487030400000, 45],
    [1487116800000, 55],
    // Add more data points as needed
  ];

  const [state, setState] = useState({
    series: [
      {
        name: 'Positive Review',
        data: data,
      },
      {
        name: 'Negative Review',
        data: data,
      },
      {
        name: 'Average Review',
        data: data,
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min));
          },
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
    </div>
  );
};

export default ReviewChart;
