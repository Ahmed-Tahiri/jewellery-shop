import { Link } from "@inertiajs/react";

export default function Logout() {
    return <div className="w-7/9 flex flex-col items-start gap-y-5">
        <div className="w-full flex flex-col gap-y-2">
            <h3 className="font-poppins text-semi-black text-4xl font-medium">Logout</h3>
            <p className="font-poppins text-semi-black text-base font-normal">Are you sure you want to log out?</p>
        </div>
        <div><Link as='button' href={'/logout'} method="post" className="font-poppins w-50 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer py-2  px-3 text-center">Yes, Logout</Link></div>
    </div>
}