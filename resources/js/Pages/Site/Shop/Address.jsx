
import { Link, useForm, usePage } from "@inertiajs/react";
import { SummaryDataComponent } from "../../../Components/SummaryData";
import MainLayout from "../../../Layouts/MainLayout";
import FormatPKR from "../../../Utilities/FormatPKR";
import { route } from "ziggy-js";
import { AddressForm } from "../../../Components/AddressForm";
import { CheckoutAddressCard } from "../../../Components/CheckoutAddressCard";
import { useEffect, useState } from "react";

export default function Address() {
    let { addresses } = usePage().props;
    const [selectedAddress, setSelectedAddress] = useState(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        town: "",
        state: "",
        zipcode: "",
        street: "",
        selectedAddress: selectedAddress,
    });

    const submitHandler = (e) => {
        e.preventDefault();
        post(route('checkout.address.store'), {
            onSuccess: () => {
                setIsPrimary(false);
                setData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    country: "",
                    town: "",
                    state: "",
                    zipcode: "",
                    street: "",
                    selectedAddress: selectedAddress
                });
                reset();
            },
        });

    }
    useEffect(() => setData('selectedAddress', selectedAddress), [selectedAddress])
    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-10  max-w-7xl ">
            <div className="w-full flex flex-row items-start justify-between gap-x-7">
                <div className="w-8/11 flex flex-col gap-y-7 items-start">
                    <div className="w-full flex flex-col gap-y-2">
                        <h3 className="w-full font-poppins font-semibold text-semi-black text-xl">Choose from Existing</h3>
                        <div className="w-full flex items-start gap-y-2 flex-col">
                            {addresses && addresses.length > 0 && addresses.map((address, idx) => <div key={`checkoutAddressCard${address.id}`} className="flex w-full flex-row gap-x-2 items-center justify-start"><input checked={selectedAddress == String(address.id)}
                                onChange={(e) => setSelectedAddress(e.target.value)} value={address.id} type="radio" name="checkoutAddress" id={`checkoutAddress${address.id}`} className="cursor-pointer h-5 w-5" /><CheckoutAddressCard address={address} /></div>)}
                            <button className="ms-6 underline text-zinc font-poppins text-base cursor-pointer hover:font-medium hover:text-zinc-dark transition-all ease-linear duration-200" onClick={() => setSelectedAddress(null)}>Clear Existing</button>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-start gap-y-6">
                        <h3 className="w-full font-poppins font-semibold text-semi-black text-xl">Billing Address</h3>
                        <form id="checkoutAddressForm" onSubmit={submitHandler} className="w-full flex flex-col items-start gap-y-5">
                            <AddressForm data={data} setData={setData} errors={errors} />
                        </form>
                    </div>
                </div>
                <div className="w-3/11 border-[1px] border-gray-300 px-3 shadow-xs">
                    <h6 className="font-poppins text-base font-medium text-semi-black py-3">Order Summary</h6>
                    <div className="flex w-full flex-col gap-y-4 py-4  border-y-2 border-gray-300">
                        <SummaryDataComponent heading={'Items'} data={9} />
                        <SummaryDataComponent heading={'Sub Total'} data={FormatPKR(3670)} />
                        <SummaryDataComponent heading={'Shipping'} data={FormatPKR(0)} />
                        <SummaryDataComponent heading={'Taxes'} data={FormatPKR(0)} />
                        <SummaryDataComponent heading={'Coupon Discount'} data={`-${FormatPKR(100)}`} />
                    </div>
                    <div className="py-4">
                        <SummaryDataComponent heading={'Total'} data={FormatPKR(3570)} />
                    </div>
                    <div className="flex w-full flex-col gap-y-3 py-4">
                        <button type="submit" form="checkoutAddressForm" className="p-3 text-white bg-zinc w-full font-poppins cursor-pointer text-base hover:bg-zinc-dark shadow-sm">Proceed to Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

Address.layout = page => (<MainLayout heading={'Checkout'} breadcrumb={'Home / Shopping Cart / Checkout'}>{page}</MainLayout>)