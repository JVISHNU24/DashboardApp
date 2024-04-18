import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
const LineGraph = () => {
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  useEffect(() => {
    let lineChart;
    let doughnutChart;
    if (lineChartRef && lineChartRef.current) {
      if (lineChart) {
        lineChart.destroy();
      }
      lineChart = new Chart(lineChartRef.current, {
        type: "line",
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "No. Of Products Sold",
              data: [
                100, 200, 150, 250, 300, 350, 200, 400, 450, 500, 550, 600,
              ],
              borderColor: "blue",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    if (doughnutChartRef && doughnutChartRef.current) {
      if (doughnutChart) {
        doughnutChart.destroy();
      }
      doughnutChart = new Chart(doughnutChartRef.current, {
        type: "doughnut",
        data: {
          labels: [
            "Men's Clothing",
            "Women's Clothing",
            "Jewellery",
            "Electronics",
          ],
          datasets: [
            {
              label: "Sold Categories",
              data: [15, 25, 10, 30],
              backgroundColor: ["red", "green", "blue", "yellow"],
            },
          ],
        },
      });
    }
    return () => {
      if (lineChart) {
        lineChart.destroy();
      }
      if (doughnutChart) {
        doughnutChart.destroy();
      }
    };
  }, []);
  return (
    <div className="flex justify-end mr-36 mt-20">
      <div className="w-1/2 sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-2xl h-full">
          <h2 className="text-lg font-semibold mb-2">Line Graph</h2>
          <canvas height={500} width={500} ref={lineChartRef} />
        </div>
      </div>
      <div className="w-1/2 sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-2xl h-full">
          <h2 className="text-lg font-semibold mb-2">Doughnut Graph</h2>
          <canvas ref={doughnutChartRef} />
        </div>
      </div>
    </div>
  );
};
export default LineGraph;
