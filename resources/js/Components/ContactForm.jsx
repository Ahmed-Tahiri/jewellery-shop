import { useForm } from '@inertiajs/react';
import { FormTextInput } from './../Shared/FormTextInput';
import { FormTextArea } from './../Shared/FormTextArea';
import { useCallback } from 'react';
export let ContactForm = () => {

    const { data, setData, errors, post, reset } = useForm(
        { name: '', email: '', subject: '', message: '' }
    );

    let inputChangeHandler = useCallback((e) => {
        setData(e.target.name, e.target.value);
    }, [setData]);
    const formSubmitHandler = (e) => {
        e.preventDefault();
        // post();
        console.log(data);
    }
    return <form onSubmit={formSubmitHandler} className='flex flex-col gap-y-5'>
        <div className='flex flex-row gap-5 items-center'>
            <div className='flex flex-col gap-y-2 items-start w-1/2'>
                <FormTextInput placeholder={'Ex. John Doe'} type={'text'} label={'Your Name *'} inputChangeHandler={inputChangeHandler} name={'name'} id={'customerName'} data={data.name} error={errors.name} />
            </div>
            <div className='flex flex-col gap-y-2 items-start w-1/2'>
                <FormTextInput placeholder={'example@gmail.com'} type={'email'} label={'Email *'} inputChangeHandler={inputChangeHandler} name={'email'} id={'email'} data={data.email} error={errors.email} />
            </div>
        </div>
        <div className='flex flex-col gap-y-2 items-start w-full'>
            <FormTextInput placeholder={'Enter Subject'} type={'text'} label={'Subject *'} inputChangeHandler={inputChangeHandler} name={'subject'} id={'subject'} data={data.subject} error={errors.subject} />
        </div>
        <div className='flex flex-col gap-y-2 items-start w-full'>
            <FormTextArea placeholder={'Enter here...'} label={'Your Message *'} inputChangeHandler={inputChangeHandler} name={'message'} id={'message'} data={data.message} error={errors.message} />
        </div>
        <div><button type='submit' className='font-poppins text-white bg-zinc p-3 min-w-40 cursor-pointer shadow-xs text-base hover:bg-zinc-dark transition-colors ease-linear duration-200'>Send Message</button></div>
    </form>
}