import { useForm } from "@inertiajs/react";

export default function Login() {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    const inputChangeHandler = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/login", {
            onSuccess: () => {
                reset("password");
            },
        });
    };
    return <section className="h-[730px] py-10 w-full flex items-center justify-center bg-pink-100">
        <div className=" w-full flex flex-col items-center gap-y-5">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-medium">Login</h1>
            </div>

            <form onSubmit={submitHandler} className="h-100 w-3/10 flex flex-col justify-between items-center border-2 px-5 py-7 rounded-2xl gap-y-5 shadow" >

                <div className="flex flex-col gap-y-5 w-full mt-5">
                    <div className="flex flex-col items-start justify-start w-full"> <label className="text-lg" htmlFor="email">Email </label> <input value={data.email} onChange={inputChangeHandler} type="email" name="email" id="email" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="ahmedtahiri@gmail.com" /> {errors.email && (<span className="text-red-700 text-sm">{errors.email}</span>)}</div>
                    <div className="flex flex-col items-start justify-start w-full"> <label className="text-lg" htmlFor="password">Password </label> <input value={data.password} onChange={inputChangeHandler} type="text" name="password" id="password" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" /> {errors.password && (<span className="text-red-700 text-sm">{errors.password}</span>)}</div>

                </div>
                <div className="w-full flex justify-center items-center gap-x-5">
                    <button type="submit" className="w-25 px-4 py-2 bg-red-400 font-lg rounded hover:bg-red-500 transition-all ease-linear duration-300 cursor-pointer disabled:opacity-50" disabled={processing}> {processing ? "Logging in..." : "Login"}</button>
                </div>
            </form>
        </div>
    </section>


}