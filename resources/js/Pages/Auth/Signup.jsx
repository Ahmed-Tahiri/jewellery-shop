import { Link, useForm } from "@inertiajs/react";
import { AuthPageSlider } from "../../Components/AuthPageSlider";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function Signup() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const slidesData = [
        {
            img:
                `https://images.pexels.com/photos/21263448/pexels-photo-21263448.jpeg?_gl=1*1aj9cgb*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTE4OTgkajU5JGwwJGgw`,
            quote:
                "This jewelry looks so elegant and eye-catching. The quality feels amazing for the price. I’m really impressed and would definitely recommend it!",
            name: "Emily Grace",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/8856198/pexels-photo-8856198.jpeg?_gl=1*5lp17v*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTA3NjIkajU5JGwwJGgw`,
            quote:
                "I was amazed at how elegant this piece looks in person. The shine is subtle yet very classy. It’s definitely my new favorite accessory!",
            name: "Olivia Rose",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/26840477/pexels-photo-26840477.jpeg?_gl=1*1oi627h*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTEwMTQkajU5JGwwJGgw`,
            quote:
                "The design is so delicate and beautiful. It shines perfectly under any light, making it look luxurious. I feel really confident wearing this piece!",
            name: "Yuna Jiwoo",
            role: "Happy Customer",
        },
        {
            img:
                `https://images.pexels.com/photos/15983835/pexels-photo-15983835.jpeg?_gl=1*1b6c5yk*_ga*ODAwMTM2Njc2LjE3NTU2OTA1NzE.*_ga_8JE65Q40S6*czE3NTU2OTA1NzAkbzEkZzEkdDE3NTU2OTA4ODQkajU5JGwwJGgw`,
            quote:
                "The craftsmanship is really impressive for the price. It feels lightweight yet durable, perfect for daily wear. I’ve already had a few friends ask where I bought it!",
            name: "Hannah Grace",
            role: "Happy Customer",
        },

    ];
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
        <section className="w-full min-h-screen h-screen bg-white flex justify-center items-center">
            <div className="w-full h-full flex flex-row">
                <AuthPageSlider slidesData={slidesData} />
                <AiOutlineEyeInvisible />
                <AiOutlineEye />
            </div>
        </section>
    );
}
