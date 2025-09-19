import { useCallback } from "react";
import { FormTextInput } from "./../Shared/FormTextInput";

export let AddressForm = ({ data, errors, setData }) => {

    const inputChangeHandler = useCallback((e) => { setData(e.target.name, e.target.value); }, [setData]);

    return (<>
        <div className="w-full flex md:flex-row flex-col gap-5">
            <div className="w-full md:w-1/2">
                <FormTextInput label={'First Name *'} type={'text'} name={'first_name'} id={'fName'} inputChangeHandler={inputChangeHandler} error={errors.first_name} data={data.first_name} placeholder={'Enter First Name'} />
            </div>
            <div className=" w-full md:w-1/2">
                <FormTextInput label={'Last Name *'} type={'text'} name={'last_name'} id={'lName'} inputChangeHandler={inputChangeHandler} error={errors.last_name} data={data.last_name} placeholder={'Enter Last Name'} />
            </div>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-5">
            <div className="w-full md:w-1/2">
                <FormTextInput label={'Country *'} type={'text'} name={'country'} id={'country'} inputChangeHandler={inputChangeHandler} error={errors.country} data={data.country} placeholder={'Enter Country'} />
            </div>
            <div className="w-full md:w-1/2">
                <FormTextInput label={'State *'} type={'text'} name={'state'} id={'state'} inputChangeHandler={inputChangeHandler} error={errors.state} data={data.state} placeholder={'Enter State'} />
            </div>

        </div>
        <div className="w-full flex md:flex-row flex-col gap-5">
            <div className="w-full md:w-1/2">
                <FormTextInput label={'City *'} type={'text'} name={'city'} id={'city'} inputChangeHandler={inputChangeHandler} error={errors.city} data={data.city} placeholder={'Enter City'} />
            </div>
            <div className="w-full md:w-1/2">
                <FormTextInput label={'Zip Code *'} type={'text'} name={'zipcode'} id={'zipCode'} inputChangeHandler={inputChangeHandler} error={errors.zipcode} data={data.zipcode} placeholder={'Enter Zip Code'} />
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
    </>


    )
}