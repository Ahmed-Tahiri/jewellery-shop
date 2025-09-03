import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);



export let PieChart = ({ percentage, category }) => {
    let totalSales = 100 - percentage;

    const data = {
        labels: ["Other Sales", `Sales from ${category.name}`],
        datasets: [
            {
                label: "Sales Distribution",
                data: [totalSales, percentage],
                backgroundColor: [
                    "#0f343d",
                    "#ffa12d",
                ],
                borderColor: [
                    "#08232a",
                    "#e88f23",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: `Sales Distribution - ${category.name}`,
                font: {
                    size: 18,
                    family: "Poppins, sans-serif",
                    weight: '600'
                },
                padding: {
                    top: 10,
                    bottom: 20,
                },
            },
            legend: {
                position: "bottom",
                labels: {
                    padding: 15
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}% Sales`;
                    },
                },
            },
            datalabels: {
                formatter: (value) => value + "%",
                color: "#fff",
                font: {
                    weight: 500,
                    size: 16,
                    family: "Poppins, sans-serif",
                },
            },
        },
    };
    return <Pie data={data} options={options} />

}