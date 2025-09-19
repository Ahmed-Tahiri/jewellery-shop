export let CheckoutAddressCard = ({ address }) => {
    return <div className="flex flex-col items-start gap-y-1 w-full border-[1px] border-gray-300 p-2">
        <h6 className="font-poppins text-xl text-semi-black font-medium" >{address.city}</h6>
        <p className="text-base font-poppins text-dark-gray text-start">{address.street}</p>
    </div>
}