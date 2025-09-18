import { useEffect, useState } from "react";
import { parse, parseISO, isValid } from "date-fns";

export default function SaleCountdown({ target }) {

    const [timeLeft, setTimeLeft] = useState({
        days: "--",
        hours: "--",
        minutes: "--",
        seconds: "--",
    });

    function parseTargetString(s) {
        if (!s) return null;

        const parsed = parse(s, "yyyy-MM-dd HH:mm:ss", new Date());
        if (isValid(parsed)) return parsed;
        try {
            const iso = s.includes("T") ? s : s.replace(" ", "T");
            const parsedIso = parseISO(iso);
            if (isValid(parsedIso)) return parsedIso;
        } catch (e) {

        }
        const dt = new Date(s);
        return isValid(dt) ? dt : null;
    }

    useEffect(() => {
        const targetDate = parseTargetString(target);
        if (!targetDate) {

            setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
            return;
        }

        function update() {
            const now = Date.now();
            let diffSecs = Math.floor((targetDate.getTime() - now) / 1000);
            if (diffSecs < 0) diffSecs = 0;

            const days = Math.floor(diffSecs / 86400);
            diffSecs -= days * 86400;

            const hours = Math.floor(diffSecs / 3600);
            diffSecs -= hours * 3600;

            const minutes = Math.floor(diffSecs / 60);
            const seconds = diffSecs - minutes * 60;
            const pad = (n) => String(n).padStart(2, "0");

            setTimeLeft({
                days: String(days).padStart(2, "0"),
                hours: pad(hours),
                minutes: pad(minutes),
                seconds: pad(seconds),
            });
        }

        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, [target]);

    return (
        <div className="w-full p-1 bg-zinc flex row justify-between items-center gap-x-3 shadow-xs">
            <div className="flex flex-col flex-1 items-center">
                <span className="text-mustard font-poppins text-lg">{timeLeft.days}</span>
                <span className="font-poppins text-white">Days</span>
            </div>

            <span className="text-white font-poppins text-lg">:</span>

            <div className="flex flex-col flex-1 items-center">
                <span className="text-mustard font-poppins text-lg">{timeLeft.hours}</span>
                <span className="font-poppins text-white">Hours</span>
            </div>

            <span className="text-white font-poppins text-lg">:</span>

            <div className="flex flex-col flex-1 items-center">
                <span className="text-mustard font-poppins text-lg">{timeLeft.minutes}</span>
                <span className="font-poppins text-white">Mins</span>
            </div>

            <span className="text-white font-poppins text-lg">:</span>

            <div className="flex flex-col flex-1 items-center">
                <span className="text-mustard font-poppins text-lg">{timeLeft.seconds}</span>
                <span className="font-poppins text-white">Sec</span>
            </div>
        </div>
    );
}
