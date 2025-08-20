import { Link, useForm } from "@inertiajs/react";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const inputChangeHandler = (e) => { setData(e.target.name, e.target.value); };

    const submitHandler = (e) => {
        e.preventDefault();
        post("/signup", {
            onSuccess: () => {
                reset("password", "password_confirmation");
            },
        });
    };

    const handleReset = () => { reset(); };

    return (
        <section className="">

        </section>
    );
}
