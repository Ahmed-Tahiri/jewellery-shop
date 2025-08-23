import { Link } from "@inertiajs/react";
import { format } from "date-fns";
import { FaEye, FaUserEdit } from "react-icons/fa";
import randomColor from "randomcolor";

export let CustomerCard = ({ customer, index }) => {
    const formattedDate = customer.datejoined ? format(new Date(customer.datejoined), "EEEE, do MMMM yyyy") : "N/A";
    const bgColor = randomColor({ luminosity: "light", });
    return (
        <tr className={`${index % 2 === 0 ? "bg-powder-gray" : "bg-white"} hover:bg-gray-50 transition shadow`}>
            <td className="px-3 py-2 w-16">
                {customer.avatar ? <img src={customer.avatar} alt={customer.firstname} className="w-10 h-10 rounded-full object-cover"
                /> : <div className="p-2  h-10 w-10 flex items-center justify-center rounded-full shadow" style={{ backgroundColor: bgColor }}><span className="font-poppins text-semi-black text-2xl font-medium">{customer.firstname[0]}</span></div>}
            </td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.firstname}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.lastname}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.email}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{formattedDate}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.status}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base  flex items-center justify-center gap-3 mt-2">
                <Link href={`/admin/customers/${customer.id}`} className="text-blue-600 hover:text-blue-800">
                    <FaEye className="text-2xl" />
                </Link>
                <Link href={`/admin/customers/${customer.id}/edit`} className="text-green-600 hover:text-green-800">
                    <FaUserEdit className="text-2xl" />
                </Link>
            </td>
        </tr>
    );
}