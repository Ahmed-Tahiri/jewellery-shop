import { useForm } from "@inertiajs/react";
import { AddressCard } from "../../Components/MyAccount/Address";
import { FormTextInput } from "../../Shared/FormTextInput";

export default function Address() {


    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        country: "",
        town: "",
        state: "",
        zip_code: "",
        street: "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };
    const submitHandler = (e) => {
        e.preventDefault();
        post("/myaccount/address", {
            onSuccess: () => {

            },
        });
    };



    let address = [{
        id: 1,
        town: 'Bessie Cooper',
        street: '2464 Royal Ln. Messa, New Jersey 45463'
    },
    {
        id: 2,
        town: 'Brooklyn',
        street: '7324 Flatbush Ave, Brooklyn, NY 11236'
    }
    ];




    return (
        <div className="w-7/9">
            <div className="w-full flex flex-col gap-y-5">
                <div className="flex flex-col p-2 divide-y divide-gray-300 border-[1px] border-gray-300 shadow-sm">
                    {address.map((address, idx) => <AddressCard key={`AddressNo.${idx + 1}`} town={address.town} id={address.id} street={address.street} />)}
                </div>
                <div className="w-full flex items-center justify-start"><h5 className="font-poppins text-semi-black font-medium text-xl">Add new Addresses</h5></div>
                <div className="w-full">
                    <form onSubmit={submitHandler} className="w-full flex flex-col items-start">
                        <div className="w-full flex flex-col items-start gap-y-5">
                            <div className="w-full flex gap-x-5">
                                <div className="w-1/2">
                                    <FormTextInput label={'First Name *'} type={'text'} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} error={errors.first_name} data={data.first_name} placeholder={'Enter First Name'} />
                                </div>
                                <div className=" w-1/2">
                                    <FormTextInput label={'Last Name *'} type={'text'} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} error={errors.last_name} data={data.last_name} placeholder={'Enter Last Name'} />
                                </div>
                            </div>
                            <div className="w-full flex gap-x-5">
                                <div className="w-1/2">
                                    <FormTextInput label={'Country *'} type={'text'} name={'country'} id={'country'} inputChangeHandler={inputChangeHandler} error={errors.country} data={data.country} placeholder={'Enter Country'} />
                                </div>
                                <div className="w-1/2">
                                    <FormTextInput label={'State *'} type={'text'} name={'state'} id={'state'} inputChangeHandler={inputChangeHandler} error={errors.state} data={data.state} placeholder={'Enter State'} />
                                </div>

                            </div>
                            <div className="w-full flex gap-x-5">
                                <div className="w-1/2">
                                    <FormTextInput label={'City *'} type={'text'} name={'city'} id={'city'} inputChangeHandler={inputChangeHandler} error={errors.city} data={data.city} placeholder={'Enter City'} />
                                </div>
                                <div className="w-1/2">
                                    <FormTextInput label={'Zip Code *'} type={'text'} name={'zip_code'} id={'zipCode'} inputChangeHandler={inputChangeHandler} error={errors.zip_code} data={data.zip_code} placeholder={'Enter Zip Code'} />
                                </div>
                            </div>

                            <div className="w-full">
                                <FormTextInput label={'Street Address *'} type={'text'} name={'street'} id={'street'} inputChangeHandler={inputChangeHandler} error={errors.street} data={data.street} placeholder={'Enter Street Address'} />
                            </div>

                            <div className="w-full">
                                <FormTextInput label={'Email *'} type={'email'} name={'email'} id={'email'} inputChangeHandler={inputChangeHandler} error={errors.email} data={data.email} placeholder={'Enter Email'} />
                            </div>
                            <div className="w-full">
                                <FormTextInput label={'Phone *'} type={'text'} name={'phone'} id={'phone'} inputChangeHandler={inputChangeHandler} error={errors.phone} data={data.phone} placeholder={'Enter Phone'} />
                            </div>
                            <div>
                                <button type="submit" disabled={processing} className={`font-poppins w-50 shadow-xs bg-zinc text-white hover:bg-zinc-dark cursor-pointer py-2  px-3 text-center ${processing ? 'opacity-50' : 'opacity-100'}`}>
                                    {processing ? 'Adding Address...' : 'Add Address'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}