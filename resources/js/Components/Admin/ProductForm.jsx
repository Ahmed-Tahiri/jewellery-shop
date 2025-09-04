import { FormTextArea } from "../../Shared/FormTextArea";
import { FormTextInput } from "../../Shared/FormTextInput";

export let ProductForm = ({ errors, data, inputChangeHandler }) => {


    return (<div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
        <h6 className="font-poppins text-lg font-medium">Basic Information</h6>
        <div className="w-full mt-5">
            <div className="w-full flex items-start justify-start flex-col gap-y-3">
                <FormTextInput label={'Product Name *'} name={'product_name'} id={'productName'} placeholder={'Enter Product Name'} data={data.product_name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.product_name} />
                <FormTextArea label={'Description *'} name={'description'} id={'description'} placeholder={'Write Description Here...'} data={data.description} inputChangeHandler={inputChangeHandler} error={errors.description} />
            </div>
        </div>
    </div>)
}