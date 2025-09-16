import { useEffect, useRef, useState } from "react";

export let PriceRangeSlider = ({
    min = 0,
    max = 200000,
    step = 1,
    initialMin,
    initialMax,
    currency = "$",
    onChange = () => { }
}) => {

    const _initialMin = typeof initialMin === "number" ? initialMin : min;
    const _initialMax = typeof initialMax === "number" ? initialMax : max;

    const [minVal, setMinVal] = useState(Math.max(min, Math.min(_initialMin, max)));
    const [maxVal, setMaxVal] = useState(Math.min(max, Math.max(_initialMax, min)));

    const minValRef = useRef(null);
    const maxValRef = useRef(null);

    useEffect(() => { if (minVal > maxVal - step) { setMinVal(maxVal - step); } }, [minVal, maxVal, step]);


    useEffect(() => {
        if (maxVal < minVal + step) {
            setMaxVal(minVal + step);
        }
    }, [minVal, maxVal, step]);


    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);


    const getPercent = (value) => {
        if (max === min) return 0;
        return Math.round(((value - min) / (max - min)) * 100);
    };


    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    const format = (v) => `${currency}${Math.round(v)}`;


    return (
        <div className="price-range-slider w-full">
            <p className="mb-2 text-[15px] font-medium text-dark-gray font-poppins">
                {format(minVal)} — {format(maxVal)}
            </p>


            <div className="relative w-full h-8">
                <div className="absolute top-3 left-0 right-0 h-2 rounded-full bg-gray-200" />
                <div className="absolute top-3 h-2 rounded-full bg-zinc-dark"
                    style={{
                        left: `${minPercent}%`,
                        width: `${Math.max(0, maxPercent - minPercent)}%`
                    }}
                />

                <input
                    ref={minValRef}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minVal}
                    onChange={(e) => setMinVal(Number(e.target.value))}
                    className="absolute inset-0 w-full h-8 appearance-none pointer-events-none"
                    style={{ zIndex: minVal > max - (max - min) / 2 ? 5 : 3 }}
                />

                <input
                    ref={maxValRef}
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxVal}
                    onChange={(e) => setMaxVal(Number(e.target.value))}
                    className="absolute inset-0 w-full h-8 appearance-none pointer-events-none"
                    style={{ zIndex: 4 }}
                />
            </div>
        </div>
    )
}