import { Link } from "@inertiajs/react";
import leaf from './../../images/plants.png';

export let Error = ({ code, message, description, redirectTitle, redirectPath }) => {
    const bgImg = 'https://images.unsplash.com/photo-1708389827834-c4868dbf96ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


    return <div className="w-full bg-white px-3 py-3 sm:py-7 md:py-10 lg:py-15 xl:py-20 sm:px-6 md:px-10 lg:px-15 xl:px-20">
        <div className="flex items-center justify-center max-w-7xl w-full">
            <div className="h-100 flex flex-col items-center justify-center w-full gap-y-5 xl:gap-y-10">
                <div className={`h-28 sm:h-32 md:h-40 lg:h-40 xl:h-45`}>
                    <h1 className="font-jost text-9xl sm:text-[150px] md:text-[170px] lg:text-[185px] xl:text-[200px] font-bold leading-[1] whitespace-nowrap overflow-hidden bg-cover bg-center bg-clip-text text-transparent" style={{ backgroundImage: `url(${bgImg})` }} >{code}</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-center gap-y-5 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${leaf})` }}>
                    <h2 className="font-poppins text-semi-black text-2xl xl:text-5xl font-semibold">{message}</h2>
                    <p className="xl:w-90 lg:w-80 md:w-70 sm:w-60 w-60 font-poppins text-xs md:text-sm xl:text-base text-semi-black text-center">{description}</p>
                </div>
                <div className="flex flex-row items-center justify-center">

                    {redirectPath === 'javascript:refresh' ? (
                        <button onClick={() => window.location.reload()} className="font-poppins lg:w-46 text-sm xl:text-base shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer lg:p-3 text-center">{redirectTitle}</button>
                    ) : redirectPath === 'javascript:back' ? (
                        <button onClick={() => window.history.back()} className="font-poppins lg:w-46 text-sm xl:text-base shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer lg:p-3 text-center" > {redirectTitle} </button>
                    ) : (<Link href={redirectPath} className="font-poppins text-sm lg:text-base lg:w-46 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer p-3 text-center" > {redirectTitle} </Link>)}
                </div>
            </div>
        </div>
    </div>
}