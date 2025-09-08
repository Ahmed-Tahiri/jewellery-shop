import { usePage } from "@inertiajs/react";

export let CleanURL = () => {
    let { url } = usePage();
    let cleanUrl = url.split('?')[0];
    return cleanUrl;
}