import { Link, useForm } from "@inertiajs/react";
import { AuthPageSlider } from "../../Shared/AuthPageSlider";

import JewelleryLogo from './../../../images/JewelleryLogo.png';
import { useState } from "react";
import { PasswordField } from "../../Shared/PasswordField";
import { FormTextInput } from "../../Shared/FormTextInput";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const slidesData = [
        {
            img:
                `https://images.pexels.com/photos/21263448/pexels-photo-21263448.jpeg?_gl=1*1aj9cgb*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTE4OTgkajU5JGwwJGgw`,
            quote:
                "This jewelry looks so elegant and eye-catching. The quality feels amazing for the price. I’m really impressed and would definitely recommend it!",
            name: "Emily Grace",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/8856198/pexels-photo-8856198.jpeg?_gl=1*5lp17v*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTA3NjIkajU5JGwwJGgw`,
            quote:
                "I was amazed at how elegant this piece looks in person. The shine is subtle yet very classy. It’s definitely my new favorite accessory!",
            name: "Olivia Rose",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/26840477/pexels-photo-26840477.jpeg?_gl=1*1oi627h*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTEwMTQkajU5JGwwJGgw`,
            quote:
                "The design is so delicate and beautiful. It shines perfectly under any light, making it look luxurious. I feel really confident wearing this piece!",
            name: "Yuna Jiwoo",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/15983835/pexels-photo-15983835.jpeg?_gl=1*1b6c5yk*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTA4ODQkajU5JGwwJGgw`,
            quote:
                "The craftsmanship is really impressive for the price. It feels lightweight yet durable, perfect for daily wear. I’ve already had a few friends ask where I bought it!",
            name: "Hannah Grace",
            role: "Happy Customer",
        },

    ];
    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/signup", {
            onSuccess: () => {
                reset("password", "password_confirmation");
            },
        });
    };


    return (
        <section className="w-full min-h-screen h-screen bg-white flex justify-center items-center">
            <div className="w-full h-full flex flex-row justify-between">
                <AuthPageSlider slidesData={slidesData} />
                <div className="py-7 px-35 w-[55%] h-full flex flex-col gap-y-7 items-center justify-center">
                    <div className="w-full h-9 flex justify-start items-center"><img src={JewelleryLogo} className="h-full" alt="Jewellery Logo" /></div>
                    <div className="w-full flex flex-col gap-y-10">
                        <div className="w-full flex flex-col gap-y-4">
                            <h2 className="font-poppins text-semi-black text-3xl font-semibold">Sign Up</h2>
                            <p className="font-poppins text-light-gray text-md font-normal">Complete the signup form to create your account and discover jewellery that suits your style.</p>
                        </div>

                        <div className="w-full flex flex-col">
                            <form className="w-full flex flex-col gap-y-5" onSubmit={submitHandler}>
                                <div className="flex flex-col md:flex-row gap-x-10">
                                    <div className="flex flex-col items-start justify-start  w-full md:w-5/10 gap-y-2">
                                        <FormTextInput type={'text'} data={data.first_name} label={'First Name *'} placeholder={'Enter First Name'} error={errors.first_name} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} />
                                    </div>
                                    <div className="flex flex-col items-start justify-start  w-full md:w-5/10 gap-y-2">
                                        <FormTextInput type={'text'} data={data.last_name} label={'Last Name *'} placeholder={'Enter Last Name'} error={errors.last_name} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start  w-full gap-y-2">
                                    <FormTextInput type={'email'} data={data.email} label={'Email *'} placeholder={'Enter Email Address'} error={errors.email} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} />
                                </div>
                                <div className="flex flex-col md:flex-row gap-x-10">
                                    <PasswordField data={data.password} inputChangeHandler={inputChangeHandler} error={errors.password} label={'Password *'} />
                                    <PasswordField data={data.password_confirmation} inputChangeHandler={inputChangeHandler} label={'Confirm Password *'} name="password_confirmation" id="passwordConfirmation" placeholder="Re-enter Your Password" />
                                </div>
                                <div className="w-full"><button type="submit" className="w-full p-2 bg-zinc text-white font-poppins text-base shadow-md font-normal cursor-pointer hover:bg-zinc-dark disabled:opacity-50" disabled={processing}> {processing ? "Signing up..." : "Signup"}</button></div>
                            </form>
                            <div className="w-full text-center mt-3"><p className="font-poppins text-base text-semi-black font-medium">Already have an account? <Link href={'/signin'} className="text-zinc underline hover:cursor-pointer hover:font-semibold active:text-mustard">Sign In</Link></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
