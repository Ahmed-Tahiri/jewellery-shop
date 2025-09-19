export const SummaryDataComponent = ({ heading, data }) => {
    return <div className="flex w-full items-center justify-between">
        <p className="font-poppins text-light-gray font-medium text-base">{heading}</p>
        <p className="font-poppins text-base text-semi-black font-medium">{data}</p>
    </div>
}