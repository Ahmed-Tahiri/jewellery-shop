import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import { NewArrivalJewelleryCard } from "./NewArrivalJewelleryCard";
import PlantImage from './../../images/plants.png';
import { usePage } from "@inertiajs/react";

export let NewArrivals = () => {

    const { products } = usePage().props;
    return (<div className="flex relative bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20 overflow-hidden">
        <div className="absolute top-10 -left-15 h-40 z-50"><img className="h-40 transform-scale-y-[-1] rotate-340" src={PlantImage} alt="Leaf Image for design" /></div>
        <div className="absolute bottom-44 -right-12 h-30 z-50"><img className="h-30 transform-scale-y-[-1] rotate-245" src={PlantImage} alt="Leaf Image for design" /></div>
        <div className="w-full flex flex-row items-start justify-between  max-w-7xl gap-x-20 ">


            <div className="w-full flex flex-col items-center justify-center gap-y-14">
                <div className="w-full flex flex-col gap-y-3">
                    <div className="flex flex-row items-end justify-between w-full gap-x-10">
                        <div className="flex flex-col gap-y-3 w-1/2">
                            <SectionSubHeading heading={'New Arrival'} />
                            <SectionMainHeading heading={'New Arrival Products'} />
                        </div>
                        <p className="w-1/2 text-semi-black font-poppins text-base">
                            Step into elegance with our newest arrivals jewellery that speaks of artistry, captures attention, and turns every moment into a statement of style.
                        </p>
                    </div>

                </div>
                <div className="w-full flex flex-row  gap-x-10">
                    {products.map((product) => <NewArrivalJewelleryCard key={`newArrivalProductCard${product.id}`} productData={product} />)}

                </div>
            </div>
        </div>
    </div>)
}