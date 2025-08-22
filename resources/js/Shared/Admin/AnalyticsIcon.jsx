export let AnalyticsIcon = ({ icon }) => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="h-4 w-4 bg-mustard rounded-full absolute top-2.5 -right-0.5 shadow"></div>
            <div className="z-10">{icon}</div>
        </div>
    );
}