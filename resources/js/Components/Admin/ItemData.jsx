export let ItemData = ({ heading, data }) => {
    return <div className="w-full flex flex-col ">
        <p className="font-poppins text-base font-medium text-semi-black">{heading}</p>
        {data instanceof Object ? (<ul>

            {data.map((dt, idx) => <li key={`dt${idx + 1}`} className="text-light-gray list-disc ms-4">{dt.name ?? 'N/A'}</li>)}
        </ul>)
            : (<p className="font-poppins text-base font-normal text-light-gray break-words whitespace-pre-line">{data ?? 'N/A'}</p>)}

    </div>
}