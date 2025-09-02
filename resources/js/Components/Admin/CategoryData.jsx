export let CategoryData = ({ heading, data }) => {
    return <div className="w-full flex flex-col ">
        <p className="font-poppins text-base font-medium text-semi-black">{heading}</p>
        <p className="font-poppins text-base font-normal text-light-gray">{data}</p>
    </div>
}