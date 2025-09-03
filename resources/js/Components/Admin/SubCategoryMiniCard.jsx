import { MdOutlineCancel } from "react-icons/md";
export let SubCategoryMiniCard = ({ sub, subCategoryRemoveHandler }) => {

    return <div className="relative">
        <p className="p-2 bg-yellow-400/40 text-amber-900 font-poppins text-sm shadow-xs">{sub.name}</p>
        <button onClick={() => subCategoryRemoveHandler(sub.id)} className="absolute -top-3 -right-3 p-1"><MdOutlineCancel className="text-lg text-red-700 cursor-pointer" /></button>
    </div>
}