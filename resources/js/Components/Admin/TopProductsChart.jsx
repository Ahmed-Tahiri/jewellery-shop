import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const rawSales = {
    necklaces: 120,
    rings: 90,
    earrings: 60,
};


const total = Object.values(rawSales).reduce((a, b) => a + b, 0);

const data = [
    { name: "Necklaces", value: rawSales.necklaces },
    { name: "Rings", value: rawSales.rings },
    { name: "Earrings", value: rawSales.earrings },
];

const COLORS = ["#FFB347", "#6A5ACD", "#FF69B4"];

export let TopProductsChart = () => {
    return (
        <div className="flex items-center justify-center">
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => {
                        const percent = ((value / total) * 100).toFixed(0);
                        return `${name} ${percent}%`;
                    }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}`, "Sales"]} />
                <Legend />
            </PieChart>
        </div>
    );
}
