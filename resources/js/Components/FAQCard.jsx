import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";

export let FAQCard = ({ question, answer }) => {
    const [FAQIsOpen, setFAQIsOpen] = useState(false);
    return <div className={`${FAQIsOpen ? 'bg-zinc items-start' : 'bg-powder-gray items-center'} w-full p-3  flex flex-row justify-between gap-x-5 shadow-xs rounded-xs transition-colors ease-linear duration-200`}>
        <div className="flex flex-col gap-y-3 items-start justify-start">
            <h4 className={`${FAQIsOpen ? 'text-white text-xl font-medium' : 'text-semi-black font-medium text-xl font-poppins'} font-poppins text-xl`}>{question}</h4>
            <p className={`${FAQIsOpen ? 'block text-white' : 'hidden text-semi-black'} font-poppins text-base`}>{answer}</p>
        </div>
        <div><button className="p-2 cursor-pointer" onClick={() => setFAQIsOpen((prev) => !prev)}>{FAQIsOpen ? <LuMinus className="text-2xl text-mustard" /> :
            <LuPlus className="text-2xl text-zinc" />
        }</button>
        </div>
    </div>
}