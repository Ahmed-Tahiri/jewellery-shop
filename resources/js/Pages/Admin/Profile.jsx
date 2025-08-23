import { Link, usePage } from "@inertiajs/react";
import randomColor from "randomcolor";
import { CiEdit } from "react-icons/ci";
import { AvatarUploader } from "../../Components/Admin/Avatar";

export default function AdminProfile() {

    const { adminData } = usePage().props || {};
    let adminFirstName = adminData?.firstName || "Super";
    let adminLastName = adminData?.lastName || "Admin";
    let email = adminData?.email || "admin@jewelleryshop.com";
    let role = adminData?.role || "";
    let lastLogin = adminData?.lastLogin || "";
    let avatar = adminData?.avatar || null;
    console.log(adminData);
    const bgColor = randomColor({ luminosity: 'light' });
    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="font-poppins text-4xl text-zinc-dark font-semibold">My Profile</h2>
                </div>
                <div className="flex flex-col w-full bg-white shadow rounded gap-y-5 p-5">
                    <div className="w-full flex flex-row gap-x-5  items-center justify-between border-b-[1px] border-gray-300 pb-4">
                        <h4 className="font-poppins text-lg font-medium text-semi-black">Personal Information</h4>
                        <Link className="flex flex-row gap-x-2 items-center p-2 bg-mustard text-white shadow rounded">
                            <span className="font-poppins text-base font-medium">Edit</span>
                            <CiEdit className="text-xl text-white" />
                        </Link>
                    </div>
                    <div className="w-full flex flex-row gap-10 flex-wrap items-start justify-start">

                        <div>

                            <AvatarUploader avatar={avatar} bgColor={bgColor} adminFirstName={adminFirstName} />
                        </div>
                        <div className=" flex flex-col gap-y-3">
                            <div className="flex flex-col gapy-2 items-start">
                                <h4 className="font-poppins text-base  font-normal">First Name:</h4>
                                <p className="font-poppins text-light-gray text-base font-medium">{adminFirstName}</p>
                            </div>
                            <div className="flex flex-col gapy-2 items-start">
                                <h4 className="font-poppins text-base  font-normal">Last Name:</h4>
                                <p className="font-poppins text-light-gray text-base font-medium">{adminLastName}</p>
                            </div>
                            <div className="flex flex-col gapy-2 items-start">
                                <h4 className="font-poppins text-base  font-normal">Email:</h4>
                                <p className="font-poppins text-light-gray text-base font-medium">{email}</p>
                            </div>
                            <div className="flex flex-col gapy-2 items-start">
                                <h4 className="font-poppins text-base  font-normal">Role:</h4>
                                <p className="font-poppins text-light-gray text-base font-medium">{role}</p>
                            </div>
                            <div className="flex flex-col gapy-2 items-start">
                                <h4 className="font-poppins text-base  font-normal">Last Login at:</h4>
                                <p className="font-poppins text-light-gray text-base font-medium">29 dec 2019</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>

    )
}