import { Link, usePage } from "@inertiajs/react";

export let NavLink = ({ link, name }) => {
    let { url } = usePage();
    return <li><Link className={`whitespace-nowrap text-zinc font-poppins font-medium hover:font-semibold ${url === link ? 'underline font-semibold' : ''}`} href={link}>{name}</Link></li>;
}