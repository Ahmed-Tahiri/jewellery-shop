import { Link, router } from "@inertiajs/react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";
import Switch from "react-switch";
import { format } from "date-fns";



export let ProductPanelCard = ({ product, index }) => {

    const [checked, setChecked] = useState(product.is_active);
    const formattedDate = product.created_at ? format(new Date(product.created_at), "EEEE, do MMMM yyyy p") : "N/A";

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
        router.patch(route('admin.products.status.update', product.id), { is_active: nextChecked ? 1 : 0 })
    };
    return <tr className={`${index % 2 === 0 ? "bg-powder-gray" : "bg-white"} hover:bg-gray-50 transition shadow`}>

        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300"><img className="h-10 shadow-xs" src={`/storage/${product.image.url}`} alt={product.image.alt_text} /></td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.name}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.sku}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.category}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.price}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.cost}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{formattedDate}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300 text-center"><Switch onChange={handleChange} checked={checked} height={20} width={40} /></td>
        <td className="px-3 py-2 font-poppins font-normal text-base  flex items-center justify-center gap-3 mt-2">
            <Link href={route('admin.products.show', product.id)} className="text-blue-600 hover:text-blue-800">
                <FaEye className="text-2xl" />
            </Link>
            <Link href={route(`admin.products.edit`, product.id)} className="text-green-600 hover:text-green-800">
                <FaEdit className="text-2xl" />
            </Link>
        </td>
    </tr>
}