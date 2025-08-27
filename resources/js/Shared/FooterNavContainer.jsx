import { Link } from "@inertiajs/react"

export let FooterNavContainer = ({ heading, links }) => {
    return <div className=" flex flex-col justify-between items-start gap-y-5 w-[25%]">
        <h3 className="font-poppins font-medium text-lg">{heading}</h3>
        <ul className="w-full flex flex-col gap-y-3 items-start justify-between">
            {links.map((link, index) => <li key={`footerSectionLink${index + 1}`}><Link href={link.path} className="inline-block text-sm text-light-gray font-medium hover:underline">{link.name}</Link></li>)}
        </ul>
    </div>
}