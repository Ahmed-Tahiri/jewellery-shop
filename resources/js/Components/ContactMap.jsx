export let ContactMap = () => {
    const lat = 33.6573;
    const lng = 73.0572;

    return (
        <div className="w-full  h-80">
            <iframe
                title="location-map"
                className="h-100 w-full"
                src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                allowFullScreen
                aria-label="Map showing location"
            />
        </div>
    );
}

