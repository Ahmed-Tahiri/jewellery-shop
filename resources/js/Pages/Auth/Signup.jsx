export default function Signup() {

    return <section className="h-[730px] w-full flex items-center justify-center bg-pink-100">
        <div className="h-[90%] w-full flex flex-col items-center gap-y-5">
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-medium">Signup</h1>
            </div>
            <form className=" w-6/10 flex flex-col border-2 px-5 py-7 rounded-2xl gap-y-5" method="POST" action='/signup'>
                <div className="flex flex-col w-full gap-y-3">
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="fName">First Name</label>
                            <input type="text" name="f_name" id="fName" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Ahmed" />
                            <span className="text-red-700 text-sm">Please Enter Valid First Name</span>
                        </div>
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="lName">Last Name</label>
                            <input type="text" name="l_name" id="lName" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Tahiri" />
                            <span className="text-red-700 text-sm">Please Enter Valid last Name</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="cnic">CNIC</label>
                            <input type="text" name="cnic" id="cnic" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="12345-1234567-8" />
                            <span className="text-red-700 text-sm">Please Enter Valid CNIC</span>
                        </div>
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="01231234567" />
                            <span className="text-red-700 text-sm">Please Enter Valid Phone</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="ahmedtahiri@gmail.com" />
                            <span className="text-red-700 text-sm">Please Enter Valid Email</span>
                        </div>
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="New Street, somewhere, somewhere" />
                            <span className="text-red-700 text-sm">Please Enter Valid Address</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="password">Password</label>
                            <input type="text" name="password" id="password" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" />
                            <span className="text-red-700 text-sm">Please Enter Valid Password</span>
                        </div>
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="confirmPassword">Confirm Password</label>
                            <input type="text" name="password_confirmation" id="confirmPassword" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="********" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="town">Town</label>
                            <input type="text" name="town" id="town" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Lahore" />
                            <span className="text-red-700 text-sm">Please Enter Valid Town</span>
                        </div>
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="region">Region</label>
                            <input type="text" name="region" id="region" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="South Asia" />
                            <span className="text-red-700 text-sm">Please Enter Valid Region</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="postalCode">Postal Code</label>
                            <input type="text" name="postal_Code" id="postalCode" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="48800" />
                            <span className="text-red-700 text-sm">Please Enter Valid Postal Code</span>
                        </div>
                        <div className="flex flex-col items-start justify-start w-5/10">
                            <label className="text-lg" htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" className="border border-gray-900 rounded w-full px-2 py-1" placeholder="Pakistan" />
                            <span className="text-red-700 text-sm">Please Enter Valid Country</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center gap-x-5">
                    <button type="reset" className="w-25 px-4 py-2 bg-blue-400 font-lg rounded hover:bg-blue-500 transition-all ease-linear duration-300 cursor-pointer">Reset</button>
                    <button type="submit" className=" w-25 px-4 py-2 bg-red-400 font-lg rounded hover:bg-red-500 transition-all ease-linear duration-300 cursor-pointer">Signup</button>
                </div>
            </form>
        </div>
    </section>;

}