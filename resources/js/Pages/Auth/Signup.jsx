import React from "react";
import { useForm } from "@inertiajs/react";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        cnic: "",
        town: "",
        region: "",
        postal_code: "",
        country: "",
        phone: "",
        password: "",
        password_confirmation: "",
    });

    const inputChangeHandler = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/signup", {
            onSuccess: () => {
                reset("password", "password_confirmation");
            },
        });
    };

    const handleReset = () => {
        reset();
    };

    return (
        <section className=" py-10 w-full flex items-center justify-center bg-pink-100">
            <div className=" w-full flex flex-col items-center gap-y-5">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-medium">Signup</h1>
                </div>

                <form onSubmit={submitHandler} className="w-6/10 flex flex-col border-2 px-5 py-7 rounded-2xl gap-y-5" >

                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="fName">First Name </label> <input value={data.first_name} onChange={inputChangeHandler} type="text" name="first_name" id="fName" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Ahmed" /> {errors.first_name && (<span className="text-red-700 text-sm">{errors.first_name}</span>)}</div>
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="lName">  Last Name</label> <input value={data.last_name} onChange={inputChangeHandler} type="text" name="last_name" id="lName" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Tahiri" /> {errors.last_name && (<span className="text-red-700 text-sm">{errors.last_name}</span>)}</div>
                    </div>


                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="cnic">CNIC</label> <input value={data.cnic} onChange={inputChangeHandler} type="text" name="cnic" id="cnic" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="12345-1234567-8" /> {errors.cnic && (<span className="text-red-700 text-sm">{errors.cnic}</span>)}</div>
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="phone">Phone</label> <input value={data.phone} onChange={inputChangeHandler} type="text" name="phone" id="phone" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="01231234567" /> {errors.phone && (<span className="text-red-700 text-sm">{errors.phone}</span>)}</div>
                    </div>

                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="email">  Email </label> <input value={data.email} onChange={inputChangeHandler} type="email" name="email" id="email" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="ahmedtahiri@gmail.com" /> {errors.email && (<span className="text-red-700 text-sm">{errors.email}</span>)}</div>
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="address"> Address </label> <input value={data.address} onChange={inputChangeHandler} type="text" name="address" id="address" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="New Street, somewhere, somewhere" /> {errors.address && (<span className="text-red-700 text-sm">{errors.address}</span>)}</div>
                    </div>

                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="password"> Password </label> <input value={data.password} onChange={inputChangeHandler} type="password" name="password" id="password" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" /> {errors.password && (<span className="text-red-700 text-sm">{errors.password}</span>)}</div>
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="confirmPassword">  Confirm Password </label> <input value={data.password_confirmation} onChange={inputChangeHandler} type="password" name="password_confirmation" id="confirmPassword" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" /> {errors.password_confirmation && (<span className="text-red-700 text-sm">    {errors.password_confirmation}</span>)}</div>
                    </div>


                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="town">Town </label> <input value={data.town} onChange={inputChangeHandler} type="text" name="town" id="town" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Lahore" /> {errors.town && (<span className="text-red-700 text-sm">{errors.town}</span>)}</div>
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="region">Region </label> <input value={data.region} onChange={inputChangeHandler} type="text" name="region" id="region" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="South Asia" /> {errors.region && (<span className="text-red-700 text-sm">{errors.region}</span>)}</div>
                    </div>


                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="postalCode">Postal Code </label> <input value={data.postal_code} onChange={inputChangeHandler} type="text" name="postal_code" id="postalCode" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="48800" /> {errors.postal_code && (<span className="text-red-700 text-sm">{errors.postal_code}</span>)}</div>
                        <div className="flex flex-col items-start justify-start w-5/10"> <label className="text-lg" htmlFor="country">Country </label> <input value={data.country} onChange={inputChangeHandler} type="text" name="country" id="country" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Pakistan" /> {errors.country && (<span className="text-red-700 text-sm">{errors.country}</span>)}</div>
                    </div>


                    <div className="w-full flex justify-center items-center gap-x-5">
                        <button type="button" onClick={handleReset} className="w-25 px-4 py-2 bg-blue-400 font-lg rounded hover:bg-blue-500 transition-all ease-linear duration-300 cursor-pointer" disabled={processing}> Reset</button>
                        <button type="submit" className="w-25 px-4 py-2 bg-red-400 font-lg rounded hover:bg-red-500 transition-all ease-linear duration-300 cursor-pointer disabled:opacity-50" disabled={processing}> {processing ? "Signing up..." : "Signup"}</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
