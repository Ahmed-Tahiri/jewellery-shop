import { Link, usePage } from "@inertiajs/react";
import leaf from './../../images/plants.png';

export let Error = ({ code, message, description, redirectTitle, redirectPath }) => {
    const bgImg = 'https://images.unsplash.com/photo-1708389827834-c4868dbf96ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return <div className="w-full bg-white p-20">

        <div className="h-100 flex flex-col items-center justify-center w-full gap-y-10">
            <div className={`h-45`}><h1
                className="font-jost text-[200px] font-bold leading-[1] whitespace-nowrap overflow-hidden bg-cover bg-center bg-clip-text text-transparent"
                style={{ backgroundImage: `url(${bgImg})` }}
            >{code}
            </h1></div>
            <div className="w-full flex flex-col items-center justify-center gap-y-5 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${leaf})` }}>
                <h2 className="font-poppins text-semi-black text-5xl font-semibold">{message}</h2>
                <p className="w-90 font-poppins text-base text-semi-black text-center">{description}</p>
            </div>
            <div className="flex flex-row items-center justify-center">

                {redirectPath === 'javascript:refresh' ? (
                    <button onClick={() => window.location.reload()} className="font-poppins w-46 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer p-3 text-center">{redirectTitle}</button>
                ) : redirectPath === 'javascript:back' ? (
                    <button onClick={() => window.history.back()} className="font-poppins w-46 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer p-3 text-center" > {redirectTitle} </button>
                ) : (<Link href={redirectPath} className="font-poppins w-46 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer p-3 text-center" > {redirectTitle} </Link>)}
            </div>
        </div>


    </div>
}