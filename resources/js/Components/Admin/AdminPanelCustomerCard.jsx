import { Link, router } from "@inertiajs/react";
import randomColor from "randomcolor";
import React from "react";
import { FaEye } from "react-icons/fa";
import { RiUserForbidFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { route } from "ziggy-js";

export let AdminPanelCustomerCardComponent = ({ customer, index }) => {

    const formattedDate = customer.datejoined ? format(new Date(customer.datejoined), "EEEE, do MMMM yyyy") : "N/A";
    const bgColor = randomColor({ luminosity: "light", });

    const statusUpdateHandler = () => { router.patch(route('admin.customers.status.update', customer.id), { status: customer.status === 'active' ? 'blocked' : 'active' }); }

    return (
        <tr className={`${index % 2 === 0 ? "bg-powder-gray" : "bg-white"} hover:bg-gray-50 transition shadow`}>
            <td className="px-3 py-2 w-16">
                {customer.avatar ? <img src={`/storage/${customer.avatar}`} alt={customer.firstname} className="w-10 h-10 rounded-full object-cover"
                /> : <div className="p-2  h-10 w-10 flex items-center justify-center rounded-full shadow" style={{ backgroundColor: bgColor }}><span className="font-poppins text-semi-black text-2xl font-medium">{customer.firstname[0]}</span></div>}
            </td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.firstname}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.lastname}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{customer.email}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{formattedDate}</td>
            <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300"><span className={`px-2 py-1 min-w-20 inline-block text-center rounded-xs ${customer.status === 'blocked' ? 'bg-red-100 text-red-700' : 'bg-green-200 text-green-700'}`}>{customer.status}</span></td>
            <td className="px-3 py-2 font-poppins font-normal text-base  flex items-center justify-center gap-3 mt-2">
                <Link href={route('admin.customers.show', customer.id)} className="text-blue-600 hover:text-blue-800">
                    <FaEye className="text-2xl" />
                </Link>
                <button onClick={statusUpdateHandler} className=" cursor-pointer">
                    {customer.status === 'active' ? <RiUserForbidFill className="text-2xl text-red-700" /> : <RiUserFollowFill className="text-2xl text-green-700" />}
                </button>
            </td>
        </tr>
    );
}

export let AdminPanelCustomerCard = React.memo(AdminPanelCustomerCardComponent);