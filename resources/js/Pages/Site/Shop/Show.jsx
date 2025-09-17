import { useEffect, useMemo, useState } from "react";
import MainLayout from "../../../Layouts/MainLayout";
import { ProductImagesCarousel } from './../../../Shared/ProductImagesCarousel';
import { getDiscount } from "../../../Utilities/getDiscount";
import FormatPKR from './../../../Utilities/FormatPKR';
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { ProductAdditionalInfo } from "../../../Components/ProductAdditionalInfo";

export let VariantMiniCard = ({ value }) => {
    return <div><button className="p-1.5  text-zinc-dark font-poppins text-lg font-medium min-w-14 h-11 cursor-pointer border-[1px] border-gray-300 hover:bg-mustard transition-colors ease-linear duration-200" >{value}</button></div>
}

export default function Show({ product }) {

    const [carouselImagesArr, setCarouselImagesArr] = useState(product.defaultVariant.images);
    const price = product?.price ?? 0;
    const discountPercentage = product?.discount ?? 0;
    const discountedPrice = useMemo(() => getDiscount(price, discountPercentage), [price, discountPercentage]);
    const [isMetalsSame, setIsMetalSame] = useState(false);
    const [isPuritySame, setIsPuritySame] = useState(false);
    const [isFinishSame, setIsFinishSame] = useState(false);
    const [isSizeSame, setIsSizeSame] = useState(false);
    const [isColorSame, setIsColorSame] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(null);
    const [purities, setPurities] = useState(null);
    const [colors, setColors] = useState(null);
    const [metals, setMetals] = useState(null);
    const [sizes, setSizes] = useState(null);
    const [finishes, setFinishes] = useState(null);

    const tags = [];
    for (const key in product.tags) {
        const element = product.tags[key];
        tags.push(element.name);
    };


    let cartIncHandler = () => { setCartQuantity(prev => prev + 1); }
    let cartDecHandler = () => { if (cartQuantity > 1) { setCartQuantity(prev => prev - 1); } }

    useEffect(() => {
        const metals = product.variants.map(v => v.metal.name);
        setIsMetalSame(new Set(metals).size === 1);
        const purities = product.variants.map(v => v.metal_purity.purity);
        setIsPuritySame(new Set(purities).size === 1);
        const finishes = product.variants.map(v => v.finish.name);
        setIsFinishSame(new Set(finishes).size === 1);
        const sizes = product.variants.map(v => v.size);
        setIsSizeSame(new Set(sizes).size === 1);
        const colors = product.variants.map(v => v.color_tone.hex_code);
        setIsColorSame(new Set(colors).size === 1);
        setMetals([...new Set(metals)]);
        setPurities([...new Set(purities)]);
        setColors([...new Set(colors)]);
        setSizes([...new Set(sizes)]);
        setFinishes([...new Set(finishes)]);

    }, [product.variants]);
    useEffect(() => {
        if (selectedColor) {
            let selectedVariant = selectedColor && product.variants.find((variant) => variant.color_tone.hex_code.toLowerCase() === selectedColor.toLowerCase());
            setCarouselImagesArr(selectedVariant.images);
        }
    }, [selectedColor])
    return (<section className="flex bg-white justify-center items-center py-20 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-start justify-between gap-y-10  max-w-7xl ">
            <div className="flex items-start w-full justify-between flex-row gap-x-10">
                <div className="w-4/10">
                    <ProductImagesCarousel images={carouselImagesArr} />
                </div>
                <div className="w-6/10 flex flex-col gap-y-5">
                    <div className="w-full flex flex-col gap-y-6 items-star py-6 border-b-2 border-gray-300">
                        <div className="w-full flex flex-col gap-y-2">
                            <p className="text-base font-poppins capitalize text-dark-gray font-medium">{product?.category}</p>
                            <div className="flex flex-row gap-x-2 justify-start items-center"><p className="font-poppins text-2xl font-medium text-semi-black">{product?.name}</p><span className="inline-block min-w-20 bg-green-100 py-1 px-1.5 text-center font-poppins text-green-600 font-medium capitalize text-sm border-2 border-green-600">{product.defaultVariant.stock_status}</span></div>
                        </div>
                        <p className="flex gap-x-3 items-center ">
                            <span className="text-xl font-poppins font-semibold text-semi-black">{FormatPKR(discountedPrice)}</span>
                            <span className="text-xl font-poppins font-medium text-dark-gray  line-through">{FormatPKR(price)}</span>
                        </p>
                        <p className="text-base font-poppins font-normal text-dark-gray ">{product?.shortDescription}</p>
                        {!isPuritySame && <div className="flex flex-col w-full gap-y-1.5">
                            <p className="font-poppins text-xl font-medium text-semi-black">Purity</p>
                            <div className="flex w-full flex-wrap items-center justify-start gap-x-2">
                                {purities?.map((purity, idx) => <VariantMiniCard key={`VariantPurityCard${idx + 1}`} value={purity} />)}
                            </div>
                        </div>}
                        {!isMetalsSame && <div className="flex flex-col w-full gap-y-1.5">
                            <p className="font-poppins text-xl font-medium text-semi-black">Metal</p>
                            <div className="flex w-full flex-wrap items-center justify-start gap-x-2">
                                {metals?.map((metal, idx) => <VariantMiniCard key={`VariantMetalCard${metal + 1}`} value={metal} />)}
                            </div>
                        </div>}
                        {!isFinishSame && <div className="flex flex-col w-full gap-y-1.5">
                            <p className="font-poppins text-xl font-medium text-semi-black">Finish</p>
                            <div className="flex w-full flex-wrap items-center justify-start gap-x-2">
                                {finishes?.map((finish, idx) => <VariantMiniCard key={`VariantFinishCard${idx + 1}`} value={finish} />)}
                            </div>
                        </div>}
                        {!isSizeSame && <div className="flex flex-col w-full gap-y-1.5">
                            <p className="font-poppins text-xl font-medium text-semi-black">Size</p>
                            <div className="flex w-full flex-wrap items-center justify-start gap-x-2">
                                {sizes?.map((size, idx) => <VariantMiniCard key={`VariantSizeCard${idx + 1}`} value={size} />)}
                            </div>
                        </div>}
                        {!isColorSame && <div className="flex flex-col w-full gap-y-1.5">
                            <p className="font-poppins text-xl font-medium text-semi-black">Color</p>
                            <div className="flex w-full flex-wrap items-center justify-start gap-x-3">
                                {colors?.map((color, idx) => <div key={`VariantColorCard${idx + 1}`} className="flex flex-row gap-x-1 items-center">
                                    <button type="button" className="h-11  p-1.5 min-w-14 cursor-pointer border-[1px] border-gray-300  shadow-xs" style={{ backgroundColor: `${color}` }} onClick={() => setSelectedColor(color)} />
                                </div>)}
                            </div>
                        </div>}
                        <div className="flex flex-row gap-x-1.5">
                            <div className="flex flex-row items-center">
                                <button onClick={cartDecHandler} className=" flex items-center justify-center cursor-pointer h-11 aspect-square border-[1px] border-gray-300 shadow-xs hover:bg-mustard text-dark-zinc"><FiMinus className="text-xl text-zinc-dark" /></button>
                                <input readOnly={true} value={cartQuantity} className="cursor-default border-t-[1px] border-b-[1px] font-poppins border-gray-300 shadow-xs h-11 w-10 text-center aspect-square flex items-center justify-center text-zinc-dark outline-0  transition-all ease-linear duration-200 " />
                                <button onClick={cartIncHandler} className=" flex items-center justify-center cursor-pointer h-11 aspect-square border-[1px] border-gray-300 shadow-xs hover:bg-mustard text-dark-zinc"><FiPlus className="text-xl text-zinc-dark" /></button>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5">
                                <div><button type="button" className="py-2 cursor-pointer px-4 h-11 text-base font-poppins text-white font-normal bg-zinc border-[1px] border-gray-300 shadow-xs">Add To Cart</button></div>
                                <div><button type="button" className="py-2 cursor-pointer px-4 shadow-xs h-11 text-base font-poppins bg-mustard font-normal text-zinc-dark border-[1px] border-gray-300">Buy Now</button></div>
                                <div><button type="button" className="p-2 group aspect-square  h-11 text-base font-poppins shadow-xs font-normal bg-transparent border-[1px] border-gray-300 cursor-pointer "><GoHeart className="text-2xl group-hover:hidden text-zinc-dark cursor-pointer" /><GoHeartFill className="text-2xl text-red-500 hidden  group-hover:block" /></button></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-y-0.5">
                        <p><span className="font-poppins text-semi-black font-semibold">SKU :</span> <span className="font-poppins text-dark-gray font-medium">{product.sku}</span></p>
                        <p><span className="font-poppins text-semi-black font-semibold">Tags :</span> <span className="font-poppins text-dark-gray font-medium">{tags.join(', ')}</span></p>
                    </div>
                </div>
            </div>
            <ProductAdditionalInfo product={product} />
        </div>
    </section>)

}


Show.layout = page => {
    const category = page.props?.product?.category ?? 'Shop';
    const breadcrumb = `Home / Shop / ${category} / Shop Details`;
    return (
        <MainLayout heading="Shop" breadcrumb={breadcrumb}>
            {page}
        </MainLayout>
    );
};