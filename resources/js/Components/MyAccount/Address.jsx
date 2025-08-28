import { Link } from "@inertiajs/react";


export let AddressCard = ({ id, city, street }) => {
    return <div className="w-full flex flex-col md:flex-row flex-start md:items-center justify-between gap-x-2 p-1 md:p-2">
        <div className="flex flex-col gap-y-0 items-start">
            <h6 className="font-poppins font-medium text-base md:text-lg text-semi-black">{city}</h6>
            <p className="font-poppins font-normal text-sm md:text-base text-light-gray">{street}</p>
        </div>
        <div className="flex flex-row gap-x-3 md:gap-x-5 justify-end w-full md:w-auto">
            <div><Link href={route('address.edit', id)} className="font-poppins text-sm md:text-base text-zinc font-medium cursor-pointer transition-all ease-linear duration-200 hover:font-semibold hover:text-zinc-dark">Edit</Link></div>
            <div><Link as="button" method="delete" href={route('address.destroy', id)} className="font-poppins text-sm md:text-base text-red-600 font-medium cursor-pointer transition-all ease-linear duration-200 hover:font-semibold hover:text-red-700">Delete</Link></div>
        </div>
    </div>
}