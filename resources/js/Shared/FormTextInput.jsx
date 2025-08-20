export let FormTextInput = ({ data, error = null, label, name, id, placeholder, type, inputChangeHandler }) => {
    return (<>
        <label className="text-lg font-poppins font-medium text-semi-black" htmlFor={id}>{label}</label>
        <input value={data} onChange={inputChangeHandler} type={type} name={name} id={id} className="border-2 font-poppins border-gray-300 shadow-xs w-full p-2 text-semi-black outline-0  focus:border-light-gray focus:border-[3px]  transition-all ease-linear duration-200" placeholder={placeholder} autoComplete="on" />
        {error && (<span className="text-red-700 text-sm -mt-1">{error}</span>)}
    </>);
}