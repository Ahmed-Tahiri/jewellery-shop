import { BiEditAlt } from "react-icons/bi";
import { FormTextInput } from './../../Shared/FormTextInput';
import { useForm } from "@inertiajs/react";
import { DropDown } from "../../Shared/DropDown";
export default function Index() {

    const { data, setData, put, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const submitHandler = (e) => {
        e.preventDefault();
        put("/myaccount", {
            onSuccess: () => {

            },
        });
    };



    return (
        <div className="w-7/9 flex flex-col items-start gap-y-7">
            <div className="relative w-30">
                <div className="shadow overflow-hidden h-30 w-30 rounded-full">
                    <img src="https://i0.wp.com/therighthairstyles.com/wp-content/uploads/2014/03/1-medium-layered-haircut-for-square-face.jpg?w=500&ssl=1" alt="customer profile picture" />
                </div>
                <button className="h-7 w-7 absolute bg-zinc rounded-full bottom-1 right-0 border-2 border-white text-center"><BiEditAlt className="text-white text-xl ms-0.5" /></button>
            </div>
            <div className="w-full">
                <form onSubmit={submitHandler} className="w-full flex flex-col items-start">

                    <div className="w-full flex flex-col items-start gap-y-5">
                        <div className="w-full flex gap-x-5">
                            <div className="w-1/2">
                                <FormTextInput label={'First Name *'} type={'text'} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} error={errors.first_name} data={data.first_name} placeholder={'Please Enter First Name'} />
                            </div>
                            <div className=" w-1/2">
                                <FormTextInput label={'Last Name *'} type={'text'} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} error={errors.last_name} data={data.last_name} placeholder={'Please Enter Last Name'} />
                            </div>
                        </div>

                        <div className="w-full">
                            <FormTextInput label={'Email *'} type={'email'} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} error={errors.email} data={data.email} placeholder={'Please Enter Email'} />
                        </div>
                        <div className="w-full">
                            <FormTextInput label={'Phone *'} type={'text'} name={'phone'} id={'phone'} inputChangeHandler={inputChangeHandler} error={errors.phone} data={data.phone} placeholder={'Please Enter Phone'} />
                        </div>
                        <div className="w-full">
                            <p className="text-lg font-poppins font-medium text-semi-black">Gender *</p>
                            <DropDown customerGender={'Female'} />
                        </div>
                        <div>
                            <button type="submit" disabled={processing} className={`font-poppins w-50 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer py-2  px-3 text-center ${processing ? 'opacity-50' : 'opacity-100'}`}>
                                {processing ? 'Updating...' : 'Update Changes'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}