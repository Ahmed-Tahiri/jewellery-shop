import { Link } from "@inertiajs/react"

export let AddressCard = ({ id, town, street }) => {
    return <div className="w-full flex flex-row items-center justify-between gap-x-2 p-2">
        <div className="flex flex-col gap-y-0 items-start">
            <h6 className="font-poppins font-medium text-lg text-semi-black">{town}</h6>
            <p className="font-poppins font-normal text-base text-light-gray">{street}</p>
        </div>
        <div className="flex flex-row gap-x-5">
            <div><Link href={`/myaccount/address/${id}/edit`} className="font-poppins text-base text-zinc font-medium cursor-pointer transition-all ease-linear duration-200 hover:font-semibold hover:text-zinc-dark">Edit</Link></div>
            <div><Link as="button" method="delete" href={`/myaccount/address/${id}/delete`} className="font-poppins text-base text-red-600 font-medium cursor-pointer transition-all ease-linear duration-200 hover:font-semibold hover:text-red-700">Delete</Link></div>
        </div>
    </div>
}