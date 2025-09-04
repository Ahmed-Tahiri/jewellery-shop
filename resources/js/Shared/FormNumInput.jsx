export let FormNumInput = ({ data, error = null, label, name, id, placeholder, inputChangeHandler, pattern }) => {
    return (<>
        <label className="sm:text-lg text-base font-poppins font-medium text-semi-black" htmlFor={id}>{label}</label>
        <input value={data} onChange={inputChangeHandler} type='number' min={0} name={name} id={id} className="border-2 font-poppins border-gray-300 shadow-xs w-full sm:p-2 p-1.5 text-semi-black outline-0  focus:border-light-gray focus:border-[3px]  transition-all ease-linear duration-200 text-sm sm:text-base" placeholder={placeholder} autoComplete="on" pattern={pattern} />
        {error && (<span className="text-red-700 text-sm -mt-1">{error}</span>)}
    </>);
}