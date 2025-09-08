export let FormTextArea = ({ data, error = null, label, name, id, placeholder, inputChangeHandler, rows = 8 }) => {
    return (
        <>
            <label className="sm:text-lg text-base font-poppins font-medium text-semi-black" htmlFor={id} >
                {label}
            </label>

            <textarea value={data} onChange={inputChangeHandler} name={name} id={id} placeholder={placeholder} className="border-2 font-poppins border-gray-300 shadow-xs w-full sm:p-2 p-1.5   text-semi-black outline-0 focus:border-light-gray focus:border-[3px]   transition-all ease-linear duration-200 text-sm sm:text-base resize-y" autoComplete="on" rows={rows} ></textarea>
            {error && (
                <span className="text-red-700 font-poppins text-sm -mt-1">{error}</span>
            )}
        </>
    );
};
