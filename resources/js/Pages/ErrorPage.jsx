import { usePage } from "@inertiajs/react";
import { Error } from "../Components/Error";
import { SaleHeading } from "../Components/SaleHeading";
import { Footer } from "../Shared/Footer";
import { Header } from "../Shared/Header";

export default function ErrorPage({ status, role }) {


    const isAdmin = role === 'admin';
    const errorData = {
        403: {
            code: "403",
            message: "Forbidden",
            description: "Sorry, you are forbidden from accessing this page.",
            redirectTitle: isAdmin ? "Go to Dashboard" : "Go To Home Page",
            redirectPath: isAdmin ? "/admin" : "/",
        },
        404: {
            code: "404",
            message: "Page Not Found",
            description: "The page you are looking for cannot be found. Take a break before trying again.",
            redirectTitle: isAdmin ? "Go to Dashboard" : "Go To Home Page",
            redirectPath: isAdmin ? "/admin" : "/"
        },

        500: {
            code: "500",
            message: "Server Error",
            description: "Whoops, something went wrong on our servers.",
            redirectTitle: isAdmin ? "Go to Dashboard" : "Go To Home Page",
            redirectPath: isAdmin ? "/admin" : "/",
        },
        419: {
            code: "419",
            message: "Page Expired",
            description: "The page expired, please try again.",
            redirectTitle: isAdmin ? "Go to Dashboard" : "Go To Home Page",
            redirectPath: isAdmin ? "/admin" : "/",
        },
        503: {
            code: "503",
            message: "Service Unavailable",
            description: "Sorry, we are doing some maintenance. Please check back soon.",
            redirectTitle: isAdmin ? "Go to Dashboard" : "Go To Home Page",
            redirectPath: isAdmin ? "/admin" : "/",
        },
    };

    const { code, message, description, redirectTitle, redirectPath } =
        errorData[status] || errorData[500];
    return (
        <section className="w-full">
            <SaleHeading />
            <Header />
            <Error
                code={code}
                message={message}
                description={description}
                redirectTitle={redirectTitle}
                redirectPath={redirectPath}
            />
            <Footer />
        </section>
    );
}
