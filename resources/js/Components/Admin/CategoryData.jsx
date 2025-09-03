export let CategoryData = ({ heading, data }) => {
    return <div className="w-full flex flex-col ">
        <p className="font-poppins text-base font-medium text-semi-black">{heading}</p>
        {data instanceof Object ? (<ul>

            {data.map((subcat, idx) => <li key={`subcat${idx + 1}`} className="text-light-gray list-disc ms-4">{subcat.name}</li>)}
        </ul>)
            : (<p className="font-poppins text-base font-normal text-light-gray">{data}</p>)}

    </div>
}