import { Link, usePage } from "@inertiajs/react";

export let NavLink = ({ link, name }) => {
    let { url } = usePage();
    return <li className="w-full md:w-auto last:border-0"><Link className={`inline-block whitespace-nowrap md:text-base text-lg px-2 py-4 md:px-1 py-2 text-zinc font-poppins font-medium hover:font-semibold border-b-[1px] border-zinc-300 md:border-0 w-full  md:w-auto ${url === link ? 'md:underline md:font-semibold' : ''}`} href={link}>{name}</Link></li>;
}