import { PriceRangeSlider } from "../../../Components/PriceRangeSlider";
import MainLayout from "../../../Layouts/MainLayout"
import { ColorStrip } from "../../../Shared/ColorStrip";
import { FilterCheckbox } from "../../../Shared/FilterCheckbox";

export default function Index({ materials, categories, colors }) {

    const availabilities = [
        { id: 1, status: 'in stock', name: 'In Stock' },
        { id: 2, status: 'out of stock', name: 'Out Of Stock' },
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
                <div className="w-3/4"></div>
            </div>
        </section>
    );
}

Index.layout = page => (<MainLayout heading={'Shop'} breadcrumb={'Home / Shop'}>{page}</MainLayout>);