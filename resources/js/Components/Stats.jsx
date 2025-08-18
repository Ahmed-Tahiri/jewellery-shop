export let Stats = () => {

    const stats = [
        { id: 1, label: "Products", value: 128 },
        { id: 2, label: "Orders", value: 342 },
        { id: 3, label: "Categories", value: 24 },
        { id: 4, label: "Sub-categories", value: 63 },
    ];
    return <div className="flex flex-wrap gap-4 mb-6">
        {stats.map((s) => (
            <div
                key={s.id}
                className="bg-white rounded-lg p-4 shadow-sm w-full sm:w-1/2 lg:w-1/4"
            >
                <div className="text-sm text-gray-500">{s.label}</div>
                <div className="mt-2 text-2xl font-bold text-gray-800">{s.value}</div>
            </div>
        ))}
    </div>
}