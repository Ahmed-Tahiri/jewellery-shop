export let ColorStrip = ({ color }) => {

    return <div className="w-full flex items-center flex-row justify-start gap-x-2 cursor-pointer">
        <div className="border-[1px] border-white shadow-xs h-4 w-4 rounded-full" style={{ backgroundColor: `${color.colorCode}` }}></div>
        <p className="font-poppins text-[15px] font-medium text-dark-gray">{color.name}</p>
    </div>
}