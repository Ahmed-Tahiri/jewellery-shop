
import { Link, router } from "@inertiajs/react";
import { format } from "date-fns";

import { route } from "ziggy-js";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { ItemData } from "../../../Components/Admin/ItemData";



export default function Show({ customer }) {

    const createdAtFormatted = customer.createdAt ? format(new Date(customer.createdAt), "EEEE, do MMMM yyyy p") : "N/A";
    const updatedAtFormatted = customer.updatedAt ? format(new Date(customer.updatedAt), "EEEE, do MMMM yyyy p") : "N/A";
    const statusUpdateHandler = () => { router.patch(route('admin.customers.status.update', customer.id), { status: customer.status === 'active' ? 'blocked' : 'active' }); }

    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={"customer Information"} />
                    <div className="flex flex-row items-center justify-end">
                        <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={route("admin.categories")} >Back</Link>
                    </div>
                </div>

                <div className="w-full flex gap-5 flex-row items-start justify-between">
                    <div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
                        <div className="w-full flex flex-col items-start gap-y-4">
                            <h2 className="font-poppins w-full text-xl font-medium text-semi-black pb-3 border-b-[1px] border-gray-300">Overview</h2>
                            <div className="w-full flex flex-row gap-x-5 justify-between items-center border-1 border-gray-300 rounded p-2 ">
                                <div className="flex justify-start items-start w-3/10 flex-col">
                                    {customer.avatar ? <img src={`/storage/${customer.avatar}`} alt={customer.firstname} className="w-full aspect-square object-cover shadow-sm rounded-xs"
                                    /> : <div className="p-2  w-full aspect-square flex items-center justify-center rounded-xs shadow bg-mustard" ><span className="font-poppins text-zinc text-7xl font-medium">{customer.firstname[0]}</span></div>}

                                </div>
                                <div className="flex flex-col w-7/10 border-s-[1px] border-gray-300 py-2 px-3 gap-y-2">
                                    <ItemData heading={'Full Name:'} data={`${customer.firstname} ${customer.lastname}`} />
                                    <ItemData heading={'Email:'} data={customer.email} />
                                    <ItemData heading={'Phone No.:'} data={customer.phone} />
                                    <ItemData heading={'Gender:'} data={customer.gender} />
                                    <ItemData heading={'Status:'} data={customer.status} />
                                    <ItemData heading={'Joined at:'} data={createdAtFormatted} />
                                    <ItemData heading={'Last update at:'} data={updatedAtFormatted} />
                                </div>
                            </div>
                            <div className="w-full flex gap-x-2 justify-end">
                                <button onClick={statusUpdateHandler} className="min-w-25  font-poppins p-2 bg-zinc text-white text-center shadow-sm cursor-pointer  hover:bg-zinc-dark transition-colors ease-linear duration-200">{customer.status === 'active' ? 'Block' : 'Unblock'}</button>
                                <Link method="delete" as={'button'} href={route('admin.customers.destroy', customer.id)} className="min-w-25  font-poppins p-2 bg-mustard text-white hover:bg-mustard-dark text-center shadow-sm cursor-pointer transition-colors ease-linear duration-200">Delete</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  gap-y-5  bg-white  p-5  flex-col items-start w-full">
                    <h2 className="font-poppins rounded-xs w-full text-xl font-medium text-semi-black pb-3 border-b-[1px] border-gray-300">Customer Addresses</h2>
                    <div className="w-full flex flex-wrap flex-row items-center justify-start gap-5">

                        {customer.addresses.length > 0 ? customer.addresses.map((address) => <div key={`customer${customer.id}Address${address.id}`} className="relative w-170 bg-powder-gray shadow-sm rounded-xs p-5  border-b-[1px] border-gray-300">
                            {address.is_primary === true && <div className="p-3 absolute bg-mustard -top-3 min-w-30 rounded-xs shadow-xs -right-10"><span className="font-poppins font-medium text-zinc ">Primary Address</span></div>}
                            <div className="w-full flex flex-col gap-y-1">
                                <p className="font-poppins text-base text-semi-black flex flex-col">Name: <span className="font-poppins text-light-gray">{`${address.first_name} ${address.last_name}`}</span></p>
                                <p className="font-poppins text-base text-semi-black flex flex-col">Street: <span className="font-poppins text-light-gray">{address.street}</span></p>
                                <p className="font-poppins text-base text-semi-black flex flex-col">City: <span className="font-poppins text-light-gray">{address.city}</span></p>
                                <p className="font-poppins text-base text-semi-black flex flex-col">State: <span className="font-poppins text-light-gray">{address.state}</span></p>
                                <p className="font-poppins text-base text-semi-black flex flex-col">Country: <span className="font-poppins text-light-gray">{address.country}</span></p>
                                <p className="font-poppins text-base text-semi-black flex flex-col">Email: <span className="font-poppins text-light-gray">{address.email}</span></p>
                                <p className="font-poppins text-base text-semi-black flex flex-col">Phone: <span className="font-poppins text-light-gray">{address.phone}</span></p>
                            </div>
                        </div>) : (<div className="w-full flex items-center justify-center">
                            <h4 className="text-zinc font-poppins text-2xl my-5 font-medium">No addresses found for this customer!</h4>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
