import { Link } from "@inertiajs/react";
import { TbPencilDiscount } from "react-icons/tb";
import { MdAddBox } from "react-icons/md";
import { useState } from "react";
import { format } from "date-fns";
import { route } from "ziggy-js";


export let DiscountProductListCard = ({ product, index }) => {
    const [checked, setChecked] = useState(product.is_active);
    console.log(product);
    let startFormattedDate = 'N/A';
    let endFormattedDate = 'N/A';
    let discount = 'No Discount';
    let discountedPrice = 'N/A';
    if (product.existingDiscount) {
        startFormattedDate = product.existingDiscount.start_date ? format(new Date(product.existingDiscount.start_date), "do MMMM yyyy") : "N/A";
        endFormattedDate = product.existingDiscount.end_date ? format(new Date(product.existingDiscount.end_date), "do MMMM yyyy") : "N/A";
        discount = `${product.existingDiscount.discount_percent}%`;
        const price = Number(product.price);

        discountedPrice = price - (price * (product.existingDiscount.discount_percent / 100));
    }

    return <tr className={`${index % 2 === 0 ? "bg-powder-gray" : "bg-white"} hover:bg-gray-50 transition shadow`}>

        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300"><img className="h-10 shadow-xs" src={`/storage/${product.img.url}`} alt={product.img.alt_text} /></td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.sku}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.status}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.cost}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{product.price}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{discountedPrice}</td>
        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{discount}</td>

        <td className="px-3 py-2 font-poppins font-normal text-base border-x-1 border-gray-300">{`${startFormattedDate} - ${endFormattedDate}`}</td>

        <td className="px-3 py-2 font-poppins font-normal text-base  flex items-center justify-center gap-3 mt-2">
            {product.existingDiscount ? <Link href={route(`admin.discounts.products.edit`, [product.id, product.existingDiscount.id])} className="text-green-600 hover:text-green-800">
                <TbPencilDiscount className="text-3xl" />
            </Link> : <Link href={route('admin.discounts.products.create', product.id)} className="text-blue-600 hover:text-blue-800">
                <MdAddBox className="text-3xl" />
            </Link>}
        </td>
    </tr>
}