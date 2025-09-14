import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";


export let HomeFollowSection = () => {

    return (<div className="flex bg-white justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
                <SectionSubHeading heading={'Follow Us'} />
                <SectionMainHeading heading={'Follow Us On Instagram'} />
            </div>
            <div className='w-full gap-x-5 flex items-start justify-between'>

            </div>
        </div>
    </div>)
}