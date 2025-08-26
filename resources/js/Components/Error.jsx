import { Link } from "@inertiajs/react";
import ErrorBg from './../../images/errorbg.jpg';

export let Error = ({ code, message, description }) => {
    return <div className="w-full bg-white p-20">

        <div className="h-100 flex flex-col items-center justify-center w-full gap-y-10">
            <div className={`h-45`}><h1
                className="font-jost text-[200px] font-bold leading-[1] whitespace-nowrap overflow-hidden bg-cover bg-center bg-clip-text text-transparent"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1708389827834-c4868dbf96ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
            >
                404
            </h1></div>
            <div className="w-full flex flex-col items-center justify-center gap-y-5">
                <h2 className="font-poppins text-semi-black text-5xl font-semibold">{message}</h2>
                <p className="w-90 font-poppins text-base text-semi-black">{description}</p>
            </div>
            <div className="flex flex-row items-center justify-center">
                <Link href={route('home')} className="font-poppins w-46 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer p-3 text-center">Go To Home Page</Link>
            </div>
        </div>


    </div>
}