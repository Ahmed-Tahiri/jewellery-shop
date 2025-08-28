import LeafImg from './../../images/leaf.png';
export let SectionHeading = ({ heading, breadcrumb }) => {
    return <div className="overflow-hidden w-full h-20 lg:h-50 bg-powder-gray relative">
        <div className='absolute left-2 lg:left-36 -bottom-5 lg:-bottom-10'>
            <img src={LeafImg} alt='leafImg' className='h-20 lg:h-50 transform scale-y-[-1]' />
        </div>
        <div className='absolute right-2 lg:right-36 -top-5 lg:-top-10'>
            <img src={LeafImg} alt='leafImg' className='h-20 lg:h-50 transform scale-x-[-1] ' />
        </div>
        <div className='w-full flex items-center justify-center flex-col gap-y-1 lg:gap-y-5 h-full z-10 relative'>
            <h2 className='font-mod20 text-semi-black text-3xl lg:text-5xl'>{heading}</h2>
            <p className='font-poppins text-semi-black text-xs lg:text-lg font-medium'>{breadcrumb}</p>
        </div>
    </div>
}