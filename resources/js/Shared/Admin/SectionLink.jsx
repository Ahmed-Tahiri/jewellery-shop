import { Link } from "@inertiajs/react"
import { route } from "ziggy-js"

export let SectionLink = ({ title, path }) => {
    return <Link href={route(path)} className="flex flex-row gap-x-2 items-center p-2 bg-mustard text-white shadow  cursor-pointer transition-colors ease-linear duration-200 hover:bg-mustard-dark" >
        <span className="font-poppins font-medium md:text-base text-sm">{title}</span>
    </Link>
}