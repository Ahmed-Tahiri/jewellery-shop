import { FormTextArea } from "../../Shared/FormTextArea";
import { FormTextInput } from "../../Shared/FormTextInput";

export let ProductForm = ({ errors, data, inputChangeHandler }) => {


    return (<div className="w-full p-5 bg-white rounded shadow flex flex-col gap-y-3">
        <h6 className="font-poppins text-lg font-medium">Basic Information</h6>
        <div className="w-full mt-5">
            <div className="w-full flex items-start justify-start flex-col gap-y-3">
                <FormTextInput label={'Name *'} name={'name'} id={'name'} placeholder={'Enter Category Name'} data={data.name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.name} />
                <FormTextArea label={'Description *'} name={'description'} id={'description'} placeholder={'Write Description Here...'} data={data.description} inputChangeHandler={inputChangeHandler} error={errors.description} />
            </div>
        </div>
    </div>)
}