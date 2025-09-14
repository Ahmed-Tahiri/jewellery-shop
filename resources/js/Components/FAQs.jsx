import { SectionMainHeading } from "../Shared/SectionMainHeading";
import { SectionSubHeading } from "../Shared/SectionSubHeading";
import { FAQCard } from "./FAQCard";


export let FAQ = () => {
    const faqs = [
        {
            question: "Do you offer custom jewelry design services?",
            answer: "Yes, we do! Our expert designers work closely with you to bring your vision to life, whether it’s a unique engagement ring or a personalized jewelry piece made just for you."
        },
        {
            question: "How should I care for my jewelry?",
            answer: "To keep your jewelry shining, store it in a dry place and avoid contact with harsh chemicals. Regularly clean it with a soft cloth to maintain its sparkle and beauty."
        },
        {
            question: "How do I determine my ring size?",
            answer: "You can use our online ring size guide or visit a local jeweler for the most accurate measurement. For convenience, we also provide printable sizing tools on our website."
        },
        {
            question: "What is your return policy?",
            answer: "We accept returns within 7 days of purchase if the item is unworn and in its original condition. Please review our full return policy for details on exchanges and refunds."
        },
        {
            question: "What are your customer service hours?",
            answer: "Our customer service team is available 24/7. You can reach us via email, phone, or live chat during business hours."
        },
        {
            question: "Do you offer gift wrapping?",
            answer: "Currently, we do not provide gift wrapping services. However, each order is carefully packaged in our elegant jewelry boxes, perfect for gifting."
        }
    ];

    return (<div className="flex bg-white justify-center items-center py-30 px-5 md:px-10 lg:px-15 xl:px-20">
        <div className="w-full flex flex-col items-center justify-center gap-y-14  max-w-7xl gap-10 ">
            <div className="w-full flex flex-col items-center justify-center gap-y-4">
                <SectionSubHeading heading={'FAQS'} />
                <SectionMainHeading heading={'Questions? Look here.'} />
            </div>
            <div className='w-full gap-y-4 flex flex-col items-start justify-start'>
                {faqs.map((faq, idx) => <FAQCard key={`FAQCard${idx + 1}`} question={faq.question} answer={faq.answer} />)}
            </div>
        </div>
    </div>);
}