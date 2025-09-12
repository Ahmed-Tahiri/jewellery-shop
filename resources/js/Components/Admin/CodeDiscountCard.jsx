import { Link, router } from "@inertiajs/react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import Switch from "react-switch";
import { format } from "date-fns";
import { route } from "ziggy-js";



export let CodeDiscountCard = ({ discount, index }) => {
    const [checked, setChecked] = useState(discount.is_active);
    const formattedStartDate = discount.start_date ? format(new Date(discount.start_date), "EEEE, do MMMM yyyy") : "N/A";
    const formattedEndDate = discount.end_date ? format(new Date(discount.end_date), "EEEE, do MMMM yyyy") : "N/A";

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
        router.patch(route('admin.discounts.status.update', discount.id), { is_active: nextChecked ? 1 : 0 })
    };
    return <tr className={`${index % 2 === 0 ? "bg-powder-gray" : "bg-white"} hover:bg-gray-50 transition shadow`}>

        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{discount.name}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{discount.code}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{discount.discount_percent}%</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{discount.limitation ?? 'Unlimited'}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{formattedStartDate}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{formattedEndDate}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300 text-center min-w-24"><Switch onChange={handleChange} checked={checked} height={20} width={40} /></td>
        <td className="px-3 py-2 font-poppins font-normal text-base  flex items-center justify-center gap-3 mt-2">
            <Link href={route('admin.discounts.show', discount.id)} className="text-blue-600 hover:text-blue-800">
                <FaEye className="text-2xl" />
            </Link>
            <Link href={route(`admin.discounts.edit`, discount.id)} className="text-green-600 hover:text-green-800">
                <FaEdit className="text-2xl" />
            </Link>
        </td>
    </tr>
}