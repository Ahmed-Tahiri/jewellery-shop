import { PriceRangeSlider } from "../../../Components/PriceRangeSlider";
import MainLayout from "../../../Layouts/MainLayout"
import { ColorStrip } from "../../../Shared/ColorStrip";
import { FilterCheckbox } from "../../../Shared/FilterCheckbox";
import { DropDown } from './../../../Shared/Admin/DropDown';
import { IoClose } from "react-icons/io5";
import { JewelleryCard } from './../../../Components/JewelleryCard';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


export let SelectedFilterCard = ({ label, id }) => {
    return <div className="p-2 bg-mustard text-zinc-dark flex gap-x-0.5 items-center justify-center">
        <p className="font-poppins font-medium text-base">{label}</p>
        <button className="p-1 cursor-pointer"><IoClose className="text-xl text-zinc-dark" /></button>
    </div>
}

export default function Index({ materials, categories, colors, product }) {

    const availabilities = [
        { id: 1, status: 'in stock', name: 'In Stock' },
        { id: 2, status: 'out of stock', name: 'Out Of Stock' },
    ];
    const sorting = [
        { id: 1, name: 'Price (Low - High)' },
        { id: 2, name: 'Price (High - Low)' },
    ];
    return (
        <section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
            <div className="w-full flex flex-row items-start justify-between gap-x-10  max-w-7xl ">
                <div className="w-1/4 flex flex-col items-start gap-y-5">
                    <h2 className="font-poppins text-semi-black text-2xl font-semibold  pb-5 border-b-2 border-gray-300 w-full">Filter Options</h2>
                    <div className="flex flex-col w-full items-start gap-y-2  border-b-2 border-gray-300 pb-5">
                        <h6 className="font-poppins text-lg font-medium">Category</h6>
                        <div className="flex flex-col items-start  gap-y-2 w-full h-60 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-rounded-full  scrollbar-thumb-zinc-dark scrollbar-track-gray-300 scrollbar-track-rounded-full overflow-y-auto py-3">
                            {categories.map((cat, idx) => (<FilterCheckbox key={`categoryDisplay${cat.id}`} label={cat.name} id={`categoryCheckBox${cat.id}`} name={'category'} />))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start gap-y-2   pb-5 border-b-2 border-gray-300">
                        <h6 className="font-poppins text-lg font-medium">Price</h6>
                        <PriceRangeSlider currency="Rs" max={200000} min={0} initialMin={2000} initialMax={30000} />
                    </div>
                    <div className="flex flex-col w-full items-start gap-y-2   pb-5 border-b-2 border-gray-300">
                        <h6 className="font-poppins text-lg font-medium">Color</h6>
                        <div className="flex flex-col items-start  gap-y-2 w-full h-60 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-rounded-full  scrollbar-thumb-zinc-dark scrollbar-track-gray-300 scrollbar-track-rounded-full overflow-y-auto py-3">
                            {colors.map((clr, idx) => (<ColorStrip key={`ColorDisplay${clr.id}`} color={clr} />))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start gap-y-2  border-b-2 border-gray-300 pb-5">
                        <h6 className="font-poppins text-lg font-medium">Materials</h6>
                        <div className="flex flex-col items-start  gap-y-2 w-full h-60 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-rounded-full  scrollbar-thumb-zinc-dark scrollbar-track-gray-300 scrollbar-track-rounded-full overflow-y-auto py-3">
                            {materials.map((metal, idx) => (<FilterCheckbox key={`materialDisplay${metal.id}`} label={metal.name} id={`materialCheckBox${metal.id}`} name={'material'} />))}
                        </div>
                    </div>
                    <div className="flex flex-col w-full items-start gap-y-2  ">
                        <h6 className="font-poppins text-lg font-medium">Availability</h6>
                        <div className="flex flex-col items-start  gap-y-2 w-full  py-3">
                            {availabilities.map((metal, idx) => (<FilterCheckbox key={`materialDisplay${metal.id}`} label={metal.name} id={`materialCheckBox${metal.id}`} name={'material'} />))}
                        </div>
                    </div>
                </div>
                <div className="w-3/4 flex gap-y-5 flex-col items-start">
                    <div className="w-full flex item-center justify-between">
                        <p className="font-poppins text-semi-black text-[15px] font-medium leading-11">Showing 1-12 of 240 results</p>
                        <div className="w-74 flex flex-row items-start gap-x-5">
                            <p className="text-base font-poppins text-semi-black w-2/6 leading-11 text-center">Sort by :</p>
                            <DropDown data={sorting} dropDownLabel="Default Sorting" />
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-start gap-x-5">
                        <p className="font-poppins text-semi-black text-base font-medium">Active Filter</p>
                        <div className="gap-x-5 flex flex-row items-center justify-start">
                            <SelectedFilterCard label={'Rose Gold'} />
                        </div>
                        <div><button className="font-poppins underline text-zinc cursor-pointer">Clear All</button></div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-7 mt-5">
                        <JewelleryCard bgColor="bg-powder-gray" productData={product} />
                        {/* <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" />
                        <JewelleryCard bgColor="bg-powder-gray" /> */}
                    </div>
                    <div className="flex w-full items-center justify-center mt-5">
                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><FaChevronLeft className="text-lg text-zinc-dark" /></button></div>

                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><span className="font-poppins text-lg font-medium semibold">1</span></button></div>
                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><span className="font-poppins text-lg font-medium semibold">2</span></button></div>
                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><span className="font-poppins text-lg font-medium semibold">3</span></button></div>
                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><span className="font-poppins text-lg font-medium semibold">...</span></button></div>
                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><span className="font-poppins text-lg font-medium semibold">10</span></button></div>
                        <div><button className="flex h-10 aspect-square hover:bg-mustard items-center justify-center  cursor-pointer"><FaChevronRight className="text-lg text-zinc-dark" /></button></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

Index.layout = page => (<MainLayout heading={'Shop'} breadcrumb={'Home / Shop'}>{page}</MainLayout>);