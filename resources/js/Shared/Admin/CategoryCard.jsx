import { Link, router } from "@inertiajs/react";
import { FaUserEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import React, { Component, useState } from "react";
import Switch from "react-switch";



export let CategoryCard = ({ category, index }) => {
    const [checked, setChecked] = useState(category.is_active);

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
        router.put(route('admin.categories.status.update', category.id), { is_active: nextChecked ? 1 : 0 })
    };
    return <tr className={`${index % 2 === 0 ? "bg-powder-gray" : "bg-white"} hover:bg-gray-50 transition shadow`}>

        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{category.id}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{category.name}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{2}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300 text-center"><Switch onChange={handleChange} checked={checked} height={20} width={40} /></td>
        <td className="px-3 py-2 font-poppins font-normal text-base  flex items-center justify-center gap-3 mt-2">
            <Link href={`/admin/customers/${category.id}`} className="text-blue-600 hover:text-blue-800">
                <FaEye className="text-2xl" />
            </Link>
            <Link href={`/admin/customers/${category.id}/edit`} className="text-green-600 hover:text-green-800">
                <FaUserEdit className="text-2xl" />
            </Link>
        </td>
    </tr>
}