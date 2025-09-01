import { Link } from "@inertiajs/react";
import { SectionLink } from "../../Shared/Admin/SectionLink";

export let CategorySection = ({ categories }) => {

    return <div className="flex w-full bg-white shadow rounded flex-col gap-y-5 p-5">

        <div className={`w-full flex flex-row gap-x-5  items-center justify-between border-b-[1px] border-gray-300 pb-4`}>
            <h4 className={`font-poppins text-lg font-medium text-semi-black `}>Parent Categories</h4>

            <SectionLink path={'categories.create'} title={'Add Category'} />

        </div>
        <div className="w-full flex flex-row gap-10 flex-wrap items-start justify-start">
            <p>Here All the current categories will be displayed</p>
        </div>
    </div>;
}