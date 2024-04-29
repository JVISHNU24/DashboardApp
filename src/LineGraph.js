import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { FiBarChart2 } from "react-icons/fi";
const LineGraph = ({ isOpen }) => {
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const [lineGraphClass, setLineGraphClass] = useState("w-full");
  useEffect(() => {
    let lineChart;
    let doughnutChart;
    if (isOpen) {
      setLineGraphClass("w-4/5 ml-64");
    } else {
      setLineGraphClass("w-full");
    }
    if (lineChartRef.current) {
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
    if (doughnutChartRef.current) {
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
              data: [150, 250, 100, 300],
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
  }, [isOpen]);
  return (
    <div
      className={`flex flex-wrap justify-center mt-6 sm:mt-8 ${lineGraphClass}`}
    >
      <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Line Graph
            </h2>
            <FiBarChart2 className="h-6 w-6 text-blue-500" />
          </div>
          <canvas className="w-full h-64 md:h-80 lg:h-96" ref={lineChartRef} />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold mb-2 text-gray-900">
              Doughnut Graph
            </h2>
            <FiBarChart2 className="h-6 w-6 text-blue-500" />
          </div>
          <canvas
            className="w-full h-64 md:h-80 lg:h-96"
            ref={doughnutChartRef}
          />
        </div>
      </div>
    </div>
  );
};
export default LineGraph;
