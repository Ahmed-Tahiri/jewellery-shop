import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { FaPlus } from "react-icons/fa6";

export let ColorPicker = ({ colors, value, onChange, onAddColor }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [newName, setNewName] = useState("");
    const [newHex, setNewHex] = useState("#cccccc");

    function handleAdd() {
        if (!newName.trim()) return;
        onAddColor && onAddColor({ name: newName.trim(), hex: newHex });
        setNewName("");
        setNewHex("#cccccc");
        setShowAdd(false);
    }

    return (
        <div className="flex flex-col gap-4">
            <h6 className="sm:text-lg text-base font-poppins font-medium text-semi-black">Select Product Color *</h6>
            <div className="flex flex-row items-center justify-start gap-x-2 border-2 border-gray-300 px-3 py-2 flex-wrap">
                {colors.map((c) => (
                    <div className="w-10 text-center">
                        <button
                            key={c.id}
                            type="button"
                            onClick={() => onChange(c.name)}
                            className={`cursor-pointer rounded-full w-full aspect-square border shadow-sm transition  ${value === c.name ? "ring-2 ring-offset-2" : "hover:scale-105"}`}
                            style={{ background: c.hex }}
                            title={c.name}
                        >
                        </button>
                        <span className="text-xs text-semi-black font-poppins">  {c.name}</span>
                    </div>
                ))}
                <div className="w-10 text-center">
                    <button type="button" onClick={() => setShowAdd(true)} className="cursor-pointer aspect-square shadow-sm rounded-full w-full border-dashed border-2 text-sm flex items-center justify-center hover:bg-gray-100" > <FaPlus /></button>
                    <span className="text-xs w-full text-black text-center font-poppins mt-3 inline-block">New </span>
                </div>
            </div>

            {showAdd && (
                <div className="p-4 border-2 border-gray-300  space-y-3 mt-3 w-full">
                    <div className="text-base font-poppins  text-semi-black font-medium w-full">Add New Color</div>
                    <input
                        type="text"
                        placeholder="Enter New Color Name"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="border-2 font-poppins border-gray-300 shadow-xs w-full sm:p-2 p-1.5 text-semi-black outline-0  focus:border-light-gray focus:border-[3px]  transition-all ease-linear duration-200 text-sm sm:text-base"
                    />
                    <HexColorPicker color={newHex} onChange={setNewHex} style={{ width: '100%' }} />
                    <div className="flex gap-2">
                        <button onClick={() => setShowAdd(false)} className="px-4 flex-1 py-2 bg-mustard text-white shadow-sm text-sm font-poppins cursor-pointer ease-linear transition-colors duration-200 hover:bg-mustard-dark">Cancel</button>
                        <button onClick={handleAdd} className="px-4 flex-1 py-2 bg-zinc text-white shadow-sm text-sm font-poppins cursor-pointer ease-linear transition-colors duration-200 hover:bg-zinc-dark" >Save</button>
                    </div>
                </div>
            )}
        </div>
    );
}
