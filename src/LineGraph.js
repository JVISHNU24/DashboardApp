import React,{useEffect,useRef,useState} from "react";
import Chart from "chart.js/auto";
    const LineGraph=({isOpen})=>{
  const lineChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const [lineGraphWidth, setLineGraphWidth] = useState("w-full");
  useEffect(() => {
    let lineChart;
    let doughnutChart;
    if (isOpen) {
      setLineGraphWidth("w-4/5 ml-64");
    } else {
      setLineGraphWidth("w-full");
    }
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
    <div className={`flex sm:flex-col md:flex-row xxs:flex-col justify-end mt-6 sm:mt-8 ${lineGraphWidth}`}>
      <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-lg h-full">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">
            Line Graph
          </h2>
          <canvas className="w-full h-64 md:h-80 lg:h-96" ref={lineChartRef} />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-lg h-full">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">
            Doughnut Graph
          </h2>
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
