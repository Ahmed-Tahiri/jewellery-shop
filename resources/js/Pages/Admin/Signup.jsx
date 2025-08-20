import { Link, useForm } from "@inertiajs/react";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/admin/signup", {
            onSuccess: () => {
                reset("password", "password_confirmation");
            },
        });
    };

    const handleReset = () => { reset(); };

    return (
        <section className=" py-10 md:h-dvh  w-full flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200">
            <div className=" w-full flex flex-col items-center gap-y-5">
                <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-medium">Admin Signup</h1>
                </div>

                <form onSubmit={submitHandler} className="w-6/10 flex flex-col border-2 px-5 py-7 rounded-2xl gap-y-5" >

                    <div className="flex flex-col md:flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start  w-full md:w-5/10"> <label className="text-lg" htmlFor="fName">First Name </label> <input value={data.first_name} onChange={inputChangeHandler} type="text" name="first_name" id="fName" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Ahmed" /> {errors.first_name && (<span className="text-red-700 text-sm">{errors.first_name}</span>)}</div>
                        <div className="flex flex-col items-start justify-start  w-full md:w-5/10"> <label className="text-lg" htmlFor="lName">  Last Name</label> <input value={data.last_name} onChange={inputChangeHandler} type="text" name="last_name" id="lName" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Tahiri" /> {errors.last_name && (<span className="text-red-700 text-sm">{errors.last_name}</span>)}</div>
                    </div>



                    <div className="flex flex-col items-start justify-start w-full"> <label className="text-lg" htmlFor="email">  Email </label> <input value={data.email} onChange={inputChangeHandler} type="email" name="email" id="email" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="ahmedtahiri@gmail.com" /> {errors.email && (<span className="text-red-700 text-sm">{errors.email}</span>)}</div>



                    <div className="flex flex-col md:flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start  w-full md:w-5/10"> <label className="text-lg" htmlFor="password"> Password </label> <input value={data.password} onChange={inputChangeHandler} type="password" name="password" id="password" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" /> {errors.password && (<span className="text-red-700 text-sm">{errors.password}</span>)}</div>
                        <div className="flex flex-col items-start justify-start  w-full md:w-5/10"> <label className="text-lg" htmlFor="confirmPassword">  Confirm Password </label> <input value={data.password_confirmation} onChange={inputChangeHandler} type="password" name="password_confirmation" id="confirmPassword" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" /> {errors.password_confirmation && (<span className="text-red-700 text-sm">    {errors.password_confirmation}</span>)}</div>
                    </div>

                    <div><p>Already have an account? <Link href={'/login'} className="underline text-yellow-700">Login</Link></p></div>

                    <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5">
                        <div> <button type="button" onClick={handleReset} className="min-w-25 px-4 py-2 bg-transparent text-yellow-600 font-medium border-2 border-yellow-600 font-lg rounded hover:bg-yellow-600 hover:text-white transition-all ease-linear duration-300 cursor-pointer" disabled={processing}> Reset</button></div>
                        <div>   <button type="submit" className="min-w-25 px-4 py-2 border-2 border-yellow-600 text-white font-medium bg-yellow-600 font-lg rounded hover:bg-yellow-700 transition-all ease-linear duration-300 cursor-pointer disabled:opacity-50" disabled={processing}> {processing ? "Signing up..." : "Signup"}</button></div>
                    </div>
                </form>
            </div>
        </section>
    );
}
