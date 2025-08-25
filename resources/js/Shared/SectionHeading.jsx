import LeafImg from './../../images/leaf.png';
export let SectionHeading = ({ heading, breadcrumb }) => {
    return <div className="overflow-hidden w-full h-50 bg-powder-gray relative">
        <div className='absolute left-36 -bottom-10'>
            <img src={LeafImg} alt='leafImg' className='h-50 transform scale-y-[-1]' />
        </div>
        <div className='absolute right-36 -top-10'>
            <img src={LeafImg} alt='leafImg' className='h-50 transform scale-x-[-1] ' />
        </div>
        <div className='w-full flex items-center justify-center flex-col gap-y-5 h-full'>
            <h2 className='font-mod20 text-semi-black text-5xl'>{heading}</h2>
            <p className='font-poppins text-semi-black text-lg font-medium'>{breadcrumb}</p>
        </div>
    </div>
}