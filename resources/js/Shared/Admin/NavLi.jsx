import { Link, usePage } from "@inertiajs/react"
import React from "react";

export let NavLi = ({ title, path, icon }) => {

    let { url } = usePage();
    let cleanUrl = url.split('?')[0];
    let isActive = cleanUrl === path;


    return <li className="w-full flex flex-col items-start">
        <Link className={`cursor-pointer flex items-center justify-between  p-2 font-medium  rounded w-full font-poppins  hover:scale-105 transition-all ease-linear duration-200 ${isActive ? "bg-mustard text-white" : 'text-semi-black'}`} href={path}>
            <p className="flex">
                {React.cloneElement(icon, {
                    className: `text-2xl ${isActive ? "text-white" : "text-semi-black"}`
                })}
                <span className="flex px-2 text-base">{title}</span>
            </p>
        </Link>
    </li>
}