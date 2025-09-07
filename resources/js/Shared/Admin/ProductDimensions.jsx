import { useEffect, useState } from "react";
import { FormNumInput } from "../FormNumInput";

export let DimensionInput = ({ label, field, dimensions, inputChangeHandler }) => {
    return (
        <div className="flex items-center gap-x-3">


            <FormNumInput label={label} name={field} id={field} data={dimensions[field].value} inputChangeHandler={(e) => inputChangeHandler(e, field)} />

            <div className="flex flex-col gap-y-0.5">
                <label className="flex text-sm font-poppins font-medium text-semi-black cursor-pointer gap-x-0.5">
                    <input type="radio" name={`${field}Unit`} value="cm" checked={dimensions[field].unit === "cm"} onChange={(e) => inputChangeHandler(e, field)} />{" "}
                    cm
                </label>
                <label className="flex text-sm font-poppins font-medium text-semi-black cursor-pointer gap-x-0.5">
                    <input type="radio" name={`${field}Unit`} value="mm" checked={dimensions[field].unit === "mm"} onChange={(e) => inputChangeHandler(e, field)} />{" "}
                    mm
                </label>
            </div>
        </div>
    );
};


export let ProductDimensions = ({ setData, errors, setCanEdit }) => {
    const [dimensions, setDimensions] = useState({
        height: { value: "", unit: "mm" },
        width: { value: "", unit: "mm" },
        length: { value: "", unit: "mm" },
        diameter: { value: "", unit: "mm" },
    });

    const inputChangeHandler = (e, field) => {
        const { value, type } = e.target;
        setDimensions((prev) => ({
            ...prev,
            [field]: {
                ...prev[field],
                value: type === "number" ? value : prev[field].value,
                unit: type === "radio" ? value : prev[field].unit,
            },
        }));
        setCanEdit(true);
    };
    useEffect(() => {
        setData("dimensions", dimensions);
    }, [dimensions, setData]);

    return (
        <div className=" flex flex-col gap-y-3 my-5">
            <h6 className="sm:text-lg text-base font-poppins font-medium text-semi-black">Dimensions *</h6>
            {errors.dimensions && (<span className="text-red-700 text-sm -mt-1">{errors.dimensions}</span>)}
            <div className="flex flex-col gap-y-4 w-full">
                <DimensionInput error={errors.dimensions} label="Height" field="height" dimensions={dimensions} inputChangeHandler={inputChangeHandler} />
                <DimensionInput error={errors.dimensions} label="Width" field="width" dimensions={dimensions} inputChangeHandler={inputChangeHandler} />
                <DimensionInput error={errors.dimensions} label="Length" field="length" dimensions={dimensions} inputChangeHandler={inputChangeHandler} />
                <DimensionInput error={errors.dimensions} label="Diameter" field="diameter" dimensions={dimensions} inputChangeHandler={inputChangeHandler} />
            </div>
        </div>
    );
}
