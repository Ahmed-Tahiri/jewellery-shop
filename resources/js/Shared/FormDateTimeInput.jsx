import React from "react"

let FormDateTimeInputComponent = ({ data, error = null, label, name, id, placeholder, inputChangeHandler }) => {
    return (
        <>
            <label className="sm:text-lg text-base font-poppins font-medium text-semi-black" htmlFor={id} >
                {label}
            </label>
            <input value={data} onChange={inputChangeHandler} type="datetime-local" name={name} id={id} className="border-2 font-poppins border-gray-300 shadow-xs w-full sm:p-2 p-1.5 text-semi-black outline-0 focus:border-light-gray focus:border-[3px] transition-all ease-linear duration-200 text-sm sm:text-base" placeholder={placeholder} autoComplete="on" />
            {error && (<span className="text-red-700 font-poppins text-sm -mt-1">  {error} </span>)}
        </>
    );
}
export const FormDateTimeInput = React.memo(FormDateTimeInputComponent);