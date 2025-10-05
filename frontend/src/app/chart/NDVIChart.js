"use client";
import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TimeScale
);

// === NDVI DATA ===
const ndviData = [
  { date: "2024-01-01", ndvi: 0.328372877845626 },
  { date: "2024-01-17", ndvi: 0.3133371984834311 },
  { date: "2024-02-02", ndvi: 0.3164387600096921 },
  { date: "2024-02-18", ndvi: 0.31208659739892214 },
  { date: "2024-03-05", ndvi: 0.31966332975949524 },
  { date: "2024-03-21", ndvi: 0.33007922383256183 },
  { date: "2024-04-06", ndvi: 0.35177632452720925 },
  { date: "2024-04-22", ndvi: 0.37442884545118443 },
  { date: "2024-05-08", ndvi: 0.3989218979442026 },
  { date: "2024-05-24", ndvi: 0.4314162413513212 },
  { date: "2024-06-09", ndvi: 0.45418827669947287 },
  { date: "2024-06-25", ndvi: 0.47499360239633026 },
  { date: "2024-07-11", ndvi: 0.47279709475136944 },
  { date: "2024-07-27", ndvi: 0.48198399499941424 },
  { date: "2024-08-12", ndvi: 0.4815237719484111 },
  { date: "2024-08-28", ndvi: 0.46748123043769413 },
  { date: "2024-09-13", ndvi: 0.44788238171909645 },
  { date: "2024-09-29", ndvi: 0.4162884776820417 },
  { date: "2024-10-15", ndvi: 0.3905575547898575 },
  { date: "2024-10-31", ndvi: 0.3633956063834815 },
  { date: "2024-11-16", ndvi: 0.3526573643016067 },
  { date: "2024-12-02", ndvi: 0.34495404214567377 },
  { date: "2024-12-18", ndvi: 0.3352773682018393 },
];

// === Crosshair Plugin ===
const crosshairPlugin = {
  id: "crosshair",
  afterDatasetsDraw(chart) {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom, left, right },
    } = chart;
    if (!tooltip?.getActiveElements()?.length) return;
    const { x, y } = tooltip.getActiveElements()[0].element;

    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(0,0,0,0.25)";
    ctx.setLineDash([3, 3]);

    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
    ctx.stroke();

    ctx.restore();
  },
};

ChartJS.register(crosshairPlugin);

// === COMPONENT ===
const NDVIChart = forwardRef((props, ref) => {
  const chartRef = useRef(null);

  // Export PNG function exposed to parent
  useImperativeHandle(ref, () => ({
    exportToPNG() {
      if (!chartRef.current) return;
      const imageUrl = chartRef.current.toBase64Image("image/png", 1.0);
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "NDVI_Chart.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  }));

  const data = {
    labels: ndviData.map((d) => d.date),
    datasets: [
      {
        label: "NDVI",
        data: ndviData.map((d) => d.ndvi.toFixed(3)),
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(34,197,94,0.4)");
          gradient.addColorStop(1, "rgba(34,197,94,0.0)");
          return gradient;
        },
        borderColor: "rgba(22,163,74,1)",
        pointRadius: 3,
        tension: 0.3,
        pointBackgroundColor: "rgba(22,163,74,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "nearest", intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: (context) => {
          const { chart, tooltip } = context;
          let tooltipEl = document.getElementById("custom-tooltip");
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "custom-tooltip";
            tooltipEl.className =
              "absolute bg-white border border-gray-300 rounded-lg shadow-md p-2 text-sm pointer-events-none";
            chart.canvas.parentNode.appendChild(tooltipEl);
          }
          if (tooltip.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }
          if (tooltip.body) {
            const { dataIndex } = tooltip.dataPoints[0];
            const d = ndviData[dataIndex];
            tooltipEl.innerHTML = `
              <div><b>${new Date(d.date).toDateString()}</b></div>
              <div>NDVI: ${d.ndvi.toFixed(3)}</div>
            `;
          }
          const { offsetLeft, offsetTop } = chart.canvas;
          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = offsetLeft + tooltip.caretX + 15 + "px";
          tooltipEl.style.top = offsetTop + tooltip.caretY - 30 + "px";
        },
      },
    },
    scales: {
      x: {
        type: "time",
        time: { unit: "month", displayFormats: { month: "MMM" } },
        grid: { color: "rgba(0,0,0,0.05)" },
        title: { display: true, text: "Date" },
      },
      y: {
        min: 0,
        max: 1,
        ticks: { stepSize: 0.1, callback: (v) => v.toFixed(1) },
        grid: { color: "rgba(0,0,0,0.05)" },
        title: { display: true, text: "NDVI (0–1.0)" },
      },
    },
  };

  return (
    <div className="h-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
});

export default NDVIChart;
