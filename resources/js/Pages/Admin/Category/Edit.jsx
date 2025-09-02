import { useState } from "react";
import { AdminSectionSubHeading } from "../../../Shared/Admin/AdminSectionHeading";
import { Link } from "@inertiajs/react";

export default function Edit() {


    return (
        <section className="w-full min-h-170">
            <div className="w-full flex flex-col gap-y-8">
                <div className="w-full flex flex-row justify-between items-center">
                    <AdminSectionSubHeading heading={'Edit Category'} />
                    <div className="flex flex-row items-center justify-end">
                        <Link className="flex items-center justify-center font-poppins text-base bg-light-gray text-white p-2 min-w-24" href={'/admin/categories'}>Back</Link>
                    </div>
                </div>
            </div>
        </section>
    );
} 