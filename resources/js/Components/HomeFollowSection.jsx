import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import FollowUsMainImg from './../../images/FollowUsMainImg.jpg';
import FollowImg1 from './../../images/followImg1.jpg';
import FollowImg2 from './../../images/followImg2.jpg';
import FollowImg3 from './../../images/followImg3.jpg';
import FollowImg4 from './../../images/followImg4.jpg';
import FollowImg5 from './../../images/followImg5.jpg';
import FollowImg6 from './../../images/followImg6.jpg';
import FollowImg7 from './../../images/followImg7.jpg';
import FollowImg8 from './../../images/followImg8.jpg';

export let HomeFollowSection = () => {

    return (<div className="flex bg-powder-gray justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
                <SectionSubHeading heading={'Follow Us'} />
                <SectionMainHeading heading={'Follow Us On Instagram'} />
            </div>
            <div className='w-full gap-5 flex flex-row items-center justify-between'>
                <div className="w-1/3 h-100 flex flex-row flex-wrap  gap-5">
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg1} alt="Follow Sub Image" /></div>
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg2} alt="Follow Sub Image" /></div>
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg3} alt="Follow Sub Image" /></div>
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg4} alt="Follow Sub Image" /></div>
                </div>
                <div className="w-1/3 h-100"><img src={FollowUsMainImg} alt="Follow Us Main Image" /></div>
                <div className="w-1/3 h-100 flex flex-row flex-wrap  gap-5">
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg5} alt="Follow Sub Image" /></div>
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg6} alt="Follow Sub Image" /></div>
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg7} alt="Follow Sub Image" /></div>
                    <div className="w-[47.5%] aspect-square"><img className="w-full aspect-square shadow-xs" src={FollowImg8} alt="Follow Sub Image" /></div>
                </div>
            </div>
        </div>
    </div>)
}