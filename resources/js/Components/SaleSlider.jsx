import { PiAsteriskLight } from "react-icons/pi";
import Marquee from "react-fast-marquee";


export let SaleSlider = ({ message }) => {
    return <div className="w-full p-3 bg-zinc overflow-hidden">
        <Marquee >
            <span className="font-mod20 text-white text-4xl mx-20 inline-block">{message}</span>
            <PiAsteriskLight className="text-mustard text-5xl " />
            <span className="font-mod20 text-white text-4xl mx-20 inline-block">{message} </span>
            <PiAsteriskLight className="text-mustard text-5xl " />
            <span className="font-mod20 text-white text-4xl mx-20 inline-block">{message}</span>
            <PiAsteriskLight className="text-mustard text-5xl " />
        </Marquee>
    </div>
}