import { Link, useForm, usePage } from "@inertiajs/react";
import { CiEdit } from "react-icons/ci";
import { AvatarUploader } from "../../../Components/Admin/Avatar";
import { format } from "date-fns";
import { useState } from "react";
import { FormTextInput } from "../../../Shared/FormTextInput";


let AdminDataField = ({ label, value }) => {
    return <div className="flex flex-col gapy-2 items-start">
        <h4 className="font-poppins text-base  font-normal">{label}</h4>
        <p className="font-poppins text-light-gray text-base font-medium">{value}</p>
    </div>
}

export default function AdminProfile() {

    const { adminData } = usePage().props || {};
    let adminFirstName = adminData?.firstName || "Super";
    let adminLastName = adminData?.lastName || "Admin";
    let email = adminData?.email || "admin@jewelleryshop.com";
    let role = adminData?.role || "";
    let lastLogin = adminData?.lastLogin || "";
    let avatar = adminData?.avatar || null;
    const [canEdit, setCanEdit] = useState(false);
    const lastLoginFormatted = format(new Date(lastLogin), "EEEE, do MMMM yyyy hh:mm:ss a");
    let { data, setData, errors, processing, put } = useForm({
        first_name: '',
        last_name: '',
        email: ''
    });
    let adminFieldData = [{ label: 'First Name', value: adminFirstName }, { label: 'Last Name', value: adminLastName }, { label: 'email', value: email }, { label: 'Role', value: role }, { label: 'Last Login at:', value: lastLoginFormatted }];

    let inputChangeHandler = (e) => { setData(e.target.name, e.target.value); }
    const editSaveHandle = () => {

    }
    const editCancelHandle = () => {
        setData({
            first_name: '',
            last_name: '',
            email: ''
        });
        setCanEdit(false);
    }
    let formSubmitHandler = (e) => {
        e.preventDefault();
        put('/admin/profile', {
            onSuccess: () => {
                setCanEdit(false);
            }
        });
    }
    return (
        <section className="w-full min-h-170 ">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-col justify-center items-start">
                    <h2 className="font-poppins text-4xl text-zinc-dark font-semibold">My Profile</h2>
                </div>
                <div className="flex flex-col w-full bg-white shadow rounded gap-y-5 p-5">
                    <div className="w-full flex flex-row gap-x-5  items-center justify-between border-b-[1px] border-gray-300 pb-4">
                        <h4 className="font-poppins text-lg font-medium text-semi-black">Personal Information</h4>
                        {canEdit ? <div className="flex flex-row gap-x-3 w-50">
                            <button type="reset" form="adminUpdateForm" onClick={editCancelHandle} className="shadow px-4 py-2 bg-light-gray text-white font-poppins rounded cursor-pointer flex-1 transition-colors ease-linear duration-200 hover:bg-dark-gray"> Cancel </button>
                            <button onClick={editSaveHandle} className={`shadow px-4 py-2 bg-mustard text-white font-poppins rounded cursor-pointer flex-1 transition-colors ease-linear duration-200 hover:bg-mustard-dark ${processing ? 'opacity-50' : 'opacity-100'}`} form="adminUpdateForm" type="submit" disabled={processing}> {processing ? 'Saving...' :
                                'Save'} </button>
                        </div> :
                            <button className="flex flex-row gap-x-2 items-center p-2 bg-mustard text-white shadow rounded  cursor-pointer transition-colors ease-linear duration-200 hover:bg-mustard-dark" onClick={() => setCanEdit(true)}>
                                <span className="font-poppins text-base font-medium">Edit</span>
                                <CiEdit className="text-xl text-white" />
                            </button>
                        }
                    </div>
                    <div className="w-full flex flex-row gap-10 flex-wrap items-start justify-start">

                        <div>
                            <AvatarUploader avatar={avatar} adminFirstName={adminFirstName} />
                        </div>
                        <div className={` ${canEdit ? 'hidden' : 'flex'} flex-col gap-y-3`} >
                            {adminFieldData.map((field, idx) => <AdminDataField key={`adminField${idx + 1}`} label={field.label} value={field.value} />)}
                        </div>
                        <div className={` ${canEdit ? 'flex' : 'hidden'} flex-col gap-y-3 w-120`} >
                            <form id="adminUpdateForm" className="w-full flex flex-col gap-y-3" onSubmit={formSubmitHandler}>
                                <FormTextInput type={'text'} name={'first_name'} id={'fName'} label={'First Name'} placeholder={'Enter First Name'} data={data.first_name} inputChangeHandler={inputChangeHandler} error={errors.first_name} />
                                <FormTextInput type={'text'} name={'last_name'} id={'lName'} label={'Last Name'} placeholder={'Enter Last Name'} data={data.last_name} inputChangeHandler={inputChangeHandler} error={errors.last_name} />
                                <FormTextInput type={'email'} name={'email'} id={'email'} label={'Email'} placeholder={'Enter Email Address'} data={data.email} inputChangeHandler={inputChangeHandler} error={errors.email} />
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}