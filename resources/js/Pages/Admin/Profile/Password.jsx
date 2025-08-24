import { router, useForm } from "@inertiajs/react";
import { PasswordField } from "../../../Shared/PasswordField";
import { useState } from "react";


export default function AdminPassword() {

    let { data, setData, errors, processing, put } = useForm({
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
    });
    let [isSuccessful, setIsSuccessful] = useState(false);
    let inputChangeHandler = (e) => { setData(e.target.name, e.target.value); }
    const editCancelHandle = () => {
        setData({
            current_password: '',
            new_password: '',
            new_password_confirmation: ''
        });
        router.visit('/admin');

    }
    let formSubmitHandler = (e) => {
        e.preventDefault();
        put('/admin/profile/password', {
            onSuccess: () => {
                setData({
                    current_password: '',
                    new_password: '',
                    new_password_confirmation: ''
                });
                setIsSuccessful(true);
            },
        }
        );
    }
    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="font-poppins text-4xl text-zinc-dark font-semibold">My Profile</h2>
                </div>
                <div className="flex flex-col w-full bg-white shadow rounded gap-y-5 p-5">
                    <div className="w-full flex flex-row gap-x-5  items-center justify-between border-b-[1px] border-gray-300 pb-4">
                        <h4 className="font-poppins text-lg font-medium text-semi-black">Change Password</h4>
                    </div>
                    <div className="w-full flex flex-row gap-10 flex-wrap items-start justify-start">
                        <div className={` flex flex-col gap-y-3 w-120`} >
                            <form id="adminUpdateForm" className="w-full flex flex-col gap-y-3" onSubmit={formSubmitHandler}>
                                <div className={`${isSuccessful ? 'block' : 'hidden'}`}>
                                    <span className="text-green-700 font-poppins text-sm">Password Updated Successfully</span>
                                </div>
                                <PasswordField label={'Current Password'} data={data.current_password} inputChangeHandler={inputChangeHandler} name="current_password" id="currentPassword" placeholder="Enter Current Password" error={errors.current_password} />
                                <PasswordField label={'New Password'} data={data.new_password} inputChangeHandler={inputChangeHandler} name="new_password" id="newPassword" placeholder="Enter New Password" error={errors.new_password} />
                                <PasswordField label={'Confirm New Password'} data={data.new_password_confirmation} inputChangeHandler={inputChangeHandler} name="new_password_confirmation" id="newPasswordConfirmation" placeholder="Re-enter New Password" error={errors.new_password_confirmation} />
                                <div className="flex flex-row gap-x-3 w-full justify-end items-center mt-5">
                                    <button type="reset" onClick={editCancelHandle} form="adminUpdateForm" className="w-24 shadow px-4 py-2 bg-light-gray text-white font-poppins rounded cursor-pointer transition-colors ease-linear duration-200 hover:bg-dark-gray"> Cancel </button>
                                    <button className={`w-24 shadow px-4 py-2 bg-mustard text-white font-poppins rounded cursor-pointer transition-colors ease-linear duration-200 hover:bg-mustard-dark ${processing ? 'opacity-50' : 'opacity-100'}`} form="adminUpdateForm" type="submit" disabled={processing}> {processing ? 'Saving...' : 'Save'} </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}