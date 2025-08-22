import { usePage } from "@inertiajs/react";
export let AdminName = () => {
    const { auth } = usePage().props || {};
    let adminFirstName = auth?.firstName || "Super";
    let adminLastName = auth?.lastName || "Admin";
    let adminName = `${adminFirstName} ${adminLastName}`
    return <span>{adminName}</span>
}