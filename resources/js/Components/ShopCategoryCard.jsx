import { Link } from "@inertiajs/react"

export let ShopCategoryCard = ({ link, image, name }) => {

    return <Link href={link} className="flex  w-57 flex-col gap-y-3 ">
        <div className="h-76 w-57"><img src={image} alt="Category Image" className="object-cover w-full h-full shadow-sm" /></div>
        <p className="text-semi-black font-poppins text-base w-full text-center font-medium">{name}</p>
    </Link>
}