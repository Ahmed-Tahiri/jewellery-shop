import { useEffect, useState } from "react";
import { AdminSectionSubHeading } from "../../../../Shared/Admin/AdminSectionHeading";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormTextInput } from "../../../../Shared/FormTextInput";
import { FormTextArea } from "../../../../Shared/FormTextArea";
import { ParenCategoryDropDown } from "../../../../Components/Admin/ParentCategoryDropDown";
import { SubCategoryCard } from "../../../../Components/Admin/SubCategoryCard";

export default function Create() {
    const [canAdd, setCanAdd] = useState(false);
    const { categories } = usePage().props;
    const [subcategories, setSubcategories] = useState([]);
    const [parent, setParent] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});
    let { post, errors, data, setData, reset } = useForm({
        parent: parent,
        subcategories: []
    });


    const [subName, setSubName] = useState("");
    const [subDescription, setSubDescription] = useState("");

    useEffect(() => {
        setData("subcategories", subcategories);
    }, [subcategories]);

    useEffect(() => {
        setData("parent", parent);
    }, [parent]);

    let subCategoryRemoveHandler = (id) => {
        setSubcategories((prev) => prev.filter((sub) => sub.id !== id));
    };
    let addSubCategoryHandler = (e) => {
        e.preventDefault();

        const name = subName.trim();
        const description = subDescription.trim();
        const errorsObj = {};

        if (!name) {
            errorsObj.name = "Subcategory name is required.";
        } else if (name.length < 3) {
            errorsObj.name = "Subcategory name must be at least 3 characters long.";
        } else if (name.length > 50) {
            errorsObj.name = "Subcategory name cannot exceed 50 characters.";
        } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
            errorsObj.name = "Subcategory name can only contain letters, spaces, hyphens (-), and apostrophes (').";
        } else if (
            subcategories.some(
                (cat) => cat.name.toLowerCase() === name.toLowerCase()
            )
        ) {
            errorsObj.name = "This subcategory name already exists. Please choose a unique name.";
        }

        if (!description) {
            errorsObj.description = "Description is required.";
        } else if (description.length < 10) {
            errorsObj.description = "Description must be at least 10 characters long.";
        }
        if (Object.keys(errorsObj).length > 0) {
            setFieldErrors(errorsObj);
            return;
        }

        setSubcategories((prev) => [
            ...prev,
            { id: Date.now(), name, description },
        ]);


        setSubName("");
        setSubDescription("");
        setCanAdd(false);
        setFieldErrors({});
    };

    let formSubmitHandler = (e) => {
        e.preventDefault();
        post(route("admin.subcategories.post"));
    };

    let inputChangeHandler = (name, value) => {
        let updatedName = subName;
        let updatedDescription = subDescription;
        if (name === "name") {
            updatedName = value;
            setSubName(value);
        }
        if (name === "description") {
            updatedDescription = value;
            setSubDescription(value);
        }
        const hasAnyValue = [updatedName, updatedDescription].some(
            (val) => val && val.toString().trim() !== ""
        );
        setCanAdd(hasAnyValue);
    };

    return <section className="w-full min-h-170">
        <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex flex-row justify-between items-center">
                <AdminSectionSubHeading heading={"Add Sub Category"} />
                <div className="flex flex-row items-center justify-end">
                    {subcategories.length > 0 ? (<div className="flex flex-row items-center justify-end gap-x-3"> <Link className="cursor-pointer flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={"/admin/categories"} onClick={() => reset()} > Cancel </Link> <button className="cursor-pointer flex items-center justify-center font-poppins text-base bg-mustard text-white p-2 min-w-24" form="categoryForm" > Save All </button> </div>
                    ) : (<Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={"/admin/categories"} onClick={() => reset()} > Cancel </Link>
                    )}
                </div>
            </div>

            <div className="w-full flex gap-5 flex-row-reverse items-start justify-between">
                <div className="w-7/10 p-5 bg-white rounded shadow flex flex-col gap-y-3">
                    <h6 className="font-poppins text-lg font-medium text-semi-black"> Sub Category Information
                    </h6>
                    <div className="w-full mt-5">
                        <div className="w-full flex flex-wrap justify-start items-center flex-row gap-5"> {subcategories.map((sub, i) => (<SubCategoryCard key={sub.id} sub={sub} subCategoryRemoveHandler={subCategoryRemoveHandler} />))} </div>

                        <form id="categoryForm" onSubmit={formSubmitHandler} className="w-full flex items-start justify-start flex-col gap-y-3" >

                            {errors.subcategories && (<span className="text-red-700 text-sm mt-2">{errors.subcategories}</span>)}

                            <FormTextInput label={"Name *"} name={"name"} id={"name"} placeholder={"Enter Sub Category Name"} data={subName} inputChangeHandler={(e) => inputChangeHandler(e.target.name, e.target.value)} type={"text"} error={fieldErrors.name} />
                            <FormTextArea label={"Description *"} name={"description"} id={"description"} placeholder={"Write Description Here..."} data={subDescription} inputChangeHandler={(e) => inputChangeHandler(e.target.name, e.target.value)} error={fieldErrors.description} />

                            {canAdd && (<div className="flex w-full items-center justify-end gap-x-2">
                                <button onClick={() => { setSubName(""); setSubDescription(""); setCanAdd(false); }} type="button" className="flex cursor-pointer items-center justify-center font-poppins text-normal text-base bg-light-gray text-white p-2 min-w-20"> Cancel</button>
                                <button onClick={addSubCategoryHandler} type="button" className="flex cursor-pointer items-center justify-center font-poppins text-normal text-base bg-mustard text-white p-2 min-w-20"> Add</button>
                            </div>)}
                        </form>
                    </div>
                </div>


                <div className="w-3/10 p-5 bg-white rounded shadow flex flex-col gap-y-3 min-h-111">
                    <h6 className="font-poppins text-lg font-medium text-semi-black"> Select Parent Category  </h6>
                    <div className="w-full mt-5"> <ParenCategoryDropDown categories={categories} setParent={setParent} />   </div>
                </div>
            </div>
        </div>
    </section>
}

