import { usePage } from "@inertiajs/react";
export let AuthFName = () => {
    const { auth } = usePage().props || {};
    let fName = auth?.firstName || null;
    return fName;
}
export let AuthLName = () => {
    const { auth } = usePage().props || {};
    let lName = auth?.lastName || null;
    return lName;
}
export let AuthEmail = () => {
    const { auth } = usePage().props || {};
    let authEmail = auth?.email || null;
    return authEmail;
}
export let AuthAvatar = () => {
    const { auth } = usePage().props || {};

    let authAvatar = auth?.avatar || null;
    return authAvatar;
}

export let AuthLastLogin = () => {
    const { auth } = usePage().props || {};
    let authLastLogin = auth?.lastLogin || null;
    return authLastLogin;
}
export let AuthId = () => {
    const { auth } = usePage().props || {};
    let authId = auth?.id || null;
    return authId;
}