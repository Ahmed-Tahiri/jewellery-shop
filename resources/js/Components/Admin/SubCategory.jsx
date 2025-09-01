import { useForm } from "@inertiajs/react";
import { SubCategoryCard } from "./SubCategoryCard";
import { FormTextInput } from "../../Shared/FormTextInput";
import { FormTextArea } from "../../Shared/FormTextArea";
import { useEffect, useState } from "react";


export let SubCategory = ({ subcategories, setSubcategories, canAdd }) => {
    let { submit, errors, data, setData, reset, setError, clearErrors } = useForm({
        name: '',
        description: '',
    });

    let subCategoryRemoveHandler = (id) => {
        setSubcategories(prev => prev.filter(cat => cat.id !== id));
    }
    const subCategoryFormHandler = (e) => {
        e.preventDefault();
        const name = data.name.trim();
        const description = data.description.trim();
        if (!name) {
            return setError("name", "Subcategory name is required.");
        }
        if (name.length < 3) {
            return setError("name", "Subcategory name must be at least 3 characters long.");
        }
        if (name.length > 50) {
            return setError("name", "Subcategory name cannot exceed 50 characters.");
        }
        const namePattern = /^[A-Za-z\s'-]+$/;
        if (!namePattern.test(name)) {
            return setError(
                "name",
                "Subcategory name can only contain letters, spaces, hyphens (-), and apostrophes (')."
            );
        }
        const nameExists = subcategories.some(
            (cat) => cat.name.toLowerCase() === name.toLowerCase()
        );
        if (nameExists) {
            return setError("name", "This subcategory name already exists. Please choose a unique name.");
        }
        if (!description) {
            return setError("description", "Description is required.");
        }
        if (description.length < 10) {
            return setError("description", "Description must be at least 10 characters long.");
        }

        setSubcategories((prev) => [
            ...prev,
            { id: Date.now(), name: data.name.trim(), description: data.description.trim() },
        ]);
        clearErrors();
        reset();
    };


    useEffect(() => { }, [subcategories]);
    let inputChangeHandler = (e) => { setData(e.target.name, e.target.value); }
    return <div className="w-4/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
        <h6 className="font-poppins text-lg font-medium">{`Add Sub Categories (optional)`}</h6>
        <div className={`w-full ${canAdd ? 'mt-5' : ''}`}>
            <div className="w-full flex items-start justify-start flex-col gap-y-3">
                {Array.isArray(subcategories) &&
                    <div className="flex flex-wrap flex-row items-center justify-start gap-4">
                        {subcategories.map((subcategory, idx) => <SubCategoryCard key={`subcategory${idx + 1}`} name={subcategory.name} subCategoryRemoveHandler={subCategoryRemoveHandler} id={subcategory.id} />)}
                    </div>
                }
                <form onSubmit={subCategoryFormHandler} className="w-full flex items-start justify-start flex-col gap-y-3">
                    <FormTextInput label={'Name *'} name={'name'} id={'name'} placeholder={'Enter Sub Category Name'} data={data.name} inputChangeHandler={inputChangeHandler} type={'text'} error={errors.name} />
                    <FormTextArea label={'Description *'} name={'description'} id={'description'} placeholder={'Write Description Here...'} data={data.description} inputChangeHandler={inputChangeHandler} error={errors.description} />
                    {canAdd && <div className="flex w-full items-center justify-end gap-x-2">
                        <button onClick={() => reset()} type="reset" className="flex cursor-pointer items-center justify-center font-poppins text-normal text-base bg-light-gray text-white p-2 min-w-20">Cancel</button>
                        <button type="submit" className="flex cursor-pointer items-center justify-center font-poppins text-normal text-base bg-mustard text-white p-2 min-w-20">Add</button>
                    </div>}
                </form>
            </div>
        </div>
    </div>
}