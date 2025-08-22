import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";


export default function Dashboard() {
    const { auth } = usePage().props || {};
    const adminName = auth?.firstName || "Admin";

    return (
        <h1>hello</h1>
    );
}
