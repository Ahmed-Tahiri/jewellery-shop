import { AdminSectionSubHeading } from "../../../../Shared/Admin/AdminSectionHeading";
import { Link, usePage } from "@inertiajs/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Pie } from "react-chartjs-2";
import { CategoryData } from "../../../../Components/Admin/CategoryData";
import { format } from "date-fns";

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

export default function Show() {
    const { category, percentage } = usePage().props;
    const createdAtFormatted = category.created_at ? format(new Date(category.created_at), "EEEE, do MMMM yyyy p") : "N/A";
    const updatedAtFormatted = category.updated_at ? format(new Date(category.updated_at), "EEEE, do MMMM yyyy p") : "N/A";
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

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"Category Information"} />
                    <div className="flex flex-row items-center justify-end">
                        <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route("admin.categories")} >Back</Link>
                    </div>
                </div>

                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <div className="w-7/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <div className="w-full flex flex-col items-start gap-y-4">
                            <h2 className="font-poppins w-full text-xl font-medium text-semi-black pb-3 border-b-[1px] border-gray-300">Overview</h2>
                            <div className="w-full flex flex-row gap-x-5 justify-between items-center border-1 border-gray-300 rounded p-2 ">
                                <div className="flex justify-start items-start w-3/10 flex-col">
                                    <img className="w-full object-cover shadow-sm rounded-sm" src={`/storage/${category.image}`} alt="category img" />
                                </div>
                                <div className="flex flex-col w-7/10 border-s-[1px] border-gray-300 py-2 px-3 gap-y-2">
                                    <CategoryData heading={'Name:'} data={category.name} />
                                    <CategoryData heading={'Description:'} data={category.description} />
                                    <CategoryData heading={'Slug:'} data={category.slug} />
                                    <CategoryData heading={'Sub categories:'} data={category.sub_categories} />
                                    <CategoryData heading={'Created at:'} data={createdAtFormatted} />
                                    <CategoryData heading={'Last update at:'} data={updatedAtFormatted} />
                                </div>
                            </div>
                            <div className="w-full flex gap-x-2 justify-end">
                                <Link href={route('admin.categories.edit', category.id)} className="min-w-25  font-poppins p-2 bg-zinc text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-dark transition-colors ease-linear duration-200">Edit</Link>
                                <Link method="delete" as={'button'} href={route('admin.categories.destroy', category.id)} className="min-w-25  font-poppins p-2 bg-mustard text-white hover:bg-mustard-dark text-center shadow-sm cursor-pointer transition-colors ease-linear duration-200">Delete</Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-3/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <div className="w-full h-80">
                            <Pie data={data} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
