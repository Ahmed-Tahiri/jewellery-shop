import { SectionMainHeading } from "../Shared/SectionMainHeading"
import { SectionSubHeading } from "../Shared/SectionSubHeading"
import CEOImage from './../../images/CEOImg.jpg';
import Designer1Img from './../../images/DesignerImg.jpg';
import Designer2Img from './../../images/Designer2Img.jpg';


export let TeamMemberCard = ({ imgSrc, name, designation }) => {
    return (<div className="flex flex-col gap-y-4">
        <div className="w-60 aspect-square bg-powder-gray shadow-xs">
            <img src={imgSrc} className="w-full aspect-square object-cover" alt="Team Member's Image" />
        </div>
        <div className="w-60 flex flex-col gap-y-1 items-center">
            <p className="font-poppins text-semi-black font-medium text-xl">{name}</p>
            <p className="text-dark-gray font-poppins  text-sm font-medium">{`[ ${designation} ]`}</p>
        </div>
    </div>)
}

export let OurTeam = () => {
    return (<section className="flex bg-white justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-5">
                <SectionSubHeading heading={'Our Team'} />
                <SectionMainHeading heading={'MEET OUR TEAM'} />
            </div>
            <div className='w-full gap-8 flex flex-row items-center justify-center'>
                <TeamMemberCard name={'Jenny Alexander'} designation={'CEO, Jewellery Store'} imgSrc={CEOImage} />
                <TeamMemberCard name={'Leslie Alexander'} designation={'Designer'} imgSrc={Designer1Img} />
                <TeamMemberCard name={'Cody Fisher'} designation={'Designer'} imgSrc={Designer2Img} />
            </div>
        </div>
    </section>
    )
}
